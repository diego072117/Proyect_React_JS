import React from 'react';
import Nav from '../../components/nav/nav.js';
import Banner from '../../components/banner/Banner.js';
import Descripcion from '../../components/descripcion/Descripcion.js';
import Feature from '../../components/feature/Feature.js';
import Ubicacion from '../../components/ubicanos/ubicanos.js';
import Cards from '../../components/cards/cards.js';
import Footer from '../../components/footer/footer.js';
import '../../index.css';

function Init() {
    return (
        <div className="container">

            <Nav />
            <Banner />
            <Descripcion />
            <Feature />
            <Ubicacion />
            <Cards />
            <Footer />

        </div>
    );
}

export default Init;