//import { Link } from "react-router-dom";
import logo from "./Hotelia horizontal blanco.svg";
import axios from "axios";
import { useState } from "react";
//import { useHistory } from "react-router";

import "./FormularioReg.css";


function FormualrioRegis({ TituloRegister }) {

    // const history=useHistory();
    /*1.Inicializamos los inputs en el estado, para poder recibir los valores que se digiten 
    en él y controlarlos */
    const [data, setData] = useState({
        _id: "", tipodoc: "", nombre: "", apellido: "", fnacimiento: "",
        genero: "", email: "", telefono: "", paisorigen: "", password: "", tipouser: "Huesped", img: ""
    });
    /*2. Se usa la función handleChange para que cada vez que haya un cambio en el input
    guarde el name y el value del mismo */
    const handleChange = ({ target }) => {
        //Cada vez que haya un cambio se va a guardar el valor en el estado data
        setData({
            ...data,
            [target.name]: target.value
        })
    }


    /*4. Crear petición asíncrona*/
    const url = "https://hoteliakuepa.herokuapp.com/users";

    /*3. funci{on para procesar el envío del formulario*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(url, data);//await espera hasta que se ejcute la petición
        console.log(response);
        if (response.status === 201) {

            alert(
                'Guardado!'
                //    `El estudiante <strong> ${response.data.nombre} ${response.data.apellido}</strong> ha sido guardado exitosamente!`,
                //    'success'
            )
            //    history.push("/");

        } else {
            alert(
                'Guardado!',
                'Hubo un problema al registrar el estudiante!',
                'error'
            )
        }
    }

    return (
        <body class="regis">
            <nav class="slider">
                <img src={logo} alt="" />
                <h1>{TituloRegister}</h1>
            </nav>
            <div class="register">

                <div class="registrate">
                    <h1>Registrate</h1>
                </div>

                {/* <form action="" method="post">
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
                                    <div className="gen"><input type="radio" /><label>Mujer</label></div>
                                    <div className="gen"><input type="radio" /><label>Hombre</label></div>
                                    <div className="gen"><input type="radio" /><label>Otro</label></div>
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
                </form> */}

                <form onSubmit={handleSubmit} action="" method="post">
                    <div class="formulario">
                        <div class="columna">
                            <div>
                                <label for="tipo">Tipo de documento</label>
                                <select name="tipodoc" value={data.tipodoc}
                                    onChange={handleChange}>
                                    <option selected>Seleccione una opcion</option>
                                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                    <option value="Cedula de ciudadania" >Cedula de ciudadania</option>
                                </select>
                            </div>
                            <div>
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre" id="nombre" value={data.nombre}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <label for="fecha">Fecha de nacimiento</label>
                                <input type="date" name="fnacimiento" value={data.fnacimiento}
                                    onChange={handleChange} />
                            </div>

                            <div>
                                <label for="email">Email</label>
                                <input type="email" placeholder="e-mail" name="email" value={data.email}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <label for="pais">Pais de origen</label>
                                <input type="text" name="paisorigen" value={data.paisorigen}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <label>Contraseña</label>
                                <input type="password" name="password" value={data.password}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div class="columna">
                            <div>
                                <label for="doc">Numero de documento</label>
                                <input type="number" name="_id" value={data._id}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <label for="apellido">Apellido</label>
                                <input type="text" name="apellido" value={data.apellido}
                                    onChange={handleChange} />
                            </div>
                            {/* <div>
                                <label>Genero</label>
                                <div class="genero">
                                    <div className="gen">
                                        <input type="radio" name="genero" value={data.genero }
                                        onChange={handleChange} /> 
                                        <label>Mujer</label>
                                    </div>
                                    <div className="gen"><input type="radio" /><label>Hombre</label></div>
                                    <div className="gen"><input type="radio" /><label>Otro</label></div>
                                </div>
                            </div> */}

                            <div>
                                <label for="genero">Genero</label>
                                <select name="genero" value={data.genero}
                                    onChange={handleChange}>
                                    <option selected>Seleccione su genero</option>
                                    <option value="Mujer">Mujer</option>
                                    <option value="Hombre" >Hombre</option>
                                    <option value="Otro" >Otro</option>

                                </select>
                            </div>

                            <div>
                                <label for="telefono">Telefono</label>
                                <input type="number" name="telefono" value={data.telefono}
                                    onChange={handleChange} />
                            </div>
                            <div class="foto">
                                <label>Foto</label>
                                <input type="file" id="archivo" name="img" value={data.img}
                                    onChange={handleChange} />
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
                        <input type='submit'></input>
                        {/* <Link to='/login'> Ingresar</Link> */}
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