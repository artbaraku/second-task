import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactTabs from './components/ReactTabs'
import TogglePopUp from './components/TogglePop'
import TogglePopMore from './components/TogglePopMore'
import './styles/ReactTabs.css'
import './styles/TogglePop.css'
import './styles/TogglePopMore.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ReactTabs/>
     <TogglePopUp/>
     <TogglePopMore/>
  </React.StrictMode>,
)
