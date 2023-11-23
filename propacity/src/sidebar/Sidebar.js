import React from 'react'
import './sidebar.css'
import Films from '../page/Films'
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderIcon from '@mui/icons-material/Folder';
import FolderSimple from '../assets/FolderSimple.png'

function Sidebar() {

  return (

    <aside className='sidebar'>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
        <img src={FolderSimple}/>
       <Link to="/film" replace={true}> Films</Link> 
       <span><ChevronRightIcon/></span>
        </li>
       </ul>

<ul className='sidebar-list'>
  <li className='sidebar-list-item'>
    <span><FolderIcon/></span>
    <Link to="/people" replace={true}> People</Link>
    <span><ChevronRightIcon/></span>
  </li>
</ul>
<ul className='sidebar-list'>
  <li className='sidebar-list-item'>
    <span><FolderIcon/></span>
    <Link to="/planetpage" replace={true}> planet</Link>
    <span><ChevronRightIcon/></span>
  </li>
</ul>
    </aside>




  )
}

export default Sidebar
