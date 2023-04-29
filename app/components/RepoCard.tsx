import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { repoObject } from "../Types";
const RepoCard = (data: repoObject) => {
  return (
    <div id="repoCard" className="w-1/2 md:w-1/4 p-3">
      <Link
        href={`/code/repos/${data.name}`}
        className="bg-white rounded  h-[200px] p-3 flex flex-col justify-between hover:cursor-pointer hover:shadow-lg duration-75 hover:shadow-gray-900"
      >
        <span className="font-bold text-black">{data.name}</span>
        <span className="text-gray-800 text-sm">
          {data?.description?.slice(0, 180) || "Description not available"}{" "}
          {data?.description?.length > 180 && "..."}
        </span>
        <div className="flex items-center flex-row justify-between text-gray-800 text-sm">
          <span className="flex items-center flex-row">
            <FaStar />
            <span className="ml-2">{data.starGazers}</span>
          </span>
          <span className="flex items-center flex-row">
            <FaCodeBranch />
            <span className="ml-2">{data.forks}</span>
          </span>
          <span className="flex items-center flex-row">
            <FaEye />

            <span className="ml-2">{data.watchers}</span>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default RepoCard;
