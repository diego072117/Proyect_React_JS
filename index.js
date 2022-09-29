import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {BrowserRouter, Route , Routes} from 'react-router-dom'

import  Login  from "./pages/Login/Login.js";
import  Init  from "./pages/Index/Index";
import Dashboard from "./pages/Dashboard/Dashboard.jsx"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    

  <Routes>
    
    <Route path='/' element={<Init/>} />
    <Route path='/login' element={<Login/>} />
    
    <Route path='/dashboard' element={<Dashboard/>} />
  </Routes>


  </BrowserRouter>

  
  
);