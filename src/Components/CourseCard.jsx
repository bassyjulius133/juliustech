import { Link } from "react-router-dom";

const CourseCard = ({ id, title, instructor, price, category, image }) => {
  return (
    <article className="course-card">
      <img className="course-image" src={image} alt={title} />
      <div className="course-card-content">
        <span className="course-category">{category}</span>
        <h3>{title}</h3>
        <p className="course-instructor">By {instructor}</p>
        <div className="course-card-bottom">
          <strong className="course-price">₦{price.toLocaleString()}</strong>
          <Link to={`/course/${id}`} className="card-link">
            View course
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
