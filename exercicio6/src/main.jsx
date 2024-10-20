import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Link from './components/Link.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Link/>  
</StrictMode>,
)
