import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as starBlack } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import SmartContext from "../../context/SmartContext";
import { useFavorite } from "../../hooks/useFavorite";

function ProductCard({ product }) {
    const { changeProductSelected, addToCart, showModal, addFavorite, removeFavorite } = useContext(SmartContext)
    const productFinal = {
        category: product.category,
        title: product.title,
        price: product.price,
        images: product.images,
        description: product.description,
        id: product.id,
        brand: product.brand,
        price: product.price,
        quantity: 1
    }
    const { category, title, price, images } = product
    const handleAddProduct = (product) => {
        addToCart(product)
        showModal()
    }
    const { star, changeStarState } = useFavorite(productFinal)
    const handleStarProductAdd = (product) => {
        changeStarState(product)
        addFavorite(product)
    }
    const handleStarProductRemove = (product) => {
        changeStarState(product)
        removeFavorite(product)
    }
    return (<section className="product-card">
        <img src={images[0]} alt="" />

        <div>
            <hr />
            <span>{category}</span>
            <h2>{title}</h2>
            <strong>${price}</strong>
        </div>
        <NavLink to={`/products/${title}`} onClick={() => { changeProductSelected(product) }} />
        {star.star === false ? <FontAwesomeIcon className="icon-fav icon" size="2x" icon={faStar} onClick={() => handleStarProductAdd(productFinal)} /> : <FontAwesomeIcon className="icon-fav icon" size="2x" icon={starBlack} onClick={() => handleStarProductRemove(productFinal)} />}

        <FontAwesomeIcon className="icon-cart icon" size="2x" icon={faCartPlus} onClick={() => handleAddProduct(productFinal)} />

    </section>);
}

export default ProductCard;