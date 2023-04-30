import React from "react";
import Courses from "./components/Courses";
import axios from "axios";

const fetchCourses = async () => {
  const allCourses = await axios({
    method: "get",
    url: "http://localhost:3000/api/courses",
  });

  return allCourses.data;
};

const HomePage = async () => {
  const allCourses = await fetchCourses();
  return (
    <div className="bg-gray-700 min-h-screen text-white">
      <Courses allCourses={allCourses} />
    </div>
  );
};

export default HomePage;
