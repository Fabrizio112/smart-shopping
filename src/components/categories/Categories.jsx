import CategoryCard from "./CategoryCard";
import top1 from "../../assets/img/top-categories/top-categories-1.png"
import top2 from "../../assets/img/top-categories/top-categories-2.png"
import top3 from "../../assets/img/top-categories/top-categories-3.png"
import top4 from "../../assets/img/top-categories/top-categories-4.png"


function Categories() {
    return (
        <section className="main-categories">
            <CategoryCard img={top1} category="Laptops" />
            <CategoryCard img={top2} category="Sunglasses" />
            <CategoryCard img={top3} category="Womens-Bags" />
            <CategoryCard img={top4} category="Skincare" />
        </section>);
}

export default Categories;