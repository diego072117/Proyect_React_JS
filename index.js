import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/nav/nav';
import Banner from './components/banner/Banner';
import Descripcion from './components/descripcion/Descripcion';
import Feature from './components/feature/Feature';
import Ubicacion from './components/ubicanos/ubicanos';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Banner/>
    <Descripcion/>
    <Feature/>
    <Ubicacion/>
    <Cards/>
    <Footer/>
  </React.StrictMode>
);

