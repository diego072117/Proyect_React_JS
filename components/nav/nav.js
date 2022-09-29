
// import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logov from "./Hotelia horizontal blanco.svg";    

import "./nav.css";



function nav(){



    return(
<nav>
        <div class="logo">
            <img src={logov} alt="logo"/>
            <i class="fa-solid fa-bars hamburguer"></i>
        </div>
 
        <div class="menu ocultar">
            <Link href="#" className="item">Inicio</Link>
            <Link href="#" className="item">Ubícanos</Link>
            <Link className="item">Opiniones</Link>
            <hr href="#" class="menu-hr" noshade=""/>

            <Link to='/login' className="item"><button class="navbar-button">
            <i class="fa-solid fa-user"></i> Iniciar Sesión</button> </Link> 
        </div>
    </nav>




    );

    
}


export default nav;
