import { Link } from "react-router-dom";
import lala from "../cards/lala.jpeg";

import "./FormDash.css"; 



function dashForm() {



    return (

        <html className="calle-dash">
            <article class="main-formDash">

                <div class="img-perfil-formDash">
                    <h2 className="dash-h2">Bienvenido, Angie Vargas</h2>
                    <img className="dash-img" src={lala} alt="" />
                </div>

                <div class="download-formDash">
                    <i class="icon-escond fa-solid fa-file-arrow-down"></i>
                    <i class="fa-solid fa-download"></i>
                </div>
                    <Link class="Update-password" href="">Cambiar cotraseña</Link>

                <div class="formulario-formDash">
                    <div class="tipe-document">
                        <label className="dash-label" for="TipoDoc">Tipo de documento</label><br />
                        <input type="text" class="dash-input" placeholder="Cedula de Ciudadania" />
                    </div>

                    <div class="name">
                        <label className="dash-label" for="Nombre">Nombres</label><br />
                        <input type="text" class="dash-input" placeholder="Angie Camila" />
                    </div>

                    <div class="date">
                        <label className="dash-label" for="fecha">Fecha nacimiento</label><br />
                        <input type="date" class="dash-input" />
                    </div>

                    <div class="form-check">
                        <label className="dash-label">Género</label>
                        <div class="genero">
                            <form class="checks">
                                <label className="dash-label" class="radio-inline">
                                    <input type="radio" value="" name="genero" checked />Mujer
                                </label>
                                <label className="dash-label" class="radio-inline">
                                    <input type="radio" value="" name="genero" />Hombre
                                </label>
                                <label className="dash-label" class="radio-inline">
                                    <input type="radio" value="" name="genero" />Otro
                                </label>
                            </form>
                        </div>
                    </div>

                    <div class="email">
                        <label className="dash-label" for="email">Email</label><br />
                        <input type="email" class="dash-input" placeholder="angievargas2@gmail.com" />
                    </div>

                    <div class="num-doc">
                        <label className="dash-label" for="NoDoc">Numero de documento</label><br />
                        <input type="text" class="dash-input" placeholder="1025417456" />
                    </div>

                    <div class="apell">
                        <label className="dash-label" for="Apellido">Apellidos</label><br />
                        <input type="text" class="dash-input" placeholder="Vargas Pinzón" />
                    </div>

                    <div class="pais">
                        <label className="dash-label" for="Pais">País de origen</label><br />
                        <input type="text" class="dash-input" placeholder="Colombia" />
                    </div>

                    <div class="phone">
                        <label className="dash-label" for="telefono">Teléfono de contacto</label><br />
                        <input type="text" class="dash-input" placeholder="3135207460" />
                    </div>

                    <Link class="but-dash" href="">Acualizar</Link>

                    <br /><br />

                    <div class="password">
                        <label className="dash-label" for="">Contraseña</label><br />
                        <input type="password" />
                    </div>

                    <div class="confirmar">
                        <label className="dash-label" for="">Confirmar contraseña</label><br />
                        <input type="password" class="dash-input" />
                    </div>

                    <Link class="button2-dash" href="">Cambiar</Link>
                   
                   
                </div>

            </article>
        </html>
    );


}


export default dashForm;