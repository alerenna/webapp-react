import { GlobalProvider } from './contexts/GlobalContext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <GlobalProvider>
    <App />
  </GlobalProvider>

)
