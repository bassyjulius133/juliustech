import React, { useContext, useEffect } from "react";
import DashboardCard from "../Components/DashboardCard";
import ProgressBar from "../Components/ProgressBar";
import { EnrollmentContext } from "../context/EnrollmentContext";
import courses from "../data/courses";

const Dashboard = () => {
  const { enrolledCourses } = useContext(EnrollmentContext);

  useEffect(() => {
    document.title = "JuliusTech | Dashboard";
  }, []);

  const totalCourses = courses.length;

  const enrolled = enrolledCourses.length;

  const progress =
    totalCourses === 0
      ? 0
      : Math.round((enrolled / totalCourses) * 100);

  return (
    <div className="page">

      <h1>Student Dashboard</h1>

      <div className="stats">

        <DashboardCard
          title="Total Courses"
          value={totalCourses}
        />

        <DashboardCard
          title="Enrolled"
          value={enrolled}
        />

        <DashboardCard
          title="Progress"
          value={`${progress}%`}
        />

      </div>

      <ProgressBar progress={progress} />

    </div>
  );
};

export default Dashboard;