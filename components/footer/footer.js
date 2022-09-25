
import "./footer.css";
function footer(){
    return(

        <footer>
        <article id="article">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas eum repellat ab, assumenda
                cum
                amet aspernatur earum quos laborum excepturi facilis, laudantium ducimus quam.</p>
            <hr/>
            <div class="iconos">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>

        </article>

        <article>
            <div class="footer-direccion">
                <i class="fa-solid fa-location-dot"></i>
                <label> Avenida Carrera 8, #12A-42, Bogota dc, Colombia</label>

            </div>
            <div class=".footer-direccion">
                <i class="fa-solid fa-phone"></i>
                <label> +57 601 4567899</label>
            </div>
            <hr/>
        </article>

        <article>
            <div class="politicas">
                <p>Politicas de privacidad</p>
                <p>Politicas de privacidad</p>
            </div>
            <hr/>
        </article>

        <div class="iconos2">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>
    </footer>

    );
}

export default footer;