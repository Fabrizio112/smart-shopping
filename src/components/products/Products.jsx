import { useContext } from "react";
import ProductCard from "./ProductCard";
import SmartContext from "../../context/SmartContext";
import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../helpers/const";
function Product() {
    const { products, categoryFilter, changeCategory, filters, changePrice } = useContext(SmartContext)
    const filteredProducts = categoryFilter(products)
    return (<section className="product-section">
        <h1>Products</h1>
        <div className="product-section_container">
            <section className="product-section_categories">
                <ul>
                    <h2>Price:</h2>
                    <input onChange={changePrice} type="range" min="0" max="1400" step="10" />
                    <span>${filters.price}</span>
                </ul>
                <ul>
                    <h2>Categories</h2>
                    <div>
                        {CATEGORIES.map((category, index) => <li key={index}><NavLink key={index} onClick={changeCategory}>{category}</NavLink></li>)}
                    </div>

                </ul>

            </section>
            <section className="product-section_products">
                {filteredProducts ? filteredProducts.map(el => <ProductCard key={el.id} product={el} />) : products.map(el => <ProductCard key={el.id} product={el} />)}
            </section>
        </div >
    </section >);
}

export default Product;