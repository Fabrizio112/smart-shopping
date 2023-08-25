import play from "../../assets/img/playstation.png"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <section className="header-text">
                <h1>The Best Technology Products in 2023 </h1>
                <NavLink className="btn-shop" to="/products">Shop Now</NavLink>
            </section>
            <section className="header-img">

            </section>
        </header>);
}

export default Header;