import React from 'react';

//import reportWebVitals from './reportWebVitals';

import NavUsers from '../../components/NavUsers/NavUsers';
import TableUsers from '../../components/TableUsers/TableUsers';
// import FormDash from "../../components/FormDash/FormDash.js";
import "./Users.css";

function Users() {
    return (
        <div className='container'>
            <NavUsers
                Nombre='Shirow'
                CorreoSesion='Shirow@gmail.com'/>
            <TableUsers/>

        </div>
    );
}

export default Users;

//reportWebVitals();