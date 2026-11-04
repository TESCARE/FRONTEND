# Tescare — form lead setup

Every booking and contact enquiry needs to land somewhere you can see.
This sets up one Google Apps Script that does two things on each
submission: appends a row to a Google Sheet, and emails the enquiry to
tescareservice@gmail.com.

No third-party service, no monthly cost, no API key in the public
JavaScript bundle. You own all the data.

**Time needed: about 10 minutes, once.**

---

## 1. Create the spreadsheet

1. Go to <https://sheets.google.com> and create a blank spreadsheet.
2. Rename it **Tescare Leads**.

Do not add any headers — the script creates them on the first enquiry.

## 2. Open Apps Script

In that spreadsheet: **Extensions → Apps Script**.

## 3. Paste the code

Delete whatever is in `Code.gs`, then paste the entire contents of
`docs/leads-apps-script.gs` from this repository. Save (Ctrl+S).

## 4. Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in:
   - **Description:** `Tescare lead capture`
   - **Execute as:** `Me (your@gmail.com)`
   - **Who has access:** `Anyone`  ← this must be *Anyone*, not
     "Anyone with Google account", or submissions from visitors will be
     rejected.
4. Click **Deploy**.
5. Google asks you to authorise it. Click **Authorize access**, pick your
   account, then **Advanced → Go to Tescare lead capture (unsafe) →
   Allow**. The "unsafe" warning is just Google saying the script is
   unpublished — it is your own script.

Copy the **Web app URL**. It looks like:

```
https://script.google.com/macros/s/AKfycbx..................../exec
```

## 5. Put the URL into the website

Create a file named `.env` in the project root (next to `package.json`)
containing one line:

```
VITE_LEADS_ENDPOINT=https://script.google.com/macros/s/AKfyc..../exec
```

Then restart the dev server (`npm run dev`) so Vite picks it up.

Alternatively, paste the URL into `PASTED_ENDPOINT` at the top of
`src/leadSubmit.js` — the `.env` route is tidier because the URL stays
out of the committed code.

## 6. Test it

Fill in the booking form on the site with your own name and number and
submit. Within a few seconds you should get:

- a new row in the **Leads** tab of the spreadsheet, and
- an email titled `New Booking enquiry — <name> (<phone>)`.

---

## If something goes wrong

The site never shows a false confirmation. If the enquiry does not
reach the script, the visitor sees an orange warning with your phone
number and WhatsApp link instead of a success message — so a lead is
never silently lost.

| What you see | Cause | Fix |
|---|---|---|
| Warning toast every time | `VITE_LEADS_ENDPOINT` not set, or dev server not restarted | Redo step 5, restart `npm run dev` |
| Warning toast, URL is set | Deployment access is not `Anyone` | Deploy → Manage deployments → edit → set **Who has access** to `Anyone` |
| Row appears but no email | Gmail daily quota, or it went to spam | Check spam; Apps Script free quota is 100 emails/day |
| Nothing at all | Script not saved before deploying | Save `Code.gs`, then **Deploy → Manage deployments → edit → New version** |

## After you change the script

Editing `Code.gs` does **not** update the live endpoint. You must go to
**Deploy → Manage deployments → ✏️ edit → Version: New version → Deploy**.
The URL stays the same.

## Where the data goes

- **Spreadsheet** — your permanent lead record. Sort, filter, add an
  "Assigned to" or "Status" column to the right; the script only writes
  columns A–L and will not disturb anything you add after them.
- **Email** — the instant ping so you can call back quickly. The subject
  carries the name and phone number so it is readable from a phone's
  lock screen without opening the mail.
