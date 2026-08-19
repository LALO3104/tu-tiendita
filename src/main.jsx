import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@/styles/base/globals.css'
import '@/styles/base/reset.css'
import '@/styles/base/typography.css'
import '@/styles/themes/variables.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)