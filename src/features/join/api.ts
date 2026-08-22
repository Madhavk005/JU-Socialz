// ================================================================
// NEXT.JS FRONTEND SUBMISSION CODE
// Place in: src/features/join/api.ts (or your API utility file)
// ================================================================

export interface JoinFormValues {
  name: string;
  email: string;
  phone: string;
  socialHandle: string;
  course: string;
  year: string;
  accommodation: string;
  primarySkill: string;
  secondarySkills: string[];
  aboutYou: string;
  whySocialz: string;
  workStyle: string;
  superpower: string;
}

export interface EncodedFile {
  name: string;
  type: string;
  data: string;      // base64 string (without data: prefix)
  size: number;
}

export interface SubmitResponse {
  success: boolean;
  message?: string;
  error?: string;
  row?: number;
  filesUploaded?: number;
  driveFolderUrl?: string;
}

/**
 * Submit application to Google Apps Script Web App
 * 
 * Field names MUST exactly match Apps Script CONFIG.REQUIRED_FIELDS
 * and file parameters (fileCount, file1_name, file1_type, file1_data, etc.)
 */
export async function submitApplication(
  values: JoinFormValues,
  files: EncodedFile[],
  signal?: AbortSignal
): Promise<SubmitResponse> {
  const endpoint = process.env.NEXT_PUBLIC_JOIN_FORM_ENDPOINT;
  
  if (!endpoint) {
    console.error("[JoinForm] NEXT_PUBLIC_JOIN_FORM_ENDPOINT not configured");
    return { success: false, error: "Form endpoint not configured" };
  }

  // Build URLSearchParams - matches Apps Script e.parameter exactly
  const body = new URLSearchParams();
  
  // Required fields (exact names)
  body.set("name", values.name);
  body.set("email", values.email);
  body.set("phone", values.phone);
  body.set("socialHandle", values.socialHandle);
  body.set("course", values.course);
  body.set("year", values.year);
  body.set("accommodation", values.accommodation);
  body.set("primarySkill", values.primarySkill);
  body.set("secondarySkills", values.secondarySkills.join(", "));
  body.set("aboutYou", values.aboutYou);
  body.set("whySocialz", values.whySocialz);
  body.set("workStyle", values.workStyle);
  body.set("superpower", values.superpower);
  
  // Files
  body.set("fileCount", String(files.length));
  files.forEach((f, i) => {
    const idx = i + 1;
    body.set(`file${idx}_name`, f.name);
    body.set(`file${idx}_type`, f.type);
    body.set(`file${idx}_data`, f.data);
  });

  try {
    await fetch(endpoint, {
      method: "POST",
      // IMPORTANT: no-cors mode prevents reading response, but Apps Script still executes
      // For development, you may want to use a proxy or deploy with CORS headers
      // In production with "Anyone" access, this works but response is opaque
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
      signal,
    });

    // With no-cors, response is opaque - we can't read it
    // But the submission still succeeds on the server
    return { success: true, message: "Application submitted" };
    
  } catch (err) {
    // Network errors will be caught here
    // Note: CORS errors won't be caught with no-cors mode
    console.error("[JoinForm] Submission error:", err);
    return { success: false, error: err instanceof Error ? err.message : "Submission failed" };
  }
}

/**
 * Alternative: Submit with JSON (if Apps Script deployed with CORS support)
 * Requires Apps Script to handle OPTIONS preflight
 */
export async function submitApplicationJson(
  values: JoinFormValues,
  files: EncodedFile[],
  signal?: AbortSignal
): Promise<SubmitResponse> {
  const endpoint = process.env.NEXT_PUBLIC_JOIN_FORM_ENDPOINT;
  
  if (!endpoint) {
    return { success: false, error: "Form endpoint not configured" };
  }

  const payload = {
    name: values.name,
    email: values.email,
    phone: values.phone,
    socialHandle: values.socialHandle,
    course: values.course,
    year: values.year,
    accommodation: values.accommodation,
    primarySkill: values.primarySkill,
    secondarySkills: values.secondarySkills.join(", "),
    aboutYou: values.aboutYou,
    whySocialz: values.whySocialz,
    workStyle: values.workStyle,
    superpower: values.superpower,
    fileCount: files.length,
    ...files.reduce((acc, f, i) => {
      const idx = i + 1;
      acc[`file${idx}_name`] = f.name;
      acc[`file${idx}_type`] = f.type;
      acc[`file${idx}_data`] = f.data;
      return acc;
    }, {} as Record<string, string>)
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    return data;
    
  } catch (err) {
    console.error("[JoinForm] JSON submission error:", err);
    return { success: false, error: err instanceof Error ? err.message : "Submission failed" };
  }
}

/**
 * Helper: Convert File to base64 EncodedFile
 */
export function fileToEncodedFile(file: File): Promise<EncodedFile> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Strip data:mime;base64, prefix
      const base64 = result.split(",")[1] || result;
      resolve({
        name: file.name,
        type: file.type,
        data: base64,
        size: file.size,
      });
    };
    reader.onerror = () => reject(new Error(`Failed to read ${file.name}`));
    reader.readAsDataURL(file);
  });
}

/**
 * Helper: Convert multiple Files
 */
export async function filesToEncodedFiles(files: FileList | File[]): Promise<EncodedFile[]> {
  const fileArray = Array.from(files);
  return Promise.all(fileArray.map(fileToEncodedFile));
}