import { createContext, useEffect, useState } from "react";

export const EnrollmentContext = createContext();

const EnrollmentProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const savedCourses = localStorage.getItem("enrolledCourses");
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const enrollCourse = (course) => {
    const alreadyEnrolled = enrolledCourses.some((item) => item.id === course.id);

    if (alreadyEnrolled) {
      return false;
    }

    setEnrolledCourses([...enrolledCourses, course]);
    return true;
  };

  const removeCourse = (id) => {
    setEnrolledCourses(enrolledCourses.filter((course) => course.id !== id));
  };

  const isEnrolled = (id) => {
    return enrolledCourses.some((course) => course.id === id);
  };

  return (
    <EnrollmentContext.Provider value={{ enrolledCourses, enrollCourse, removeCourse, isEnrolled }}>
      {children}
    </EnrollmentContext.Provider>
  );
};

export default EnrollmentProvider;
