import { useContext } from "react";
import SmartContext from "../../context/SmartContext";

function CartCard({ product }) {
    const { addToCart, removeFromCart } = useContext(SmartContext)
    const { images, title, price, quantity } = product
    return (<section className="cart-card">
        <img src={images[0]} alt="" />
        <div>
            <h1>{title}</h1>
        </div>
        <div className="container-quantity">
            <button className="add-product icon" onClick={() => removeFromCart(product)}>-</button>
            <span>Quantity: {quantity}</span>
            <button className="add-product icon" onClick={() => addToCart(product)}>+</button>
        </div>
        <div>$ {price * quantity}</div>
    </section>);
}

export default CartCard;