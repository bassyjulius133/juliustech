import Category from "./Category.jsx";

const categories = ["All", "Frontend", "Backend", "Programming", "UI/UX", "Mobile"];

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <div className="category-filter" aria-label="Course categories">
      <span className="filter-label">Category</span>
      <div className="category-buttons">
        {categories.map((item) => (
          <Category
            key={item}
            label={item}
            active={category === item}
            onClick={() => setCategory(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
