import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imagenIcono from "../../assets/img/smart-shopping.png"
import { faBars, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import SmartContext from "../../context/SmartContext";
function NavBar() {
    const { resetFilterCategory, changeCategory, cart } = useContext(SmartContext)
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        menu === true ? setMenu(false) : setMenu(true)
    }
    const closeMenu = () => {
        setMenu(false)
    }
    const handleProducts = () => {
        resetFilterCategory()
        closeMenu()
    }
    const handleCategory = () => {
        changeCategory()
        closeMenu()
    }
    return (
        <nav className={menu === true ? "menu" : ""}>
            <section className="nav-top">
                <div className="nav-top-img">
                    <NavLink to="/"><img src={imagenIcono} alt="smart-shopping" /></NavLink>
                    <FontAwesomeIcon onClick={handleMenu} className="icon-menu" size="2x" icon={faBars} />
                </div>
                <div className="nav-top-content">
                    <div className="search-bar">
                        <input type="text" />
                        <FontAwesomeIcon className="search icon" icon={faMagnifyingGlass} />
                    </div>

                    <div className="cart-star">
                        <NavLink to="/favorite"><FontAwesomeIcon className="icon" size="2x" icon={faStar} /></NavLink>
                        <NavLink to="/cart">
                            <div className="container-icon-cart">
                                <span>{cart.length}</span>
                                <FontAwesomeIcon className="icon" size="2x" icon={faCartShopping} />
                            </div>
                        </NavLink>
                    </div>
                </div>

            </section>
            <section className="nav-bottom">
                <ul>
                    <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/products" onClick={handleProducts}>Products</NavLink>
                    <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
                    <NavLink to="/products" onClick={handleCategory}>Automotive</NavLink>
                    <NavLink to="/products" onClick={handleCategory} >Motorcycle</NavLink>
                    <NavLink to="/products" onClick={handleCategory} >Fragrances</NavLink>
                </ul>
            </section>

        </nav>
    );
}

export default NavBar;