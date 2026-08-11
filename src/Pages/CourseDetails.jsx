import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EnrollmentContext } from "../context/EnrollmentContext.jsx";
import courses from "../data/courses.js";

const CourseDetails = () => {
  const { id } = useParams();
  const { enrollCourse, isEnrolled } = useContext(EnrollmentContext);
  const [message, setMessage] = useState("");
  const course = courses.find((item) => item.id === Number(id));

  useEffect(() => {
    document.title = course ? `JuliusTech | ${course.title}` : "JuliusTech | Course Not Found";
  }, [course]);

  if (!course) {
    return (
      <section className="page empty-state large-empty-state">
        <p className="section-label">COURSE NOT FOUND</p>
        <h1>We could not find that course.</h1>
        <p>Please return to the course catalogue and choose another course.</p>
        <Link to="/courses" className="primary-button">
          Back to courses
        </Link>
      </section>
    );
  }

  const alreadyEnrolled = isEnrolled(course.id);

  const handleEnrollment = () => {
    const wasAdded = enrollCourse(course);
    setMessage(wasAdded ? "Course added to your learning list." : "This course is already in your learning list.");
  };

  return (
    <section className="page course-details-page">
      <Link to="/courses" className="back-link">
        Back to all courses
      </Link>

      <div className="details-layout">
        <img className="details-image" src={course.image} alt={course.title} />

        <div className="details-content">
          <span className="course-category">{course.category}</span>
          <h1>{course.title}</h1>
          <p className="details-instructor">Taught by {course.instructor}</p>
          <p className="details-description">{course.description}</p>

          <dl className="course-info">
            <div>
              <dt>Duration</dt>
              <dd>{course.duration}</dd>
            </div>
            <div>
              <dt>Rating</dt>
              <dd>{course.rating} / 5</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>₦{course.price.toLocaleString()}</dd>
            </div>
          </dl>

          <button
            type="button"
            className="primary-button enroll-button"
            onClick={handleEnrollment}
            disabled={alreadyEnrolled}
          >
            {alreadyEnrolled ? "Already enrolled" : "Enroll now"}
          </button>

          {message && <p className="form-message">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
         