import { useState } from "react";
import { Link } from "react-router-dom";
import logov from "./Hotelia horizontal blanco.svg";
import "./nav.css";



function Nav() {


        const [openMenu, setOpenMenu] = useState(false)
    
        function openClose(){
    
        if(openMenu === false){
    
            setOpenMenu(true)
    
        }else if(openMenu === true){
    
            setOpenMenu(false)
    
        }
    
    }

    return (
        <nav className="index-nav">
            <div class="logo">

                <img src={logov} alt="logo" />
                <i className="fa-solid fa-bars hamburguer" onClick={()=>{openClose()}}></i>
            </div>

            <div className={openMenu ? 'menu open' : openMenu === false ? 'menu ocultar' : 'menu'}>
                <Link href="#" className="item">Inicio</Link>
                <Link href="#" className="item">Ubícanos</Link>
                <Link className="item">Opiniones</Link>
                <hr href="#" class="menu-hr" noshade="" />

                <Link to='/login' className="item"><button class="navbar-button">
                    <i class="fa-solid fa-user"></i> Iniciar Sesión</button> </Link>
            </div>
        </nav>




    );


}


export default Nav;
