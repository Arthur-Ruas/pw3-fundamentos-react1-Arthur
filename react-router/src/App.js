import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Empresa from './pages/Empresa/Empresa';
import Contato from './pages/Contato/Contato';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        
        <Routes>
          
          <Route path='/' element={<Navbar/>}>

            <Route index element={<Home/>}/>
            <Route path='empresa' element={<Empresa/>}/>
            <Route path='contato' element={<Contato/>}/>

          </Route>

        </Routes>  

      </BrowserRouter>

      {/* <Home/>
      <Empresa/>
      <Contato/> */}
    </div>
  );
}

export default App;
