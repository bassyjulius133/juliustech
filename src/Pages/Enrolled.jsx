import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { EnrollmentContext } from "../context/EnrollmentContext.jsx";

const Enrolled = () => {
  const { enrolledCourses, removeCourse } = useContext(EnrollmentContext);
  const enrolledCount = enrolledCourses.length;

  useEffect(() => {
    document.title = "JuliusTech | My Learning";
  }, []);

  return (
    <section className="page enrolled-page learning-page">
      <header className="learning-banner">
        <div className="learning-banner-copy">
          <p className="section-label">MY LEARNING SPACE</p>
          <h1>Keep your course choices organised.</h1>
          <p>
            Your selected courses are kept here, ready for you whenever you want to continue learning.
          </p>
          <div className="learning-banner-actions">
            <Link to="/courses" className="secondary-button">
              Browse more courses
            </Link>
            {enrolledCount > 0 && (
              <Link to="/dashboard" className="learning-dashboard-link">
                View dashboard
              </Link>
            )}
          </div>
        </div>

        <div className="learning-count-card">
          <strong>{enrolledCount}</strong>
          <span>{enrolledCount === 1 ? "course saved" : "courses saved"}</span>
          <p>Your personal learning list</p>
        </div>
      </header>

      {enrolledCount === 0 ? (
        <section className="learning-empty-card">
          <div>
            <p className="section-label">NOTHING SAVED YET</p>
            <h2>Start building your learning list.</h2>
            <p>Explore the course catalogue and add a course that matches your current goal.</p>
          </div>
          <Link to="/courses" className="primary-button">
            Find a course
          </Link>
        </section>
      ) : (
        <section className="learning-list-section">
          <div className="learning-list-heading">
            <div>
              <p className="section-label">YOUR COURSE LIST</p>
              <h2>Ready when you are</h2>
            </div>
            <p>{enrolledCount} course{enrolledCount === 1 ? "" : "s"} in your list</p>
          </div>

          <div className="learning-list">
            {enrolledCourses.map((course, index) => (
              <article className="learning-card" key={course.id}>
                <div className="learning-card-image-wrap">
                  <img src={course.image} alt={course.title} />
                  <span className="learning-course-number">Course {index + 1}</span>
                </div>

                <div className="learning-card-body">
                  <span className="course-category">{course.category}</span>
                  <h2>{course.title}</h2>
                  <p className="learning-instructor">Taught by {course.instructor}</p>
                  <p className="learning-description">{course.description}</p>
                  <div className="learning-meta">
                    <span>{course.duration}</span>
                    <span>{course.rating} rating</span>
                    <strong>₦{course.price.toLocaleString()}</strong>
                  </div>
                </div>

                <div className="learning-card-actions">
                  <Link to={`/course/${course.id}`} className="primary-button">
                    View course
                  </Link>
                  <button type="button" className="remove-button" onClick={() => removeCourse(course.id)}>
                    Remove course
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default Enrolled;
