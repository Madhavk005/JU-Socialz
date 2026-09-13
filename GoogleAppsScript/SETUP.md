# Google Apps Script Setup for JU Socialz Join Form

## 1. Create the Script

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Replace `Code.gs` with the contents of `JoinFormHandler.gs`
4. Save the project (e.g., "JU Socialz Form Handler")

## 2. Configure the Spreadsheet

1. In the Apps Script editor, click the **+** next to "Services" → **Google Sheets API**
2. The script uses the **active spreadsheet** - so either:
   - Open your target Google Sheet first, then open Apps Script from **Extensions → Apps Script**
   - Or manually set the spreadsheet ID in the code

## 3. Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Type: **Web app**
3. Execute as: **Me** (your account)
4. Who has access: **Anyone** (required for form submission)
5. Click **Deploy**
6. Copy the **Web App URL** (looks like: `https://script.google.com/macros/s/AKfycbx.../exec`)

## 4. Configure Environment Variable

Add to your `.env.local`:
```
NEXT_PUBLIC_JOIN_FORM_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## 5. Test

1. Submit a test application on your site
2. Check the Google Sheet - new row should appear
3. Check Google Drive → "JU Socialz Applications" folder for uploaded files

## Notes

- **File size limit**: Apps Script has a 100MB total request limit. Your 50MB limit is safe.
- **Base64 decoding**: Files are sent as base64 strings, decoded server-side.
- **CORS**: The form uses `mode: "no-cors"` so the response won't be readable, but the script still executes.
- **Rate limits**: Apps Script has daily quotas (20k executions/day for consumer, higher for Workspace).

## Updating the Script

After making changes:
1. Increment version in deployment: **Deploy → Manage deployments → Edit → New version**
2. The URL stays the same