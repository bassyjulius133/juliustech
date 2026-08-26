import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter.jsx";
import CourseCard from "../components/CourseCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import courses from "../data/courses.js";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    document.title = "JuliusTech | Courses";
  }, []);

  const searchTerm = search.trim().toLowerCase();
  const visibleCourses = courses.filter((course) => {
    const matchesSearch = `${course.title} ${course.instructor} ${course.category}`
      .toLowerCase()
      .includes(searchTerm);
    const matchesCategory = category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="page courses-page">    
      <div className="page-intro">
        <p className="section-label">COURSE CATALOGUE</p>
        <h1>Choose a course</h1>
        <p>Search by topic or select a category to find the right course for you.</p>
      </div>

      <div className="course-tools">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter category={category} setCategory={setCategory} />
      </div>

      <p className="course-count">
        {visibleCourses.length} {visibleCourses.length === 1 ? "course" : "courses"} found
      </p>

      {visibleCourses.length > 0 ? (
        <div className="course-grid">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No courses found</h2>
          <p>Try another search word or choose a different category.</p>
        </div>
      )}
    </section>
  );
};

export default Courses;
