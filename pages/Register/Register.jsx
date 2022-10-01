import React from 'react';

//import reportWebVitals from './reportWebVitals';

import  Formulario  from "../../components/FormularioReg/FormularioReg";
// import  Nav from "../../components/NavRegis/NavRegis";
import "./Register.css";

function Register() {
    return (
        <div className='cont'>
            {/* <Nav /> */}
            <Formulario TituloRegister='Registrate'/>
        </div>
    );
}

export default Register;

//reportWebVitals();