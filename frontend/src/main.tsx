import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './Components/Header.tsx'
import Bottom from './Bottom.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div className="bottom">
      <p>alelisicyna2024</p>
    </div>
  </StrictMode>,
)
