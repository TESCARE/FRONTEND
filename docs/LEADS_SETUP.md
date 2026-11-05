# Tescare — where form enquiries go

Both enquiry forms — the booking form (`#book`) and the contact form
(`#contact`) — send to **tescareservice@gmail.com** through
[Web3Forms](https://web3forms.com).

Nothing needs installing or deploying. The access key is already in
`src/leadSubmit.js`, so the forms work as soon as the site is live.

## What arrives

One email per submission:

```
Subject: New Booking enquiry — Priya Ramachandran (9150044725)
From:    Tescare Website
Reply-To: the customer's own email address

Form: Booking
Name: Priya Ramachandran
Mobile: 9150044725
Email: priya@example.com
City: chennai
Service: Cockroach Control (Gel & Spray)
Property: apartment
Preferred date: 2026-11-12
Time slot: morning
Message: Kitchen infestation, ground floor flat.
Submitted from: https://.../#book
Received: 05/11/2026, 3:40:12 pm
```

Hitting **Reply** writes straight to the customer, because `Reply-To` is
set to the address they entered.

The subject line carries the name and number, so a lead is readable from
a phone's lock screen without opening the mail.

## Key facts

- **Access key:** `f4940e07-4f4b-42b8-aafe-efc508dde653`
- The key is a *public* client key. Web3Forms keys are designed to sit in
  frontend JavaScript; they cannot be used to read past submissions.
- The destination address is set on the Web3Forms account that owns the
  key — **not** in this code. Changing the address is done at
  web3forms.com, and nobody can redirect your mail by editing the site.
- Free tier allows 250 submissions per month.

## Changing the destination

Log in at [web3forms.com](https://web3forms.com) with the account the key
belongs to and change the inbox there. No code change needed.

To point the site at a *different* Web3Forms account, put that account's
key in a `.env` file at the project root:

```
VITE_WEB3FORMS_KEY=your-other-key-here
```

and restart `npm run dev`. `.env` is gitignored.

## Spam protection

A `botcheck` honeypot field is sent empty on every submission. Web3Forms
rejects anything that fills it in, which stops most bots without a
CAPTCHA.

## If an enquiry fails

The site never shows a false confirmation. If Web3Forms does not accept
the submission — network drop, timeout, monthly quota reached, bad key —
the customer sees an orange warning with the Tescare phone number and
WhatsApp link instead of a success message, so the lead is not silently
lost.

| What the customer sees | Likely cause |
|---|---|
| Green "Inspection Request Received" | Delivered |
| Orange warning | Network, timeout, quota, or an invalid key |

## Also in this folder

`leads-apps-script.gs` — an optional Google Apps Script that logs each
enquiry to a Google Sheet as well as emailing it. It is **not** wired up;
the site uses Web3Forms only. Keep it if you later want a sortable lead
sheet rather than an inbox.
