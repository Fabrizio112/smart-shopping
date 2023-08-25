import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import IndividualProduct from "../components/individual-product/IndividualProduct";
import { useContext } from "react";
import SmartContext from "../context/SmartContext";
import ModalAddProduct from "../components/modal/ModalAddProduct";
function IndividualProductPage() {
    const { modalAdd } = useContext(SmartContext)
    return (<>
        <NavBar />
        <IndividualProduct />
        <Footer />
        {modalAdd === true && <ModalAddProduct />}
    </>);
}

export default IndividualProductPage;