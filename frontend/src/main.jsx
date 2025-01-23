import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavsProvider from './context/FavsContext.jsx'


createRoot(document.getElementById('root')).render(
  <FavsProvider>
    <App />
  </FavsProvider>,
)
