import React from 'react';

//import reportWebVitals from './reportWebVitals';

import NavDash from "../../components/NavDashboard/NavDash.js";
import FormDash from "../../components/FormDash/FormDash.js";
import "./dashboard.css";

function Dashboard() {
    return (
        <div className='container'>
            <NavDash
                Nombre='Shirow'
                CorreoSesion='Shirow@gmail.com'/>
            <FormDash 
                NombreSesion='Bienvenido, Shirow'
                CambioContraseña='Cambiar Contraseña'/>

        </div>
    );
}

export default Dashboard;

//reportWebVitals();