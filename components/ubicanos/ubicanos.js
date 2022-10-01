import React from "react";
import "./ubicanos.css";
function ubicanos(){

    
    return(
        <section class="ubicacion">
        <h2>Ubícanos</h2>
        <div class="mapa">
         <iframe class="mapa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2603.668779715141!2d-74.07073232748797!3d4.605737218435465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1658870245530!5m2!1ses!2sco"
            ></iframe>
        </div>
        <div class="direccion">
            <p>AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA</p>
            <hr/>
            <p>+57 601 4567899</p>
        </div>
    </section>
    );
}

export default ubicanos;