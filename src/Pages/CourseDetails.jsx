import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";
import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";

const CourseDetails = () => {
  const { id } = useParams();
  const { enrollCourse } = useContext(EnrollmentContext);
  const course = courses.find((item) => item.id === Number(id));

  useEffect(() => {
    if (course) {
      document.title = `JuliusTech | ${course.title}`;
    } else {
      document.title = "Course Not Found";
    }
  }, [course]);

  if (!course) {
    return (
      <div className="page">
        <h1>Course Not Found</h1>
        <Link to="/courses">
          <button>Back to Courses</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <img src={course.image} alt={course.title} className="details-image" />

      <h1>{course.title}</h1>

      <h3>Instructor: {course.instructor}</h3>

      <p>
        <strong>Category:</strong> {course.category}
      </p>

      <p>
        <strong>Duration:</strong> {course.duration}
      </p>

      <p>
        <strong>Rating:</strong> ⭐ {course.rating}
      </p>

      <p>
        <strong>Price:</strong> ₦{course.price}
      </p>

      <p>{course.description}</p>

      <button className="enroll-btn" 
      onClick={() => enrollCourse(course)}>
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetails;
