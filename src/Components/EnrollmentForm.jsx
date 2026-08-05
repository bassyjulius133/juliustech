import React, { useState } from "react";

const EnrollmentForm = () => {

  const [student, setStudent] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    courseLevel: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "student",
      JSON.stringify(student)
    );

    alert("Registration Successful!");

    setStudent({
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      courseLevel: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={student.fullName}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={student.email}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={student.phone}
        onChange={handleChange}
        required
      />

      <select
        name="gender"
        value={student.gender}
        onChange={handleChange}
        required
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select
        name="courseLevel"
        value={student.courseLevel}
        onChange={handleChange}
        required
      >
        <option value="">Choose Level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <button type="submit">
        Register
      </button>

    </form>
  );
};

export default EnrollmentForm;