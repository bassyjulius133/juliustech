import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EnrollmentContext } from "../context/EnrollmentContext.jsx";

const Navbar = () => {
  const { enrolledCourses } = useContext(EnrollmentContext);

  const linkClass = ({ isActive }) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <NavLink to="/" end className="brand">
          <span className="brand-mark">JT</span>
          <span>JuliusTech</span>
        </NavLink>

        <div className="site-nav">
          <NavLink to="/courses" className={linkClass}>
            Courses
          </NavLink>
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/enrolled" className={linkClass}>
            My Learning ({enrolledCourses.length})
          </NavLink>
          <NavLink to="/profile" className={linkClass}>
            Profile
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "nav-link register-link active" : "nav-link register-link"
            }
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
