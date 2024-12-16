import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvier from './Context/AuthProvier.jsx'

createRoot(document.getElementById('root')).render(
 

  <AuthProvier>
    <App/>  
  </AuthProvier>   

)
