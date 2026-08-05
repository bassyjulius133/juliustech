import React, { useEffect } from "react";

const Profile = () => {

  useEffect(() => {
    document.title = "Profile";
  }, []);

  return (
    <div className="page">

      <h1>Student Profile</h1>

      <div className="profile-card">

        <h2>Julius Bassey</h2>

        <p>Email: julius@example.com</p>

        <p>Phone: +234 801 234 5678</p>

        <p>Student ID: ST1024</p>

        <p>Course: Software Engineering</p>

      </div>

    </div>
  );
};

export default Profile;