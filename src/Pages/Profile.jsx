import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EnrollmentContext } from "../context/EnrollmentContext.jsx";
import courses from "../data/courses.js";

const defaultProfile = {
  fullName: "Julius Bassey",
  email: "julius@example.com",
  course: "Software Engineering"
};

const Profile = () => {
  const { enrolledCourses } = useContext(EnrollmentContext);
  const [profile] = useState(() => {
    const savedProfile = localStorage.getItem("studentProfile");
    return savedProfile ? JSON.parse(savedProfile) : defaultProfile;
  });

  useEffect(() => {
    document.title = "JuliusTech | Profile";
  }, []);

  const firstName = profile.fullName.split(" ")[0];
  const initial = profile.fullName.charAt(0).toUpperCase();

  return (
    <section className="page profile-page profile-redesign-page">
      <article className="profile-hero">
        <div className="profile-hero-top">
          <span className="profile-status-pill">
            <span className="profile-status-dot"></span>
            Student account
          </span>
          <Link to="/register" className="profile-update-link">
            Update details
          </Link>
        </div>

        <div className="profile-hero-body">
          <div className="profile-avatar-large">{initial}</div>

          <div className="profile-identity">
            <p>WELCOME BACK</p>
            <h1>{profile.fullName}</h1>
            <span>JuliusTech learner</span>
          </div>

          <div className="profile-focus-card">
            <span>Current learning focus</span>
            <strong>{profile.course || "Choose a course"}</strong>
            <p>Keep your profile updated as your learning goals change.</p>
          </div>
        </div>
      </article>

      <div className="profile-stat-grid">
        <article className="profile-stat-card">
          <span>Saved courses</span>
          <strong>{enrolledCourses.length}</strong>
          <p>In your learning list</p>
        </article>
        <article className="profile-stat-card">
          <span>Available courses</span>
          <strong>{courses.length}</strong>
          <p>Ready to explore</p>
        </article>
        <article className="profile-stat-card">
          <span>Learning status</span>
          <strong>{enrolledCourses.length > 0 ? "Active" : "New"}</strong>
          <p>{enrolledCourses.length > 0 ? "You have courses saved" : "Start with your first course"}</p>
        </article>
      </div>

      <div className="profile-content-grid">
        <section className="profile-details-panel">
          <div className="panel-heading">
            <p className="section-label">ACCOUNT DETAILS</p>
            <h2>Your student information</h2>
            <p>These details are stored on this device after you register.</p>
          </div>

          <div className="profile-detail-list">
            <div className="profile-detail-row">
              <span className="profile-detail-icon">@</span>
              <div>
                <p>Email address</p>
                <strong>{profile.email}</strong>
              </div>
            </div>
            <div className="profile-detail-row">
              <span className="profile-detail-icon">+</span>
              <div>
                <p>Course of interest</p>
                <strong>{profile.course || "No course selected"}</strong>
              </div>
            </div>
            <div className="profile-detail-row">
              <span className="profile-detail-icon">ID</span>
              <div>
                <p>Student ID</p>
                <strong>ST1024</strong>
              </div>
            </div>
          </div>
        </section>

        <aside className="profile-next-card">
          <p className="section-label">YOUR NEXT STEP</p>
          <h2>Hi, {firstName}.</h2>
          <p>Browse the course catalogue and add a course to your learning list.</p>
          <Link to="/courses" className="primary-button">
            Explore courses
          </Link>
        </aside>
      </div>
    </section>
  );
};

export default Profile;
