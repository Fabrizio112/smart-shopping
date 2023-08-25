import { useContext } from "react";
import SmartContext from "../../context/SmartContext";
import CartCard from "./CartCard";

function CartSection() {
    const { cart, aditionalInfo, cleanCart } = useContext(SmartContext)
    return (<section className="cart">
        <div className="cart-products">
            <h1>Products</h1>
            <div className="cart-container-products">
                {cart && cart.map(product => <CartCard product={product} />)}
                {(cart && cart.length) > 0 && <button className="clean-cart" onClick={cleanCart}>Clean Cart</button>}
            </div>
        </div>
        <div className="cart-resume">
            <h1>Buy Resume</h1>
            <div className="cart-container-resume">
                <div>
                    <h3>Products ({aditionalInfo && aditionalInfo.quantityFinal})</h3>
                    <span>${aditionalInfo && aditionalInfo.finalPrice}</span>
                </div>
                <button className="finish-buy">Finish Buy</button>
            </div>
        </div>
    </section>);
}

export default CartSection;