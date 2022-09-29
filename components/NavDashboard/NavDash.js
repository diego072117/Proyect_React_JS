
// import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logoDash from "./hotelia campana.svg";
import lala from "../cards/lala.jpeg";

import "./NavDash.css";



function NavDash() {



    return (    

        <nav className="navDash">
            <ul>
                <li>

                    <section class="fondo-dash">
                        <section class="hotel-logo-dash">
                            <img src={logoDash} alt="logo" />
                            <p class="nav-title-dash">otelia</p>
                            <img class="img-person-dash" src={lala} alt="" />
                            <section class="name-user-dash">
                                <p>Angie Vargas</p>
                                <p class="gmail-user-dash">angievargas2@gmail.com</p>
                            </section>
                        </section>

                    </section> 


                </li>
                <li><Link className="links-dash">
                    <i class="fas-dash fa-solid fa-bed icon-dash"/>
                    <span class="nav-item-dash">Habitaciones</span>
                </Link>
                </li>
                <li><Link className="links-dash">
                    <i class=" fas-dash fa-solid fa-bell-concierge icon-dash"/>
                    <span class="nav-item-dash">Habitaciones</span>
                </Link></li>
                <li><Link className="links-dash">
                    <i class="fas-dash fa-solid fa-bed icon-dash"/>
                    <span class="nav-item-dash">Habitaciones</span>
                </Link></li>
                <li><Link className="links-dash">
                    <i class=" fas-dash fa-solid fa-bell-concierge icon-dash"/>
                    <span class="nav-item-dash">Habitaciones</span>
                </Link></li>

                <li><Link href="#" class="logout-dash links-dash">
                    <i class=" fas-dash fa-solid fa-arrow-right-from-bracket icon-dash"/>
                    <span class="nav-item-dash">Cerrar Sesion</span>
                </Link></li>
            </ul>
            
     

        </nav>

    );


}


export default NavDash;
