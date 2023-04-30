import React from "react";
import { courseType } from "../Types";
import Link from "next/link";
import { FaTrophy } from "react-icons/fa";

interface courseProps {
  course: courseType;
}

const CourseCard = ({ course }: courseProps) => {
  return (
    <div className="w-1/2 md:w-1/3 p-3" id="courseCard">
      <div className="bg-white p-3 flex flex-col justify-between h-[180px] rounded">
        <h2 className="text-base text-black font-bold">{course.title}</h2>
        <span className="text-dark text-sm mt-2">{course.description}</span>
        <div className="flex text-dark text-xs items-center justify-between my-2">
          <span className="text-dark flex items-center">
            <FaTrophy className="mr-1" />
            {course.level}
          </span>
          <Link
            className="bg-gray-300 p-2 rounded hover:bg-blue-700 hover:cursor-pointer duration-75 hover:text-white "
            href={course.link}
            target="_blank"
          >
            Go to course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
