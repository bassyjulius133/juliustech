import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">

      <h1>Welcome to JuliusTech Learning Platform</h1>

      <p>
        Discover React, Java, Python, C#, UI/UX Design,
        Mobile Development and many more professional courses.
      </p>

      <Link to="/courses">
        <button>Browse Courses</button>
      </Link>

    </section>
  );
};

export default Hero;