/**
 * Tescare — lead capture endpoint.
 *
 * Paste this whole file into Extensions > Apps Script on the Tescare
 * "Leads" spreadsheet, then deploy it as a web app (see LEADS_SETUP.md).
 *
 * On every submission it appends a row to the sheet AND emails the
 * enquiry, so a lead is never sitting in only one place.
 */

var NOTIFY_EMAIL = 'tescareservice@gmail.com';
var SHEET_NAME = 'Leads';

// Column order for the sheet. Add a key here and it is picked up
// automatically — no other change needed.
var COLUMNS = [
  'submittedAt', 'form', 'name', 'phone', 'email', 'city',
  'service', 'propertyType', 'preferredDate', 'timeSlot',
  'message', 'pageUrl',
];

var HEADERS = [
  'Received', 'Form', 'Name', 'Phone', 'Email', 'City',
  'Service', 'Property', 'Preferred Date', 'Time Slot',
  'Message', 'Page',
];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#16A34A')
      .setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);

    if (!e || !e.postData || !e.postData.contents) {
      return json_({ ok: false, error: 'empty-body' });
    }

    var data = JSON.parse(e.postData.contents);

    // Minimum we need to be able to call the person back.
    if (!data.name || !data.phone) {
      return json_({ ok: false, error: 'missing-name-or-phone' });
    }

    var received = new Date();
    var row = COLUMNS.map(function (key) {
      if (key === 'submittedAt') return received;
      return data[key] == null ? '' : String(data[key]);
    });

    getSheet_().appendRow(row);

    // Email notification — subject carries the name and phone so the
    // lead is readable from a phone lock screen.
    var lines = [];
    for (var i = 0; i < COLUMNS.length; i++) {
      var k = COLUMNS[i];
      if (k === 'submittedAt') continue;
      if (data[k]) lines.push(HEADERS[i] + ': ' + data[k]);
    }
    lines.push('Received: ' + Utilities.formatDate(received, 'Asia/Kolkata', 'dd MMM yyyy, hh:mm a'));

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: data.email || NOTIFY_EMAIL,
      subject: 'New ' + (data.form || 'website') + ' enquiry — ' + data.name + ' (' + data.phone + ')',
      body: lines.join('\n'),
    });

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, service: 'tescare-leads' });
}
