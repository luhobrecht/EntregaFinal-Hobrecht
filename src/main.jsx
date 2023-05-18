import React from 'react'
import ReactDOM from 'react-dom/client'
import GeeksApp from './GeeksApp'
import './index.css'
import { db } from './firebase/config'

db()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeeksApp />
  </React.StrictMode>
);
