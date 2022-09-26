

import logo from "./Hotelia horizontal negro.svg";
// import fondo from "./fondo.svg";
import "./Header.css";



function Header() {
    return (
        <body className="body">

            <div className="login">

                {/* <div>
                    <img class="svg" src={fondo} alt=""/>
                </div> */}


                <img src={logo} alt=""/>
                    <i class="fa-solid fa-circle-user"></i>
            </div>
        </body>
    );
}

export default Header;