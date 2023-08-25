import { useContext } from "react";
import Categories from "../components/categories/Categories";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import ProductRandom from "../components/product-random/ProductRandom";
import TopProducts from "../components/top-products/TopProducts";
import SmartContext from "../context/SmartContext";
import ModalAddProduct from "../components/modal/ModalAddProduct";

function Home() {
    const { modalAdd } = useContext(SmartContext)
    return (
        <>
            <NavBar />
            <Header />
            <Categories />
            <TopProducts />
            <ProductRandom />
            <Footer />
            {modalAdd === true && <ModalAddProduct />}
        </>
    );
}

export default Home;