import "./Categories.css";
import categories from "../../data/categories";
import { useNavigate } from "react-router-dom";

function Categories() {

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <section className="categories">

      <h2>🎮 Browse by Category</h2>

      <div className="category-grid">

        {categories.map((category) => (

          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
            style={{ cursor: "pointer" }}
          >

            <span>{category.emoji}</span>

            <h3>{category.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;