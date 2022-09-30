import { Link } from "react-router-dom";
import logo from "./Hotelia horizontal blanco.svg";

import "./FormularioReg.css";



function FormualrioRegis() {
    return (
        <body class="regis">
            <nav class="slider">
                <img src={logo} alt="" />
                <h1>Eres más que bienvenido</h1>
            </nav>
            <div class="register">

                <div class="registrate">
                    <h1>Registrate</h1>
                </div>

                <form action="" method="post">
                    <div class="formulario">
                        <div class="columna">
                            <div>
                                <label for="tipo">Tipo de documento</label>
                                <select name="select">
                                    <option selected>Seleccione una opcion</option>
                                    <option>Tarjeta de identidad</option>
                                    <option>Cedula de ciudadania</option>
                                </select>
                            </div>
                            <div>
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre" id="nombre" />
                            </div>
                            <div>
                                <label for="fecha">Fecha de nacimiento</label>
                                <input type="date" name="fecha" />
                            </div>

                            <div>
                                <label for="email">Email</label>
                                <input type="email" placeholder="e-mail" />
                            </div>
                            <div>
                                <label for="pais">Pais de origen</label>
                                <input type="text" name="pais" id="pais" />
                            </div>
                            <div>
                                <label>Contraseña</label>
                                <input type="password" />
                            </div>
                        </div>
                        <div class="columna">
                            <div>
                                <label for="doc">Numero de documento</label>
                                <input type="number" name="doc" id="doc" />
                            </div>
                            <div>
                                <label for="apellido">Apellido</label>
                                <input type="text" name="apellido" id="apellido" />
                            </div>
                            <div>
                                <label>Genero</label>
                                <div class="genero">
                                    <input type="radio" /><label>Mujer</label>
                                    <input type="radio" /><label>Hombre</label>
                                    <input type="radio" /><label>Otro</label>
                                </div>
                            </div>
                            <div>
                                <label for="telefono">Telefono</label>
                                <input type="number" name="telefono" id="telefono" />
                            </div>
                            <div class="foto">
                                <label>Foto</label>
                                <input type="file" id="archivo" />
                                <label for="archivo" id="archivo">Selecionar Archivo</label>
                            </div>
                            <div>
                                <label>Confirmar contraseña</label>
                                <input type="password" />
                            </div>
                        </div>
                    </div>

                    <input type="checkbox" id="btn-modal" />
                    <label for="btn-modal" class="lbl-modal">Terminos y condiciones</label>

                    <div class="boton">
                        <Link to='/login'> Ingresar</Link>
                    </div>


                    <div class="modal">
                        <div class="contenedor">
                            <header>Terminos y Condiciones</header>
                            <label for="btn-modal">X</label>
                            <div class="contenido">

                                <p>
                                    Estos Términos del Servicio reflejan la forma de trabajar de Google como empresa, las leyes por las que nos regimos y
                                    determinados aspectos que siempre hemos creido que son ciertos. Por ello, estos Términos del Servicio ayudan a definir
                                    la relación que tiene Google contigo cuando interactúas con nuestros servicios, Por ejemplo, estos términos incluyen las
                                    siguientes secciones:
                                </p>
                                <p>
                                    Qué puedes esperar de nosotros, donde se describe como proporcionamos y desarrollamos nuestros servicios. Lo que
                                    esperamos de ti, donde se establecen ciertas reglas para utilizar nuestros servicios.
                                </p>

                                <button>Aceptar</button>
                            </div>


                        </div>
                    </div>
                </form>


            </div>
        </body>
    );
}

export default FormualrioRegis;