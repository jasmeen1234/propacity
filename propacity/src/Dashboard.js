import React from 'react'
import './dashboard.css'
import Sidebar from './Sidebar'
import dashLogo from './assets/dashLogo.png'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function Dashboard() {
  return (
    <div className='main-dashboard'>
    <div className='dashboard'>
      <div className='dashLogo'>
        <img src={dashLogo}/>
        </div>
        <div className='content'>Welcome to Star Wars <span>Dashboard</span></div>
        <div className='main-content'>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</div>
     

    </div>
    <div className='sidebar-page'><Sidebar/></div>
   
    </div>
  )
}

export default Dashboard
