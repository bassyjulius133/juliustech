import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Enrolled from "./Pages/Enrolled";
import CourseDetails from "./Pages/CourseDetails";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/enrolled" element={<Enrolled />} />
        <Route path="/course/:id" element={<CourseDetails />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;