"use client";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";
import { setServers } from "dns";
import { courseType } from "./Types";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState<courseType[]>([]);

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
        <h1 className="text-2xl font-bold mt-6 mb-4 mx-auto w-fit">
          Welcome to our courses
        </h1>
        <CourseSearch
          setFiltered={(filteredCourses: courseType[]) =>
            setCourses(filteredCourses)
          }
        />
        <Courses allCourses={courses} />
      </div>
    </>
  );
};

export default HomePage;
