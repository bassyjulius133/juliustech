const Category = ({ label, active, onClick }) => {
  return (
    <button
      type="button"
      className={active ? "category-button active" : "category-button"}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Category;
