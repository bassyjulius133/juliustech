import { createContext, useEffect, useState } from "react";

export const EnrollmentContext = createContext();

const EnrollmentProvider = ({ children }) => {

  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const savedCourses = localStorage.getItem("enrolledCourses");
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolledCourses)
    );
  }, [enrolledCourses]);

  const enrollCourse = (course) => {

    const exists = enrolledCourses.find(
      (item) => item.id === course.id
    );

    if (!exists) {
      setEnrolledCourses([...enrolledCourses, course]);
      alert("Course enrolled successfully!");
    } else {
      alert("You have already enrolled in this course.");
    }

  };

  const removeCourse = (id) => {
    setEnrolledCourses(
      enrolledCourses.filter((course) => course.id !== id)
    );
  };

  return (
    <EnrollmentContext.Provider
      value={{
        enrolledCourses,
        enrollCourse,
        removeCourse
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
};

export default EnrollmentProvider;