import React from 'react';

//import reportWebVitals from './reportWebVitals';
import Formulario from "../../components/Formulario/Formualrio";
import Header from "../../components/Header/Header";
import "./login.css";

function Login() {
    return (
        <div className='cont'>
            <Header/>
            <Formulario/>
        </div>
    );
}

export default Login;

//reportWebVitals();