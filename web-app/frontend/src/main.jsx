import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import Navbar from './components/Navbar.jsx'
import Star from './components/Star'
import {BrowserRouter} from "react-router-dom"
import Router from './Router.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Star/>
    <Navbar />

    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
