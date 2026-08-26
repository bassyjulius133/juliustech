import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import CourseDetails from "./Pages/CourseDetails.jsx";
import Courses from "./Pages/Courses.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Enrolled from "./Pages/Enrolled.jsx";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Profile from "./Pages/Profile.jsx";
import Register from "./Pages/Register.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/enrolled" element={<Enrolled />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
