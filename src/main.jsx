import React from 'react'
import ReactDOM from 'react-dom/client'
import SmartShoppingApp from './components/SmartShopping'
import "./assets/css/styles.css"
import { SmartProvider } from './context/SmartContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <SmartProvider>
      <SmartShoppingApp />
    </SmartProvider>
  </>)
