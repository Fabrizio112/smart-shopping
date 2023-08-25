import { useContext } from "react";
import ProductCard from "../products/ProductCard"
import SmartContext from "../../context/SmartContext";
function TopProducts() {
    const { products } = useContext(SmartContext)
    return (<section className="top_products">
        <h2 className="top-title">Top Products</h2>
        <div className="container-top_products">
            <ProductCard product={products[1]} />
            <ProductCard product={products[8]} />
            <ProductCard product={products[57]} />
            <ProductCard product={products[88]} />
            <ProductCard product={products[65]} />
        </div>
    </section>);
}

export default TopProducts;