import React from 'react'
import './dashboard.css'
// import Sidebar from './sidebar/Sidebar'
import dashLogo from './assets/dashLogo.png'
import ImageMediaCard from './ImageMediaCard'
import Header from './Header'
import SidebarMenu from './sidebar/SidebarMenu'
function Dashboard() {
  
  return (
    <div className='main-dashboard'>
      <div  className='header'><Header/></div>
    <div className='dashboard'>
     
        <ImageMediaCard/>

    </div>
    <div className='sidebar-page'><SidebarMenu/></div>
   
    </div>
  )
}

export default Dashboard
