
// import React, { useState } from 'react'
//import { Link } from "react-router-dom";
import logoDash from "./hotelia campana.svg";
import lala from "../cards/lala.jpeg";

import "./NavDash.css";



function NavDash() {



    return (

        <nav className="dash-nav">
            <ul>
                <li>

                    <section class="img-fondo">
                        <section class="logo">
                            <img src={logoDash} alt="" />
                            <p class="nav-title">otelia</p>
                            <img class="img-person" src={lala} alt="" />
                            <section class="name-user">
                                <p>Angie Vargas</p>
                                <p class="gmail-user">angievargas2@gmail.com</p>
                            </section>
                        </section>

                    </section>


                </li>
                <li><a className="dash-a" href="#">
                    <i class="fas fa-solid fa-bed icon"></i>
                    <span class="nav-item">Habitaciones</span>
                </a>
                </li>
                <li><a className="dash-a" href="#">
                    <i class="fas fa-solid fa-bell-concierge icon"></i>
                    <span class="nav-item">Reservas</span>
                </a></li>
                <li><a className="dash-a" href="#">
                    <i class="fas fa-solid fa-bed icon"></i>
                    <span class="nav-item">Habitaciones</span>
                </a></li>
                <li><a className="dash-a" href="#">
                    <i class=" fas fa-solid fa-bell-concierge icon"></i>
                    <span class="nav-item">Habitaciones</span>
                </a></li>

                <li><a className="dash-a" href="index.html" class="logout">
                    <i class=" fas fa-solid fa-arrow-right-from-bracket icon"></i>
                    <span class="nav-item">Cerrar Sesion</span>
                </a></li>
            </ul>
        </nav>

    );


}


export default NavDash;
