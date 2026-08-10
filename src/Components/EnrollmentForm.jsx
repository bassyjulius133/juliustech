import { useState } from "react";

const EnrollmentForm = ({ courses, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({
      fullName: "",
      email: "",
      course: ""
    });
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <label className="form-field" htmlFor="fullName">
        <span>Full name</span>
        <input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-field" htmlFor="email">
        <span>Email address</span>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-field" htmlFor="course">
        <span>Course of interest</span>
        <select id="course" name="course" value={formData.course} onChange={handleChange} required>
          <option value="">Choose a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.title}>
              {course.title}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className="primary-button form-button">
        Save registration
      </button>
    </form>
  );
};

export default EnrollmentForm;
