import { useContext } from "react";
import { NavLink } from "react-router-dom";
import SmartContext from "../../context/SmartContext";
function ProductRandom() {
    const { getRandomProduct, changeProductSelected } = useContext(SmartContext)
    let randomProduct = getRandomProduct()
    return (<section className="product-random">
        <div className="container-product-random">
            <div>
                <p>{randomProduct.brand}</p>
                <h3>{randomProduct.title}</h3>
                <span>${randomProduct.price}</span>
                <NavLink className="btn-shop" onClick={() => changeProductSelected(randomProduct)} to={`/products/${randomProduct.title}`}>Shop Now</NavLink>
            </div>
            <img src={randomProduct.images[0]} alt={randomProduct.title} />
        </div >

    </section >);
}

export default ProductRandom;