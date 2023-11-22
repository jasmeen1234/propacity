
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import Dashboard from './Dashboard'
import Films from './page/Films';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path="/sidebar" element={<Sidebar/>} />
      
      <Route path='/film' element={<Films/>}/>
      <Route path='/' element={<Dashboard/>}/>
      </Routes>
     </BrowserRouter>
    

    </div>
  );
}

export default App;
