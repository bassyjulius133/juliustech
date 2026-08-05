import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import CourseCard from "../Components/CourseCard";
import courses from "../data/courses.js";
import {FaBook, FaLaptop, FaTrophy} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "JuliusTech | Home";
  }, []);

  const featuredCourses = courses.slice(0, 4);

  return (
    <div>
      <Hero />

      {/* Featured Courses */}
      <section className="page">
        <h2>Featured Courses</h2>

        <div className="course-grid">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
            />
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div className="stat-card">
          <h2>500+</h2>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Courses</p>
        </div>

        <div className="stat-card">
          <h2>20+</h2>
          <p>Instructors</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="page">
        <h2>Why Choose JuliusTech?</h2>

        <div className="features">
          <div className="feature">
            <h3><FaBook /> Expert Instructors</h3>
            <p>Learn from experienced professionals.</p>
          </div>

          <div className="feature">
            <h3><FaLaptop /> Flexible Learning</h3>
            <p>Study anytime and anywhere.</p>
          </div>

          <div className="feature">
            <h3><FaTrophy /> Certificates</h3>
            <p>Receive certificates after completion.</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta">
        <h2>Start Your Learning Journey Today</h2>

        <p>
          Explore our courses and improve your skills.
        </p>

        <Link to={'/courses'}>
          <button>Explore Courses</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;