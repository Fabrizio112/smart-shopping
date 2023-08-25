import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import IndividualProduct from "../pages/IndividualProduct";
import Error404 from "../pages/Error404";
import Cart from "../pages/Cart";
import Favorite from "../pages/Favorite";

function SmartShoppingApp() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<IndividualProduct />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="*" element={< Error404 />} />
            </Routes>
        </HashRouter>
    );
}

export default SmartShoppingApp;