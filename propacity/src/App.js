
import './App.css';
import Header from './Header'
import Sidebar from './sidebar/Sidebar';
import Dashboard from './Dashboard'
import Films from './page/Films';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import People from './page/People';
import DashboardTable from './DashboardTable';
import PlanetPage from './page/PlanetPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path="/sidebar" element={<Sidebar/>} />
      
      <Route path="/dashboardt" element={<DashboardTable/>} />
      <Route path="/people" element={<People/>} />
      <Route path='/film' element={<Films/>}/>
      <Route path='/planetpage' element={<PlanetPage/>}/>
      <Route path='/' element={<Dashboard/>}/>
      {/* <Route path='/' element={<SideMenu/>}/> */}
      </Routes>
     </BrowserRouter>
    

    </div>
  );
}

export default App;