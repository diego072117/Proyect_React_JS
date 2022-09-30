
import "./Feature.css";
function Feature(){
    return(
        <section id="features">
        <h2 class="features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
        <div class="features-description">
            <div class="feature feature-blue">
                <i class="fa-solid fa-bell-concierge"></i>
                <p>Lorem ipsum dolor</p>
            </div>
            <div class="feature feature-black">
                <i class="fa-solid fa-bed"></i>
                <p>Lorem ipsum dolor</p>
            </div>
            <div class="feature feature-blue">
                <i class="fa-solid fa-wifi"></i>
                <p>Lorem ipsum dolor</p>
            </div>
            <div class="feature feature-black">
                <i class="fa-solid fa-dumbbell"></i>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>

        {/* <section id="feature">
            
            <h2>Razones por las que disfrutarás quedarte con nosotros</h2>
            <div className="feature-row">
                <CardFeature
                texto='Reservas'
                background={true}
                icono='fa-solid fa-bell-concierge'/>
                <CardFeature
                texto='Habitaciones'
                background={false}
                icono='fa-solid fa-bed'/>
                <CardFeature
                texto='Wi-Fi'
                background={true}
                icono='fa-solid fa-wifi'/>
                <CardFeature
                texto='Gimnasio'
                background={false}
                icono='fa-solid fa-dumbbell'/>
            </div>

        </section> */}
        
    </section>
        
    );
}

export default Feature;