import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { flushSheetQueue } from './leadSubmit.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Retry any enquiry whose Google Sheet write failed on a previous visit.
// Deferred so it never competes with the first paint; the Apps Script
// de-duplicates on Enquiry ID, so a retry can never create a second row.
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => { flushSheetQueue(); }, 2500)
  })
}
