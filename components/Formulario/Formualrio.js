import "./Formulario.css";
function Formulario() {
    return (
        <body class="body">

            <div class="login">
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
                        <a href="dashboard.html">Ingresar</a>

                    </div>

                    <label class="link">¿No tiene una cuenta?<a href="register.html">Registrate aqui</a></label>

                </form>

            </div>

        </body>

    );
}

export default Formulario;