
import { Link } from "react-router-dom";
import logo from "./Hotelia horizontal negro.svg";
import fondo from "./wave.svg";
import "./Header.css";



function Header() {
    return (
        <body className="body">

            <div className="login">

                <div className="cont">
                    <img className="svg"  src={fondo} alt="" />
                </div>
        
                <img className="img" src={logo} alt="" />
                <i class="fa-solid fa-circle-user"></i>

                <form class="formulario">
                    <div>
                        <label>Usuario</label>
                        <input type="text" placeholder="correo@msg.com" />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" placeholder="***" />
                    </div>
                    <div class="button">
                        <Link to='/dashboard'> Ingresar</Link> 

                    </div> 

                    <label class="link">¿No tiene una cuenta?
                        
                        <Link to='/register'> Registrate aqui</Link> 
                    </label>

                </form>
                
            </div>
        </body>
    );
}

export default Header;