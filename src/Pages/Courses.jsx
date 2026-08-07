import React, { useState, useEffect } from "react";
import courses from "../data/courses";
import CourseCard from "../Components/CourseCard";
import SearchBar from "../Components/SearchBar";
import CategoryFilter from "../Components/CategoryFilter";
import SortCourses from "../Components/SortCourses";

const Courses = () => {
  useEffect(() => {
    document.title = "JuliusTech | Courses";
  }, []);

  // These state variables are missing in your code
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || course.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "priceLow") return a.price - b.price;
      if (sort === "priceHigh") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "az") return a.title.localeCompare(b.title);

      return 0;
    });

  return (
    <div className="page">
      <h1>Our Courses</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <SortCourses
        sort={sort}
        setSort={setSort}
      />

      <CategoryFilter
        setCategory={setCategory}
      />

      <div className="course-grid">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;