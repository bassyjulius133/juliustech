import React, { useState, useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    document.title = "JuliusTech | Register";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !course) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Registration Successful!

Name: ${name}
Email: ${email}
Course: ${course}`);

    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <div className="page">
      <h1>Student Registration</h1>

      <form className="register-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option>React</option>
          <option>JavaScript</option>
          <option>Python</option>
          <option>Java</option>
          <option>C#</option>
        </select>

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
};

export default Register;