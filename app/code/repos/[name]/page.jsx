"use client";
import { Suspense } from "react";
import React from "react";
import Repo from "@/app/components/Repo";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import RepoDirs from "@/app/components/RepoDirs";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="w-full p-3">
      <div className="w-full  text-black p-4 bg-white rounded">
        <Link
          href={"/code/repos"}
          className="text-sm hover:cursor-pointer flex items-center mb-4 bg-[#e5e5e5] w-fit py-2 px-3 rounded hover:text-white hover:bg-[#003ea2] duration-75"
        >
          <BiArrowBack />
          <span className="ml-2"> Back to repos</span>
        </Link>
        <h2 className="font-bold text-lg">{name}</h2>
        <Suspense fallback={<div>Loading repo...</div>}>
          <Repo name={name} />
        </Suspense>
        <Suspense fallback={<div>Loading directories...</div>}>
          <RepoDirs name={name} />
        </Suspense>
      </div>
    </div>
  );
};

export default RepoPage;
