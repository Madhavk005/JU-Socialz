/****************************************************** 
 * JU Socialz Recruitment API
 * Handles form submissions from Next.js frontend
 ******************************************************/

// ===== CONFIGURATION =====
const CONFIG = {
  SHEET_NAME: "Responses",
  DRIVE_FOLDER_ID: "PASTE_YOUR_FOLDER_ID_HERE",  // Replace with your Drive folder ID
  REQUIRED_FIELDS: [
    "name", "email", "phone", "socialHandle", 
    "course", "year", "accommodation", 
    "primarySkill", "aboutYou", "whySocialz", 
    "workStyle", "superpower"
  ]
};

// ===== MAIN ENTRY POINT =====
function doPost(e) {
  try {
    const sheet = getOrCreateSheet();
    const params = e.parameter;
    
    // Validate required fields
    const validation = validateRequired(params);
    if (!validation.valid) {
      return jsonResponse({ success: false, error: validation.error });
    }

    // Upload files to Drive
    const mediaLinks = uploadFiles(params, CONFIG.DRIVE_FOLDER_ID);

    // Prepare row data
    const rowData = buildRowData(params, mediaLinks);

    // Append to sheet
    sheet.appendRow(rowData);

    return jsonResponse({ 
      success: true, 
      message: "Application submitted successfully" 
    });

  } catch (err) {
    console.error("Submission error:", err);
    return jsonResponse({ 
      success: false, 
      error: err.toString() 
    });
  }
}

// ===== HELPER FUNCTIONS =====

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    initializeSheet(sheet);
  }
  return sheet;
}

function initializeSheet(sheet) {
  const headers = [
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
    "Uploaded Media"
  ];
  
  sheet.appendRow(headers);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground("#000000")
    .setFontColor("#ffffff")
    .setFontWeight("bold")
    .setFontSize(11);
  
  // Set column widths
  sheet.setColumnWidths(1, headers.length, 180);
}

function validateRequired(params) {
  for (const field of CONFIG.REQUIRED_FIELDS) {
    if (!params[field] || String(params[field]).trim() === "") {
      return { valid: false, error: `Missing required field: ${field}` };
    }
  }
  
  // Validate email format
  const email = params.email;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: "Invalid email format" };
  }
  
  // Validate phone (10 digits)
  const phone = params.phone;
  if (phone && !/^\d{10}$/.test(phone)) {
    return { valid: false, error: "Phone must be 10 digits" };
  }
  
  return { valid: true };
}

function uploadFiles(params, folderId) {
  const mediaLinks = [];
  const fileCount = parseInt(params.fileCount || "0", 10);
  
  if (fileCount === 0 || !folderId || folderId === "PASTE_YOUR_FOLDER_ID_HERE") {
    return mediaLinks;
  }
  
  try {
    const folder = DriveApp.getFolderById(folderId);
    
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
          
          const uploaded = folder.createFile(blob);
          uploaded.setSharing(
            DriveApp.Access.ANYONE_WITH_LINK,
            DriveApp.Permission.VIEW
          );
          mediaLinks.push(uploaded.getUrl());
        } catch (fileErr) {
          console.error(`Failed to upload ${name}:`, fileErr);
          mediaLinks.push(`ERROR: ${name}`);
        }
      }
    }
  } catch (folderErr) {
    console.error("Drive folder error:", folderErr);
  }
  
  return mediaLinks;
}

function buildRowData(params, mediaLinks) {
  const fileCount = parseInt(params.fileCount || "0", 10);
  const secondarySkills = formatSecondarySkills(params.secondarySkills);
  
  return [
    new Date(),                           // Timestamp
    params.name,                          // Name
    params.email,                         // Email
    params.phone,                         // Phone
    params.socialHandle,                  // Instagram
    params.course,                        // Course
    params.year,                          // Year
    params.accommodation,                 // Accommodation
    params.primarySkill,                  // Primary Skill
    secondarySkills,                      // Secondary Skills
    params.aboutYou,                      // About You
    params.whySocialz,                    // Why Socialz
    params.workStyle,                     // Work Style
    params.superpower,                    // Superpower
    fileCount,                            // File Count
    mediaLinks.join("\n")                 // Uploaded Media Links
  ];
}

function formatSecondarySkills(skills) {
  if (!skills) return "";
  return skills.split(",").map(s => s.trim()).join(", ");
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ===== SETUP & TESTING =====

function setupSheet() {
  const sheet = getOrCreateSheet();
  initializeSheet(sheet);
  console.log("Sheet initialized:", sheet.getUrl());
}

function testDummyEntry() {
  const mockEvent = {
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
  console.log("Test result:", result.getContent());
  return result.getContent();
}

function testWithFile() {
  // Create a tiny base64 test file (1x1 transparent PNG)
  const testBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
  
  const mockEvent = {
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
  console.log("File test result:", result.getContent());
  return result.getContent();
}