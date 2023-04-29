"use client";
import React from "react";
import Repo from "@/app/components/Repo";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="w-full p-3">
      <div className="w-full  text-black p-4 bg-white rounded">
        <Link
          href={"/code/repos"}
          className="text-sm hover:cursor-pointer hover:underline flex items-center mb-3"
        >
          <BiArrowBack />
          <span className="ml-2"> Back to repos</span>
        </Link>
        <h2 className="font-bold text-lg">{name}</h2>
        <Repo name={name} />
      </div>
    </div>
  );
};

export default RepoPage;
