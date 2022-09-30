import React from 'react';

//import reportWebVitals from './reportWebVitals';

import NavDash from "../../components/NavDashboard/NavDash.js";
import FormDash from "../../components/FormDash/FormDash.js";
import "./dashboard.css";

function Dashboard() {
    return (
        <div className='container'>
            <NavDash/>
            <FormDash 
                NombreSesion='Bienvenido, Shirow'/>

        </div>
    );
}

export default Dashboard;

//reportWebVitals();