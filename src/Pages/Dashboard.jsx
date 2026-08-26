import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardCard from "../Components/DashboardCard.jsx";
import ProgressBar from "../Components/ProgressBar.jsx";
import { EnrollmentContext } from "../context/EnrollmentContext.jsx";
import courses from "../data/courses.js";

const Dashboard = () => {
  const { enrolledCourses } = useContext(EnrollmentContext);

  useEffect(() => {
    document.title = "JuliusTech | Dashboard";
  }, []);

  const totalCourses = courses.length;
  const enrolledCount = enrolledCourses.length;
  const progress = totalCourses === 0 ? 0 : Math.round((enrolledCount / totalCourses) * 100);

  return (
    <section className="page dashboard-page">
      <div className="page-intro">
        <p className="section-label">STUDENT DASHBOARD</p>
        <h1>Your learning overview</h1>
        <p>Keep track of the courses you have added to your learning list.</p>
      </div>

      <div className="dashboard-grid">
        <DashboardCard title="Available courses" value={totalCourses} />
        <DashboardCard title="My enrolled courses" value={enrolledCount} />
        <DashboardCard title="Enrollment progress" value={`${progress}%`} />
      </div>

      <ProgressBar progress={progress} />

      {enrolledCount === 0 && (
        <div className="dashboard-action">
          <h2>Ready to begin?</h2>
          <p>Choose a course to start building your learning list.</p>
          <Link to="/courses" className="primary-button">
            Browse courses
          </Link>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
