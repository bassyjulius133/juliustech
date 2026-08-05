import React, { useEffect } from "react";
import EnrollmentForm from "../Components/EnrollmentForm";

const Register = () => {

  useEffect(() => {
    document.title = "Student Registration";
  }, []);

  return (
    <div className="page">

      <h1>Student Registration</h1>

      <EnrollmentForm />

    </div>
  );
};

export default Register;