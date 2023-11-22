import React from 'react'
import './sidebar.css'
import Films from './page/Films'
import { Link } from 'react-router-dom';
import FolderSimple from './assets/FolderSimple.png'

function Sidebar() {
 
  return (

    <aside id='sidebar'>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
        <img src={FolderSimple}/>
        <Link to="/film"> <Films /></Link>
       
        </li>
             
     
       
     
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="30" viewBox="0 0 18 18" fill="none">
 <path d="M12.773 9.39798L7.14798 15.023C7.09571 15.0752 7.03367 15.1167 6.96539 15.145C6.8971 15.1733 6.82392 15.1878 6.75001 15.1878C6.6761 15.1878 6.60291 15.1733 6.53463 15.145C6.46634 15.1167 6.4043 15.0752 6.35204 15.023C6.29978 14.9707 6.25832 14.9087 6.23004 14.8404C6.20175 14.7721 6.18719 14.6989 6.18719 14.625C6.18719 14.5511 6.20175 14.4779 6.23004 14.4096C6.25832 14.3413 6.29978 14.2793 6.35204 14.227L11.5798 9.00001L6.35204 3.77298C6.24649 3.66743 6.18719 3.52427 6.18719 3.37501C6.18719 3.22574 6.24649 3.08259 6.35204 2.97704C6.45759 2.87149 6.60074 2.81219 6.75001 2.81219C6.89927 2.81219 7.04243 2.87149 7.14798 2.97704L12.773 8.60204C12.8253 8.65428 12.8668 8.71632 12.8951 8.7846C12.9234 8.85289 12.9379 8.92609 12.9379 9.00001C12.9379 9.07393 12.9234 9.14713 12.8951 9.21541C12.8668 9.2837 12.8253 9.34574 12.773 9.39798Z" fill="white"/>
</svg>
      
      
      
      
    
       </ul>


    </aside>




  )
}

export default Sidebar