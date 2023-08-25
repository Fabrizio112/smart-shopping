import { useContext } from "react";
import SmartContext from "../../context/SmartContext";

function IndividualProduct() {
    const { productSelected, addToCart, showModal } = useContext(SmartContext)
    const { brand, title, price, rating, images, description, category, id } = productSelected
    const finalProduct = {
        category: category,
        title: title,
        price: price,
        images: images,
        description: description,
        id: id,
        brand: brand,
        quantity: 1
    }
    const handleAddProduct = (product) => {
        addToCart(product)
        showModal()
    }
    return (<section className="individual-product-card">
        <div className="individual-product-image">
            <img src={images[0]} alt="" />
        </div>
        <div className="individual-product-description">
            <span>{category}</span>
            <strong>{brand}</strong>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>${price}</h3>
            <span>Rating: ⭐{rating}</span>
            <div>
                <button className="add-cart" onClick={() => handleAddProduct(finalProduct)}>Add to Cart</button>
            </div>
        </div>
    </section>);
}

export default IndividualProduct;