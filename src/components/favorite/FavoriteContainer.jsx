import { useContext } from "react";
import SmartContext from "../../context/SmartContext";
import ProductCard from "../products/ProductCard";

function FavoriteSection() {
    const { favorite } = useContext(SmartContext)
    console.log(favorite)
    return (
        <section className="favorite">
            <div className="favorite-products">
                <h1>Favorite</h1>
                <div className="favorite-products-container">
                    {(favorite && favorite.length > 0) && favorite.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </section>);
}

export default FavoriteSection;