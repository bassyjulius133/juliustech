import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ id, title, instructor, price, category, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>
        <strong>Instructor:</strong> {instructor}
      </p>

      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Price:</strong> ₦{price}
      </p>

      <Link to={`/course/${id}`}>View Details</Link>
    </div>
  );
};

export default CourseCard;