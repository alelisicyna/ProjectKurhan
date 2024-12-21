import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className="bottom">
      <p>alelisicyna2024</p>
    </div>
  </StrictMode>,
)
