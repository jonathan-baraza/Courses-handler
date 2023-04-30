"use client";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Courses from "./components/Courses";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      console.log("data");
      console.log(data);
      setCourses(data);
      setIsLoading(false);
    };
    fetchCourses();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="bg-gray-700 min-h-screen text-white">
        <Courses allCourses={courses} />
      </div>
    </>
  );
};

export default HomePage;
