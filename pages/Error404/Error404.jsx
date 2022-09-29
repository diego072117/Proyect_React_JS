import { Link } from "react-router-dom";
import "./Error404.css";



function Error() {
    return (
        <html className="error">
            <div id="clouds">
                <div class="cloud x1"></div>
                <div class="cloud x1_5"></div>
                <div class="cloud x2"></div>
                <div class="cloud x3"></div>
                <div class="cloud x4"></div>
                <div class="cloud x5"></div>
            </div>
            <div class='c'>
                <div class='_404'>404</div>
                <hr className="hr-error"/>
                    <div class='_1'>THE PAGE</div>
                    <div class='_2'>WAS NOT FOUND</div>
                <Link to='/' class='btn-error'>BACK </Link>
            </div>
        </html>
    );
}

export default Error;