import { Link } from "react-router-dom";
import lala from "../cards/lala.jpeg";

import "./FormDash.css";



function dashForm() {



    return (

        <body className="fondo-dashboard">

            <section class="formulario-dashboard">

                <div class="form-dashboard">


                    <h2 class="titulo-dashboard">Bienvenido, Angie Vargas</h2>


                    <div class="column-1-dashboard">
                        <div class="profile">
                            <img className="lala-dashboard" src={lala} alt="" />
                        </div>

                        <div class="download-dashboard">
                            <i id="icon-1-dashboard" class="icon-escond fa-solid fa-file-arrow-down"></i>
                            <i class="fa-solid fa-download"></i>
                        </div>


                    </div>

                    <div class="column-2-dashboard">
                        <div class="form-group">
                            <label className="label-dashboard" for="TipoDoc">Tipo de documento</label>
                            <input type="text" class="form-control imput-dashboard" placeholder="Cedula de Ciudadania" />
                        </div>

                        <div class="form-group">
                            <label className="label-dashboard" for="Nombre">Nombres</label>
                            <input type="text" class="form-control imput-dashboard" placeholder="Angie Camila" />
                        </div>

                        <div class="form-group">
                            <label className="label-dashboard" for="fecha">Fecha nacimiento</label>
                            <input type="date" class="form-control imput-dashboard" placeholder="10/08/1976" />
                        </div>

                        <div class="form-check-dashboard">
                            <h4>Género</h4>
                            <div class="genero">
                                <form class="checks-dashboard">
                                    <label className="label-dashboard" class="radio-inline-dashboard">
                                        <input type="radio" value="" name="genero" checked />Mujer
                                    </label>
                                    <label className="label-dashboard" class="radio-inline-dashboard">
                                        <input type="radio" value="" name="genero" />Hombre
                                    </label>
                                    <label className="label-dashboard" class="radio-inline-dashboard">
                                        <input type="radio" value="" name="genero" />Otro
                                    </label>
                                </form>
                            </div>
                        </div>

                        <div class="form-group">
                            <label className="label-dashboard" for="email">Email</label>
                            <input type="email" class="form-control imput-dashboard" placeholder="angievargas2@gmail.com" />
                        </div>

                    </div>

                    <div class="column-3-dashboard">
                        <div class="form-group">
                            <label className="label-dashboard" for="NoDoc">Numero de documento</label>
                            <input type="text" class="form-control imput-dashboard" placeholder="1025417456" />
                        </div>

                        <div class="form-group">
                            <label className="label-dashboard" for="Apellido">Apellidos</label>
                            <input type="text" class="form-control imput-dashboard" placeholder="Vargas Pinzón" />
                        </div>

                        <div class="form-group">
                            <label className="label-dashboard" for="Pais">País de origen</label>
                            <input type="text" class="form-control imput-dashboard" placeholder="Colombia" />
                        </div>

                        <div class="form-group">
                            <label className="label-dashboard" for="telefono">Teléfono de contacto</label>
                            <input type="text" class="form-control imput-dashboard" placeholder="3135207460" />
                        </div>
                    </div>

                    <div class="footer-dashboard">
                        <button class="button-dashboard">Actualizar</button>

                        <br /><br />

                        <div class="contraseñas-dashboard">
                            <div class="contraseña-dashboard">
                                <label className="label-dashboard" for="">Contraseña</label>
                                <input type="password" class="form-control imput-dashboard" />
                            </div>

                            <div class="confirmar-dashboard">
                                <label className="label-dashboard" for="">Confirmar contraseña</label>
                                <input type="password" class="form-control imput-dashboard" />
                            </div>
                        </div>
                        <button class="button-dashboard">Cambiar</button>

                    </div>
                </div>


            </section>

        </body>

    );


}


export default dashForm;