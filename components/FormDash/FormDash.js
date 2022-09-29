import { Link } from "react-router-dom";
import lala from "../cards/lala.jpeg";

import "./FormDash.css";



function dashForm() {



    return (

        <html className="calle-dash">
            <article class="main-formDash">

                <div class="img-perfil-formDash">
                    <h2>Bienvenido, Angie Vargas</h2>
                    <img src={lala} alt="" />
                </div>

                <div class="download-formDash">
                    <i class="icon-escond fa-solid fa-file-arrow-down"></i>
                    <i class="fa-solid fa-download"></i>
                </div>
                    <Link class="Update-password" href="">Cambiar cotraseña</Link>

                <div class="formulario-formDash">
                    <div class="tipe-document">
                        <label for="TipoDoc">Tipo de documento</label><br />
                        <input type="text" class="form-control" placeholder="Cedula de Ciudadania" />
                    </div>

                    <div class="name">
                        <label for="Nombre">Nombres</label><br />
                        <input type="text" class="form-control" placeholder="Angie Camila" />
                    </div>

                    <div class="date">
                        <label for="fecha">Fecha nacimiento</label><br />
                        <input type="date" class="form-control" />
                    </div>

                    <div class="form-check">
                        <label>Género</label>
                        <div class="genero">
                            <form class="checks">
                                <label class="radio-inline">
                                    <input type="radio" value="" name="genero" checked />Mujer
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="" name="genero" />Hombre
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="" name="genero" />Otro
                                </label>
                            </form>
                        </div>
                    </div>

                    <div class="email">
                        <label for="email">Email</label><br />
                        <input type="email" class="form-control" placeholder="angievargas2@gmail.com" />
                    </div>

                    <div class="num-doc">
                        <label for="NoDoc">Numero de documento</label><br />
                        <input type="text" class="form-control" placeholder="1025417456" />
                    </div>

                    <div class="apell">
                        <label for="Apellido">Apellidos</label><br />
                        <input type="text" class="form-control" placeholder="Vargas Pinzón" />
                    </div>

                    <div class="pais">
                        <label for="Pais">País de origen</label><br />
                        <input type="text" class="form-control" placeholder="Colombia" />
                    </div>

                    <div class="phone">
                        <label for="telefono">Teléfono de contacto</label><br />
                        <input type="text" class="form-control" placeholder="3135207460" />
                    </div>

                    <Link class="but-dash" href="">Acualizar</Link>

                    <br /><br />

                    <div class="password">
                        <label for="">Contraseña</label><br />
                        <input type="password" />
                    </div>

                    <div class="confirmar">
                        <label for="">Confirmar contraseña</label><br />
                        <input type="password" class="form-control" />
                    </div>

                    <Link class="button2-dash" href="">Cambiar</Link>
                   
                   
                </div>

            </article>
        </html>
    );


}


export default dashForm;