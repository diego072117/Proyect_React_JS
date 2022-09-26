
 import { Navigate } from "react-router-dom";
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
            <a href="#" className="item">Inicio</a>
            <a href="#" className="item">Ubícanos</a>
            <a className="item">Opiniones</a>
            <hr href="#" class="menu-hr" noshade=""/>

            <Navigate to='/Login' className="item"><button class="navbar-button">
            <i class="fa-solid fa-user"></i> Iniciar Sesión</button></Navigate> 
        </div>
    </nav>
    );
}

export default nav;