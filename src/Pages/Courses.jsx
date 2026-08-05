import React, { useState, useEffect } from "react";
import courses from "../data/courses";
import CourseCard from "../Components/CourseCard";
import SearchBar from "../Components/SearchBar";
import CategoryFilter from "../Components/CategoryFilter";

const Courses = () => {
  useEffect(() => {
    document.title = "JuliusTech | Courses";
  }, []);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page">
      <h1>Our Courses</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
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