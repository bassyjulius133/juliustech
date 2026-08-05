import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EnrollmentProvider from './context/EnrollmentContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EnrollmentProvider>
      <App />
    </EnrollmentProvider>
  </StrictMode>
)
