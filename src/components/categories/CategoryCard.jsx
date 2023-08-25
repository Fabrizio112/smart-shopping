import { useContext } from "react";
import { NavLink } from "react-router-dom";
import SmartContext from "../../context/SmartContext";
function CategoryCard({ img, category }) {
    const { changeCategory } = useContext(SmartContext)
    return (
        <section className="category-card">
            <div>
                <img src={img} alt="" />
            </div>
            <NavLink to="/products" value={category} onClick={changeCategory}>{category}</NavLink>
        </section>);
}

export default CategoryCard;