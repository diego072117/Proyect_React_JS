
import { Link, /*useNavigate*/ } from "react-router-dom";
import logo from "./Hotelia horizontal negro.svg";
import fondo from "./wave.svg";
import "./Header.css";
// import { useEffect, useState } from "react";
// import axios from "axios";




function Header() {

    // useEffect(() => {
    //   getData()
      
    // }, [])
    
    // const navigate = useNavigate()

    // const [data, setData] = useState({
    //     email: "",
    //     password: ""
    // });

    // const [apiData,setApiData] = useState([])

    // const url = "https://hoteliakuepa.herokuapp.com/users";

    

    // const getData = async () => {
    //     const response = axios.get(url);
    //     response.then((data)=> setApiData(data.data)).catch((error)=>console.log(error))
        
        
    // }

   



    // const { email, password } = data;

    // const updateEmail = (e) => {
    //     setData({
    //         // ...data,
    //         email: e.target.value,
    //         password: password
    //     });
    // };

    // const updatePassword = (e) => {
    //     setData({
    //         // ...data,
    //         email: email,
    //         password: e.target.value
    //     });
    // };

    // const validation = apiData.find((user) => user.email === email && user.password === password)

    // const validateData = (e) => {
    //     e.preventDefault();
    //     navigate("/dashboard")
    //     console.log(validation);

    // }

   
    // localStorage.setItem("actualUser", JSON.stringify({ email }));
   



    return (
        <body className="body">

            <div className="login">

                <div className="cont">
                    <img className="svg" src={fondo} alt="" />
                </div>

                <img className="img" src={logo} alt="" />
                <i class="fa-solid fa-circle-user"></i>

                <form class="formulario" /*onSubmit={validateData}*/>
                    <div>
                        <label className="login-label">Usuario</label>
                        <input
                            className="login-input"
                            type="text"
                            placeholder="correo@msg.com"
                            /*value={email}
                            onChange={updateEmail}*/
                        />
                    </div>
                    <div>
                        <label className="login-label">Contraseña</label>
                        <input
                            className="login-input"
                            type="password"
                            placeholder="*******"
                            /*value={password}
                            onChange={updatePassword}*/
                        />
                    </div>
                    <div className="button">
                        {/* <button type="submit">Ingresar</button> */}
                        <Link to='/dashboard'> Ingresar</Link> 
                    </div>

                    <label className="login-label" class="link">¿No tiene una cuenta?

                        <Link to='/register'> Registrate aqui</Link>
                    </label>

                </form>

            </div>
        </body>
    );
}

export default Header;