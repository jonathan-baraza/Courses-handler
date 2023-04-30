import React from "react";
import { courseType } from "../Types";
import CourseCard from "./CourseCard";

const Courses = ({ allCourses }: { allCourses: courseType[] }) => {
  return (
    <div className="bg-gray-700 min-h-screen text-white">
     
      <h2 className="text-xl font-bold my-2 mb-4 mx-auto w-fit">
        Our Courses ({allCourses.length})
      </h2>

      <div className="flex flex-wrap w-full md:w-3/4 mx-auto">
        {allCourses.map((course: courseType) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
