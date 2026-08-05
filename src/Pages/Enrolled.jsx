import React, { useContext, useEffect } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";

const Enrolled = () => {

  const {
    enrolledCourses,
    removeCourse
  } = useContext(EnrollmentContext);

  useEffect(() => {
    document.title = "My Enrolled Courses";
  }, []);

  return (
    <div className="page">

      <h1>My Enrolled Courses</h1>

      {enrolledCourses.length === 0 ? (
        <h2>No courses enrolled yet.</h2>
      ) : (
        enrolledCourses.map((course) => (
          <div className="course-card" key={course.id}>

            <img
              src={course.image}
              alt={course.title}
            />

            <h2>{course.title}</h2>

            <p>{course.instructor}</p>

            <p>₦{course.price}</p>

            <button
              className="remove-btn"
              onClick={() => removeCourse(course.id)}
            >
              Remove Course
            </button>

          </div>
        ))
      )}

    </div>
  );
};

export default Enrolled;