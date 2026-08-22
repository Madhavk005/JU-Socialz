/****************************************************** 
 * JU Socialz Recruitment API
 * Complete rewrite - handles Next.js form submissions
 ******************************************************/

// ================================================================
// CONFIGURATION - UPDATE THESE VALUES BEFORE DEPLOYING
// ================================================================
const CONFIG = {
  // Spreadsheet ID from URL: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit
  SPREADSHEET_ID: "PASTE_YOUR_SPREADSHEET_ID_HERE",
  
  // Drive Folder ID from URL: https://drive.google.com/drive/folders/{FOLDER_ID}
  DRIVE_FOLDER_ID: "PASTE_YOUR_DRIVE_FOLDER_ID_HERE",
  
  // Sheet name (tab name) inside the spreadsheet
  SHEET_NAME: "Responses",
  
  // Required fields that must be present in submission
  REQUIRED_FIELDS: [
    "name", "email", "phone", "socialHandle",
    "course", "year", "accommodation",
    "primarySkill", "aboutYou", "whySocialz",
    "workStyle", "superpower"
  ],
  
  // Expected column headers (exact order for 18 columns)
  HEADERS: [
    "Timestamp",
    "Name",
    "Email",
    "Phone",
    "Instagram",
    "Course",
    "Year",
    "Accommodation",
    "Primary Skill",
    "Secondary Skills",
    "About You",
    "Why Socialz",
    "Work Style",
    "Superpower",
    "File Count",
    "File Names",
    "Drive Folder",
    "Drive File Links"
  ]
};

// ================================================================
// MAIN ENTRY POINT - Handles both JSON and form-encoded POST
// ================================================================
function doPost(e) {
  try {
    // Parse request - supports both application/json and application/x-www-form-urlencoded
    const params = parseRequest(e);
    
    // Validate required fields
    const validation = validateRequired(params);
    if (!validation.valid) {
      return jsonResponse({ success: false, error: validation.error });
    }
    
    // Get or create sheet with proper headers
    const sheet = getOrCreateSheet();
    
    // Upload files to Drive (after validation, so we don't orphan files on invalid submissions)
    const fileUploadResult = uploadFiles(params, CONFIG.DRIVE_FOLDER_ID);
    
    // Build row data matching exact column order
    const rowData = buildRowData(params, fileUploadResult);
    
    // Append to sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return jsonResponse({
      success: true,
      message: "Application submitted successfully",
      row: sheet.getLastRow(),
      filesUploaded: fileUploadResult.fileCount,
      driveFolderUrl: fileUploadResult.folderUrl
    });
    
  } catch (err) {
    console.error("Submission error:", err);
    return jsonResponse({
      success: false,
      error: err.toString()
    });
  }
}

// ================================================================
// REQUEST PARSING - Handles both JSON and form-encoded
// ================================================================
function parseRequest(e) {
  // e.postData exists for both content types
  const postData = e.postData;
  
  if (!postData) {
    throw new Error("No post data received");
  }
  
  const contentType = postData.type || "";
  const contents = postData.contents || "";
  
  // Handle JSON
  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(contents);
    } catch (err) {
      throw new Error("Invalid JSON: " + err.message);
    }
  }
  
  // Handle form-encoded (URLSearchParams)
  // e.parameter already parses this, but we need fileCount as number
  const params = e.parameter || {};
  
  // Ensure fileCount is parsed
  if (params.fileCount) {
    params.fileCount = String(params.fileCount);
  }
  
  return params;
}

// ================================================================
// SHEET MANAGEMENT - Creates/updates sheet with correct headers
// ================================================================
function getOrCreateSheet() {
  // Use SpreadsheetApp.openById for reliable access (works in Web App context)
  if (!CONFIG.SPREADSHEET_ID || CONFIG.SPREADSHEET_ID === "PASTE_YOUR_SPREADSHEET_ID_HERE") {
    throw new Error("SPREADSHEET_ID not configured. Update CONFIG.SPREADSHEET_ID at top of script.");
  }
  
  const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    initializeSheet(sheet);
  } else {
    // Repair headers if they don't match
    repairHeadersIfNeeded(sheet);
  }
  
  return sheet;
}

function initializeSheet(sheet) {
  sheet.appendRow(CONFIG.HEADERS);
  formatHeaderRow(sheet);
}

function repairHeadersIfNeeded(sheet) {
  const existingHeaders = sheet.getRange(1, 1, 1, CONFIG.HEADERS.length).getValues()[0];
  const headersMatch = existingHeaders.every((h, i) => h === CONFIG.HEADERS[i]);
  
  if (!headersMatch) {
    console.log("Headers mismatch detected. Repairing...");
    sheet.getRange(1, 1, 1, CONFIG.HEADERS.length).setValues([CONFIG.HEADERS]);
    formatHeaderRow(sheet);
  }
}

function formatHeaderRow(sheet) {
  sheet.setFrozenRows(1);
  const headerRange = sheet.getRange(1, 1, 1, CONFIG.HEADERS.length);
  headerRange
    .setBackground("#000000")
    .setFontColor("#ffffff")
    .setFontWeight("bold")
    .setFontSize(11);
  sheet.setColumnWidths(1, CONFIG.HEADERS.length, 200);
}

// ================================================================
// VALIDATION
// ================================================================
function validateRequired(params) {
  for (const field of CONFIG.REQUIRED_FIELDS) {
    const value = params[field];
    if (!value || String(value).trim() === "") {
      return { valid: false, error: `Missing required field: ${field}` };
    }
  }
  
  // Email format
  const email = params.email;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: "Invalid email format" };
  }
  
  // Phone - 10 digits
  const phone = params.phone;
  if (phone && !/^\d{10}$/.test(String(phone).trim())) {
    return { valid: false, error: "Phone must be 10 digits" };
  }
  
  return { valid: true };
}

// ================================================================
// FILE UPLOAD - Creates applicant subfolder, uploads files
// ================================================================
function uploadFiles(params, folderId) {
  const result = {
    fileCount: 0,
    fileNames: [],
    fileLinks: [],
    folderUrl: ""
  };
  
  const fileCount = parseInt(params.fileCount || "0", 10);
  
  if (fileCount === 0) {
    return result;
  }
  
  if (!folderId || folderId === "PASTE_YOUR_DRIVE_FOLDER_ID_HERE") {
    console.warn("DRIVE_FOLDER_ID not configured - skipping file upload");
    return result;
  }
  
  try {
    const parentFolder = DriveApp.getFolderById(folderId);
    
    // Create applicant-specific subfolder
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const applicantName = (params.name || "Applicant").replace(/[\\/:*?"<>|]/g, "_");
    const subfolderName = `${applicantName}_${timestamp}`;
    const subfolder = parentFolder.createFolder(subfolderName);
    
    result.folderUrl = `https://drive.google.com/drive/folders/${subfolder.getId()}`;
    
    for (let i = 1; i <= fileCount; i++) {
      const name = params[`file${i}_name`];
      const type = params[`file${i}_type`];
      const data = params[`file${i}_data`];
      
      if (name && type && data) {
        try {
          const blob = Utilities.newBlob(
            Utilities.base64Decode(data),
            type,
            name
          );
          
          const uploaded = subfolder.createFile(blob);
          uploaded.setSharing(
            DriveApp.Access.ANYONE_WITH_LINK,
            DriveApp.Permission.VIEW
          );
          
          result.fileCount++;
          result.fileNames.push(name);
          result.fileLinks.push(uploaded.getUrl());
          
        } catch (fileErr) {
          console.error(`Failed to upload file ${i} (${name}):`, fileErr);
          result.fileNames.push(name + " (ERROR)");
          result.fileLinks.push("UPLOAD_FAILED");
        }
      }
    }
    
  } catch (folderErr) {
    console.error("Drive folder error:", folderErr);
    result.folderUrl = "ERROR: " + folderErr.message;
  }
  
  return result;
}

// ================================================================
// ROW DATA BUILDER - Matches exact 18-column order
// ================================================================
function buildRowData(params, fileResult) {
  const secondarySkills = formatSecondarySkills(params.secondarySkills);
  
  return [
    new Date(),                                    // A: Timestamp
    params.name,                                   // B: Name
    params.email,                                  // C: Email
    params.phone,                                  // D: Phone
    params.socialHandle,                           // E: Instagram
    params.course,                                 // F: Course
    params.year,                                   // G: Year
    params.accommodation,                          // H: Accommodation
    params.primarySkill,                           // I: Primary Skill
    secondarySkills,                               // J: Secondary Skills
    params.aboutYou,                               // K: About You
    params.whySocialz,                             // L: Why Socialz
    params.workStyle,                              // M: Work Style
    params.superpower,                             // N: Superpower
    fileResult.fileCount,                          // O: File Count
    fileResult.fileNames.join(", "),               // P: File Names
    fileResult.folderUrl,                          // Q: Drive Folder
    fileResult.fileLinks.join("\n")                // R: Drive File Links
  ];
}

function formatSecondarySkills(skills) {
  if (!skills) return "";
  return String(skills).split(",").map(s => s.trim()).join(", ");
}

// ================================================================
// JSON RESPONSE HELPER
// ================================================================
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ================================================================
// SETUP & TESTING FUNCTIONS
// ================================================================

/**
 * Run this ONCE after setting CONFIG.SPREADSHEET_ID and CONFIG.DRIVE_FOLDER_ID
 * Creates the sheet with proper headers and formatting
 */
function setupSheet() {
  const sheet = getOrCreateSheet();
  console.log("✅ Sheet ready:", sheet.getUrl());
  console.log("✅ Headers:", CONFIG.HEADERS.join(" | "));
  return sheet.getUrl();
}

/**
 * Test submission WITHOUT file upload
 * Run this to verify the full pipeline works
 */
function testDummyEntry() {
  const mockEvent = {
    postData: {
      type: "application/x-www-form-urlencoded",
      contents: "",
      length: 0
    },
    parameter: {
      name: "Aarav Sharma",
      email: "aarav.sharma@jecrcu.edu.in",
      phone: "9876543210",
      socialHandle: "@aarav_creates",
      course: "B.Tech CSE",
      year: "2",
      accommodation: "Hosteller",
      primarySkill: "Editing",
      secondarySkills: "Cinematography, Graphic Design",
      aboutYou: "I'm a 2nd year CSE student who loves storytelling through video. I've been editing since high school and have worked on several college fest aftermovies. I'm passionate about creating content that connects with people.",
      whySocialz: "JU Socialz is where campus culture meets creativity. I want to be part of the team that shapes how JECRC University is perceived online. It's not just about posting content - it's about building a digital identity for 20,000+ students.",
      workStyle: "Give me the task, I'll figure it out.",
      superpower: "I can spot a good hook in the first 3 seconds of any reel. Also, I make a mean cold brew at 3 AM during edit sessions.",
      fileCount: "0"
    }
  };

  const result = doPost(mockEvent);
  const response = JSON.parse(result.getContent());
  console.log("📝 Test result:", response);
  return response;
}

/**
 * Test submission WITH file upload
 * Uploads a tiny 1x1 transparent PNG as test file
 */
function testWithFile() {
  // 1x1 transparent PNG base64
  const testBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
  
  const mockEvent = {
    postData: {
      type: "application/x-www-form-urlencoded",
      contents: "",
      length: 0
    },
    parameter: {
      name: "Test User",
      email: "test@example.com",
      phone: "9876543210",
      socialHandle: "@testuser",
      course: "B.Tech",
      year: "1",
      accommodation: "Day Scholar",
      primarySkill: "Photography",
      secondarySkills: "Graphic Design",
      aboutYou: "Test entry with file upload",
      whySocialz: "Testing file upload functionality",
      workStyle: "I work best with a team.",
      superpower: "Testing things",
      fileCount: "1",
      file1_name: "test.png",
      file1_type: "image/png",
      file1_data: testBase64
    }
  };

  const result = doPost(mockEvent);
  const response = JSON.parse(result.getContent());
  console.log("📁 File test result:", response);
  return response;
}

/**
 * Test JSON parsing
 */
function testJsonParsing() {
  const mockEvent = {
    postData: {
      type: "application/json",
      contents: JSON.stringify({
        name: "JSON Test",
        email: "json@test.com",
        phone: "9876543210",
        socialHandle: "@jsontest",
        course: "MCA",
        year: "1",
        accommodation: "Hosteller",
        primarySkill: "Content Creation",
        secondarySkills: "Social Media Management",
        aboutYou: "Testing JSON payload",
        whySocialz: "JSON test",
        workStyle: "Depends on the task — I adapt.",
        superpower: "Parsing JSON",
        fileCount: "0"
      }),
      length: 0
    }
  };

  const result = doPost(mockEvent);
  const response = JSON.parse(result.getContent());
  console.log("📦 JSON test result:", response);
  return response;
}