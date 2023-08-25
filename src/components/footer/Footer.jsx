import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imagen from "../../assets/img/smart-shopping.png";
import { faInstagram, faLinkedin, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return (<footer>
        <div className="top-footer">
            <section className="left-footer">
                <img src={imagen} alt="" />
                <p>Con un enfoque en la satisfacción del cliente, te ofrecemos una experiencia de compra sin complicaciones y entregas confiables. Únete a nosotros para explorar un sinfín de opciones y descubrir productos que se adapten a tu estilo y necesidades.</p>
            </section>
            <section className="right-footer">
                <FontAwesomeIcon className="icon" size="3x" icon={faInstagram} style={{ color: "#000000", }} />
                <FontAwesomeIcon className="icon" size="3x" icon={faSquareFacebook} style={{ color: "#000000", }} />
                <FontAwesomeIcon className="icon" size="3x" icon={faLinkedin} style={{ color: "#000000", }} />
            </section>
        </div>
        <section className="bottom-footer">
            <p>Copyright 2023 - Smart Shopping / All rights reserved</p>
        </section>
    </footer>);
}

export default Footer;