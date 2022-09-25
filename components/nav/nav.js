import logov from "./Hotelia horizontal blanco.svg";
import "./nav.css";
function nav(){
    return(
<nav>
        <div class="logo">
            <img src={logov}/>
            <i class="fa-solid fa-bars hamburguer"></i>
        </div>
 
        <div class="menu ocultar">
            <a href="index.html" class="item">Inicio</a>
            <a href="ubicanos.html" class="item">Ubícanos</a>
            <a href="opiniones.html" class="item">Opiniones</a>
            <hr class="menu-hr" noshade=""/>
            <a href="Login.html" class="item"><button class="navbar-button"><i class="fa-solid fa-user"></i> Iniciar
                    Sesión</button></a>
        </div>
    </nav>
    );
}

export default nav;