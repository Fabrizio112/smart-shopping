import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import FavoriteSection from "../components/favorite/FavoriteContainer";
import SmartContext from "../context/SmartContext";
import { useContext } from "react";
import ModalAddProduct from "../components/modal/ModalAddProduct";


function Favorite() {
    const { modalAdd } = useContext(SmartContext)
    return (
        <>
            <NavBar />
            <FavoriteSection />
            <Footer />
            {modalAdd === true && <ModalAddProduct />}
        </>
    );
}

export default Favorite;