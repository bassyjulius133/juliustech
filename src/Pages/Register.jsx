import { useEffect, useState } from "react";
import EnrollmentForm from "../components/EnrollmentForm.jsx";
import courses from "../data/courses.js";

const Register = () => {
  const [registeredName, setRegisteredName] = useState("");

  useEffect(() => {
    document.title = "JuliusTech | Register";
  }, []);

  const handleRegistration = (formData) => {
    localStorage.setItem("studentProfile", JSON.stringify(formData));
    setRegisteredName(formData.fullName);
  };

  return (
    <section className="page register-page">
      <div className="registration-layout">
        <div className="registration-intro-card">
          <p className="hero-label">STUDENT REGISTRATION</p>
          <h1>Set up your learning profile.</h1>
          <p>
            Add your details once, choose a course you are interested in, and keep your learning journey organised.
          </p>

          <div className="registration-steps">
            <div>
              <span>1</span>
              <p>Save your basic student details.</p>
            </div>
            <div>
              <span>2</span>
              <p>Select a course you want to explore.</p>
            </div>
            <div>
              <span>3</span>
              <p>Build your learning list when you are ready.</p>
            </div>
          </div>
        </div>

        <div className="registration-form-panel">
          <div className="registration-form-heading">
            <p className="section-label">YOUR DETAILS</p>
            <h2>Create or update your profile</h2>
            <p>All fields are required.</p>
          </div>

          <EnrollmentForm courses={courses} onSubmit={handleRegistration} />

          {registeredName && (
            <p className="form-message">
              Thanks, {registeredName}. Your registration has been saved.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Register;
