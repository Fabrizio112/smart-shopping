import NavBar from "../components/navbar/NavBar";
import Product from "../components/products/Products";
import Footer from "../components/footer/Footer"
import { useContext } from "react";
import SmartContext from "../context/SmartContext";
import ModalAddProduct from "../components/modal/ModalAddProduct";
function Products() {
    const { modalAdd } = useContext(SmartContext)
    return (
        <>
            <NavBar />
            <Product />
            <Footer />
            {modalAdd === true && <ModalAddProduct />}
        </>);
}

export default Products;