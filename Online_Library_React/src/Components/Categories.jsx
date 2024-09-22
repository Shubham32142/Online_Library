/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./Categories.css";

function Categories({ categories, onCategorySelect }) {
  const navigate = useNavigate();

  function handleSelect(e) {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      onCategorySelect(selectedCategory);
      navigate(`/books/category/${selectedCategory}`);
    }
  }

  return (
    <div className="categories-container">
      <h4 className="categories-title">Categories</h4>
      <select className="categories-select" onChange={handleSelect}>
        <option value="">Select a category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;
