import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const SidebarMenu= () => {
  return (
    <div style={{ display: "flex",color:"white", height: "100vh" }}>
      <Sidebar style={{backgroundColor:"navyblue"}} className="app">
        <Menu>
           
          <MenuItem className="menu1">
          <FolderIcon/>
          <Link to="/film" replace={true} style={{color:"white"}}> Films</Link> 
          <ArrowForwardIosIcon/>
          </MenuItem>
          <MenuItem><FolderIcon/>
          <Link to="/film" replace={true} style={{color:"white"}}> People</Link> 
          <ArrowForwardIosIcon/> </MenuItem>
         
            <MenuItem> <FolderIcon/>
          <Link to="/film" replace={true} style={{color:"white"}}> Planets</Link> 
          <ArrowForwardIosIcon/> </MenuItem>
            <MenuItem>
            <FolderIcon/>
          <Link to="/film" replace={true} style={{color:"white"}}> Species</Link> 
          <ArrowForwardIosIcon/>
            </MenuItem>
            <MenuItem><FolderIcon/>
          <Link to="/film" replace={true}style={{color:"white"}}> Starships</Link> 
          <ArrowForwardIosIcon/></MenuItem>
            <MenuItem> <FolderIcon/>
          <Link to="/film" replace={true}style={{color:"white"}}> Vehicles</Link> 
          <ArrowForwardIosIcon/> </MenuItem>
            
        </Menu>
      </Sidebar>
     
    </div>
  );
};
export default SidebarMenu