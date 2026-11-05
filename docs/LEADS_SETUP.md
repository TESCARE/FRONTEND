# Tescare — enquiry capture

Every enquiry goes to two places at once:

1. **Email** — tescareservice@gmail.com, via Web3Forms. *Already working.*
2. **Google Sheet** — "TESCARE SERVICES", via an Apps Script bound to it.
   *Needs the one-time setup below.*

Both carry the same **Enquiry ID**, so the sheet can tell a notification
email apart from a row it already holds. That is what stops duplicates.

---

## How it fits together

```
  Booking form  ─┐
                 ├─→ Web3Forms ──→ inbox ──┐
  Contact form  ─┘                          │  (5-min sweep)
                 └─→ Apps Script ──→ SHEET ←┘
                        (direct)
```

The direct post fills the sheet in about a second. The Gmail sweep is the
safety net: anything the direct post missed — browser closed mid-submit,
network dropped, script quota hit — is recovered from the notification
email within five minutes. The sweep also picks up **genuine enquiry
emails from real people**, which is how email enquiries reach the sheet.

Three things therefore have to go wrong at once to lose an enquiry, and
even then the customer is shown a warning with the phone number rather
than a false confirmation.

## The sheet

Spreadsheet: **TESCARE SERVICES**
`1wjPo3R18wcFA81F6Ul9j7URSwXraYEx3LrjiHlFzZuQ`

Columns, already created:

| Col | Header | Notes |
|-----|--------|-------|
| A | Enquiry ID | `TES-20261105-K3F9`, or `EML-…` for an email with no stamp |
| B | Customer Name | |
| C | Mobile Number | normalised to 10 digits |
| D | Email Address | |
| E | Service Requested | full label, e.g. "Cockroach Control (Gel & Spray)" |
| F | Enquiry Message | |
| G | Source Page | the exact URL submitted from |
| H | Enquiry Date & Time | IST |
| I | Enquiry Status | defaults to `New` — yours to edit |
| J | Channel | `Website` or `Email` |
| K | City | booking form only |
| L | Property Type | booking form only |
| M | Preferred Date | booking form only |
| N | Time Slot | booking form only |

Columns I and anything you add to the right are yours. The script only
writes the headers it knows and never touches your edits.

---

## Setup — about 5 minutes, once

### 1. Open the script editor

In the TESCARE SERVICES spreadsheet: **Extensions → Apps Script**.

### 2. Paste the code

Delete what is in `Code.gs` and paste the whole of
`docs/tescare-leads.gs` from this repository. Save (Ctrl+S).

### 3. Start the Gmail sweep

In the function dropdown pick **installTriggers**, then **Run**.

Google asks for authorisation the first time: **Review permissions** →
pick your account → **Advanced** → **Go to … (unsafe)** → **Allow**. The
"unsafe" warning only means the script is unpublished — it is your own.

It asks for Gmail read access because that is how email enquiries reach
the sheet.

### 4. Deploy as a web app

**Deploy → New deployment → ⚙ → Web app**, then:

- **Execute as:** `Me`
- **Who has access:** `Anyone` ← must be plain "Anyone", not "Anyone with
  a Google account", or submissions from visitors are rejected

Click **Deploy** and copy the **Web app URL**:

```
https://script.google.com/macros/s/AKfycb…/exec
```

### 5. Give the URL to the site

Create a `.env` file in the project root:

```
VITE_SHEET_ENDPOINT=https://script.google.com/macros/s/AKfycb…/exec
```

Restart `npm run dev`. For the live site, add the same variable in
**Vercel → Settings → Environment Variables** and redeploy.

(Or paste it into `PASTED_SHEET_ENDPOINT` at the top of
`src/leadSubmit.js` — `.env` is tidier because the URL stays out of git.)

### 6. Test

Submit the booking form and the contact form with real details. Each
should produce an email within seconds and a row in the sheet with
Channel = `Website`.

Then test recovery: submit with the sheet endpoint removed from `.env`.
No row appears at first; within five minutes the Gmail sweep files it
with Channel = `Email` and the same Enquiry ID.

---

## After editing the script

Editing `Code.gs` does **not** update the live endpoint. Go to
**Deploy → Manage deployments → ✏️ → Version: New version → Deploy**.
The URL stays the same.

## Security

- No credentials in frontend code. The Web3Forms access key is a public
  client key by design; the Apps Script URL is write-only and cannot read
  the sheet.
- The script runs under your own Google authorisation, so no service
  account or GCP project is needed, and nothing has standing access to
  the spreadsheet except you.
- `SHARED_TOKEN` in both files must match. It rejects casual junk posts
  to the endpoint. It is visible in the bundle, so it is a speed bump,
  not a secret — change it in both places if you ever see spam rows.

## Limits

- Web3Forms free tier: 250 submissions/month.
- Apps Script: 20,000 Gmail reads/day, 90 min total runtime/day. A
  5-minute sweep uses a tiny fraction of that.
- The sweep looks back 7 days (`MAIL_QUERY`). Enquiry emails older than
  that are not backfilled; widen it once if you want history imported.
