import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";

const Navbar = () => {
  const { enrolledCourses } = useContext(EnrollmentContext);

  return (
    <nav>
      <NavLink to="/">
        <h2>JuliusTech</h2>
      </NavLink>
      <NavLink to="/courses">Courses</NavLink> |{" "}
      <NavLink to="/dashboard">Dashboard</NavLink> |{" "}
      <NavLink to="/enrolled">Enrolled ({enrolledCourses.length})</NavLink> |{" "}
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/register">
        Register
      </NavLink>
    </nav>
  );
};

export default Navbar;