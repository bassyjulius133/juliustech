import React from "react";

const CategoryFilter = ({ setCategory }) => {
  return (
    <div className="categories">
      <button onClick={() => setCategory("All")}>All</button>

      <button onClick={() => setCategory("Frontend")}>
        Frontend
      </button>

      <button onClick={() => setCategory("Backend")}>
        Backend
      </button>

      {/* Add it here */}
      <button onClick={() => setCategory("Programming")}>
        Programming
      </button>

      <button onClick={() => setCategory("UI/UX")}>
        UI/UX
      </button>

      <button onClick={() => setCategory("Mobile")}>
        Mobile
      </button>
    </div>
  );
};

export default CategoryFilter;