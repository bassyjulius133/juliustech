import { useEffect } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard.jsx";
import Hero from "../components/Hero.jsx";
import courses from "../data/courses.js";

const Home = () => {
  useEffect(() => {
    document.title = "JuliusTech | Home";
  }, []);

  const featuredCourses = courses.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="page content-section">
        <div className="section-heading">
          <div>
            <p className="section-label">START LEARNING</p>
            <h2>Featured courses</h2>
            <p>Begin with a popular course and learn at a comfortable pace.</p>
          </div>
          <Link to="/courses" className="text-link">
            See all courses
          </Link>
        </div>

        <div className="course-grid">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

      <section className="home-stats">
        <div className="page stat-grid">
          <article className="stat-card">
            <h2>8</h2>
            <p>Available courses</p>
          </article>
          <article className="stat-card">
            <h2>5</h2>
            <p>Learning categories</p>
          </article>
          <article className="stat-card">
            <h2>100%</h2>
            <p>Self-paced learning</p>
          </article>
        </div>
      </section>

      <section className="page content-section">
        <div className="section-heading">
          <div>
            <p className="section-label">WHY JULIUSTECH</p>
            <h2>A simple way to keep learning</h2>
          </div>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-number">01</span>
            <h3>Clear course choices</h3>
            <p>Courses are organised by category so it is easier to find a subject you enjoy.</p>
          </article>
          <article className="feature-card">
            <span className="feature-number">02</span>
            <h3>Practical topics</h3>
            <p>Learn skills in frontend, backend, programming, mobile development, and design.</p>
          </article>
          <article className="feature-card">
            <span className="feature-number">03</span>
            <h3>Simple progress tracking</h3>
            <p>Use the dashboard to see your enrolled courses and overall progress.</p>
          </article>
        </div>
      </section>

      <section className="page">
        <div className="callout">
          <div>
            <p className="section-label">READY TO START?</p>
            <h2>Find a course that matches your next goal.</h2>
          </div>
          <Link to="/courses" className="primary-button">
            Explore courses
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
