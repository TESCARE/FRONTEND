/**
 * TESCARE — enquiry capture backend.
 * Bound to the "TESCARE SERVICES" spreadsheet.
 *
 * Two intake paths, one sheet, no duplicates:
 *
 *   1. doPost()           the website posts each enquiry directly.
 *   2. pollEnquiryMail()  a 5-minute trigger reads the Web3Forms
 *      notification mails in Gmail and files anything the direct post
 *      did not manage to write.
 *
 * Path 2 is what makes the system self-healing: if the browser is closed
 * mid-submit, the network drops, or this script is down, the email still
 * reached the inbox, so the enquiry is recovered on the next poll.
 *
 * Duplicates are prevented by the Enquiry ID, which the website mints
 * once and sends down BOTH paths. An enquiry that arrives by email with
 * no Enquiry ID (a real person emailing in) gets a stable id derived
 * from its Gmail message id, so re-polling never doubles it up.
 *
 * Credentials: none. This script runs as the spreadsheet's owner under
 * Google's own authorisation. The website only ever holds this web app's
 * URL, which cannot be used to read the sheet.
 */

// ---------------------------------------------------------------- config

/**
 * The TESCARE SERVICES spreadsheet. Set explicitly so this works whether
 * the script is bound to the sheet (Extensions > Apps Script) or is a
 * standalone project — getActiveSpreadsheet() returns null in the latter.
 */
var SPREADSHEET_ID = '1wjPo3R18wcFA81F6Ul9j7URSwXraYEx3LrjiHlFzZuQ';

var SHEET_NAME = 'Sheet1';
var TIMEZONE = 'Asia/Kolkata';
var DEFAULT_STATUS = 'New';

/** Must match SHARED_TOKEN in src/leadSubmit.js. Rejects casual junk posts. */
var SHARED_TOKEN = 'tescare-web-2026';

/** Gmail search for the enquiry notifications to sweep up. */
var MAIL_QUERY = 'from:(web3forms.com OR notify@web3forms.com) newer_than:7d';

/** Column order. Change the sheet's header row and this follows it. */
var COLUMNS = [
  'Enquiry ID', 'Customer Name', 'Mobile Number', 'Email Address',
  'Service Requested', 'Enquiry Message', 'Source Page',
  'Enquiry Date & Time', 'Enquiry Status', 'Channel',
  'City', 'Property Type', 'Preferred Date', 'Time Slot',
];

/** Payload key -> column header. */
var FIELD_MAP = {
  enquiryId: 'Enquiry ID',
  name: 'Customer Name',
  phone: 'Mobile Number',
  email: 'Email Address',
  service: 'Service Requested',
  message: 'Enquiry Message',
  pageUrl: 'Source Page',
  receivedAt: 'Enquiry Date & Time',
  status: 'Enquiry Status',
  channel: 'Channel',
  city: 'City',
  propertyType: 'Property Type',
  preferredDate: 'Preferred Date',
  timeSlot: 'Time Slot',
};

// ----------------------------------------------------------------- sheet

function getSheet_() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS);
    sheet.getRange(1, 1, 1, COLUMNS.length)
      .setFontWeight('bold').setFontColor('#FFFFFF').setBackground('#16A34A');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/** Reads the live header row so the script maps into whatever is there. */
function headerIndex_(sheet) {
  var width = Math.max(sheet.getLastColumn(), COLUMNS.length);
  var headers = sheet.getRange(1, 1, 1, width).getValues()[0];
  var index = {};
  for (var i = 0; i < headers.length; i++) {
    var h = String(headers[i]).trim();
    if (h) index[h] = i;
  }
  // Append any column this script needs but the sheet does not yet have.
  for (var j = 0; j < COLUMNS.length; j++) {
    if (!(COLUMNS[j] in index)) {
      var col = Object.keys(index).length + 1;
      sheet.getRange(1, col).setValue(COLUMNS[j])
        .setFontWeight('bold').setFontColor('#FFFFFF').setBackground('#16A34A');
      index[COLUMNS[j]] = col - 1;
    }
  }
  return index;
}

/** Every Enquiry ID already in the sheet — the duplicate guard. */
function existingIds_(sheet, index) {
  var col = index['Enquiry ID'];
  if (col === undefined || sheet.getLastRow() < 2) return {};
  var values = sheet.getRange(2, col + 1, sheet.getLastRow() - 1, 1).getValues();
  var seen = {};
  for (var i = 0; i < values.length; i++) {
    var id = String(values[i][0]).trim();
    if (id) seen[id] = true;
  }
  return seen;
}

function nowIst_() {
  return Utilities.formatDate(new Date(), TIMEZONE, 'dd MMM yyyy, hh:mm a');
}

/**
 * Appends one enquiry. Returns 'added' or 'duplicate'.
 * Caller must hold the script lock.
 */
function writeEnquiry_(sheet, index, data) {
  var seen = existingIds_(sheet, index);
  if (data.enquiryId && seen[data.enquiryId]) return 'duplicate';

  var width = Object.keys(index).length;
  var row = [];
  for (var w = 0; w < width; w++) row.push('');

  for (var key in FIELD_MAP) {
    var col = index[FIELD_MAP[key]];
    if (col !== undefined && data[key]) row[col] = String(data[key]);
  }
  if (index['Enquiry Status'] !== undefined && !data.status) {
    row[index['Enquiry Status']] = DEFAULT_STATUS;
  }
  if (index['Enquiry Date & Time'] !== undefined && !data.receivedAt) {
    row[index['Enquiry Date & Time']] = nowIst_();
  }
  sheet.appendRow(row);
  return 'added';
}

// ------------------------------------------------------------ web intake

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(25000);

    if (!e || !e.postData || !e.postData.contents) {
      return json_({ ok: false, error: 'empty-body' });
    }
    var data = JSON.parse(e.postData.contents);

    if (data.token !== SHARED_TOKEN) return json_({ ok: false, error: 'bad-token' });
    if (!data.name || !data.phone) return json_({ ok: false, error: 'missing-name-or-phone' });

    data.channel = data.channel || 'Website';
    var sheet = getSheet_();
    var result = writeEnquiry_(sheet, headerIndex_(sheet), data);
    return json_({ ok: true, result: result, enquiryId: data.enquiryId || '' });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, service: 'tescare-enquiries' });
}

// ----------------------------------------------------------- mail intake

/** "Name: Priya" -> "Priya", searching the plain-text mail body. */
function fieldFromBody_(body, label) {
  var re = new RegExp('^[*\\s]*' + label + '\\s*[:\\-]\\s*(.+)$', 'im');
  var m = body.match(re);
  return m ? m[1].trim() : '';
}

function firstPhoneIn_(text) {
  // People write numbers as "98406 12345", "+91 98406-12345" or
  // "9840612345", so the separator has to be optional mid-number too.
  var m = String(text).match(/(?:\+?91[\s-]*)?[6-9]\d{4}[\s-]?\d{5}(?!\d)/);
  return m ? m[0].replace(/[\s-]/g, '').replace(/^\+?91/, '') : '';
}

function firstEmailIn_(text) {
  var m = String(text).match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/);
  return m ? m[0] : '';
}

/**
 * Sweeps the enquiry notification mails into the sheet.
 * Run on a 5-minute time trigger — see installTriggers().
 */
function pollEnquiryMail() {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(25000)) return;

  try {
    var sheet = getSheet_();
    var index = headerIndex_(sheet);
    var seen = existingIds_(sheet, index);
    var threads = GmailApp.search(MAIL_QUERY, 0, 50);
    var added = 0;

    for (var t = 0; t < threads.length; t++) {
      var messages = threads[t].getMessages();
      for (var m = 0; m < messages.length; m++) {
        var msg = messages[m];
        var body = msg.getPlainBody();

        // The website stamps this into every notification it sends.
        var id = fieldFromBody_(body, 'Enquiry ID');
        // A genuine person emailing in has no stamp: derive a stable id
        // from the Gmail message id so re-polling cannot double it up.
        if (!id) id = 'EML-' + msg.getId().slice(-10).toUpperCase();
        if (seen[id]) continue;

        var name = fieldFromBody_(body, 'Name') || msg.getFrom().replace(/<.*>/, '').replace(/"/g, '').trim();
        var phone = fieldFromBody_(body, 'Mobile') || firstPhoneIn_(body);
        var mail = fieldFromBody_(body, 'Email') || firstEmailIn_(body) || msg.getReplyTo() || '';
        // A phone OR an email is enough to follow the enquiry up; demanding
        // both would silently drop genuine emails that give only one.
        if (!name || (!phone && !mail)) continue;

        writeEnquiry_(sheet, index, {
          enquiryId: id,
          name: name,
          phone: phone,
          email: mail,
          service: fieldFromBody_(body, 'Service'),
          message: fieldFromBody_(body, 'Message'),
          pageUrl: fieldFromBody_(body, 'Submitted from'),
          receivedAt: Utilities.formatDate(msg.getDate(), TIMEZONE, 'dd MMM yyyy, hh:mm a'),
          city: fieldFromBody_(body, 'City'),
          propertyType: fieldFromBody_(body, 'Property'),
          preferredDate: fieldFromBody_(body, 'Preferred date'),
          timeSlot: fieldFromBody_(body, 'Time slot'),
          channel: 'Email',
        });
        seen[id] = true;
        added++;
      }
    }
    console.log('pollEnquiryMail: ' + added + ' new enquiry(s) filed');
  } catch (err) {
    console.error('pollEnquiryMail failed: ' + err);
  } finally {
    lock.releaseLock();
  }
}

// ---------------------------------------------------------------- set-up

/** Run once from the editor to start the 5-minute Gmail sweep. */
function installTriggers() {
  var existing = ScriptApp.getProjectTriggers();
  for (var i = 0; i < existing.length; i++) {
    if (existing[i].getHandlerFunction() === 'pollEnquiryMail') {
      ScriptApp.deleteTrigger(existing[i]);
    }
  }
  ScriptApp.newTrigger('pollEnquiryMail').timeBased().everyMinutes(5).create();

  var sheet = getSheet_();
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  console.log('Connected to: ' + SpreadsheetApp.openById(SPREADSHEET_ID).getName());
  console.log('Tab: ' + sheet.getName() + ' | rows so far: ' + Math.max(sheet.getLastRow() - 1, 0));
  console.log('Columns: ' + headers.filter(String).join(' | '));
  console.log('Trigger installed. Gmail will be swept every 5 minutes.');
}
