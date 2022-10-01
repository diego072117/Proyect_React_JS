import React from 'react';
import ReactDOM from 'react-dom/client';
// import Nav from './components/nav/nav';
// import Banner from './components/banner/Banner';
// import Descripcion from './components/descripcion/Descripcion';
// import Feature from './components/feature/Feature';
// import Ubicacion from './components/ubicanos/ubicanos';
// import Cards from './components/cards/cards';
// import Footer from './components/footer/footer';
import './index.css';
 

import {BrowserRouter, Route , Routes} from 'react-router-dom'

import  Login  from "./pages/Login/Login.js";
import Init from "./pages/Index/Index";
import Register from "./pages/Register/Register.jsx";
import Error from "./pages/Error404/Error404.jsx";
import Dashboard from "./pages/Dashboard/Dashboard";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    

  <Routes>
    
    <Route path='/' element={<Init/>} />
    <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Error />} />
  </Routes>


  </BrowserRouter>

  
  
);