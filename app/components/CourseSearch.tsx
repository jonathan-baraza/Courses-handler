"use client";
import { FormEvent, ReactEventHandler, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";

const CourseSearch = ({ setFiltered }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/courses/search?query=${query}`);
    const data = await res.json();
    setFiltered(data);
    setLoading(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center justify-center w-[80%] mx-auto md:w-1/2"
    >
      <input
        type="text"
        placeholder="Search courses..."
        className="py-2 px-4 rounded bg-white text-dark my-2 outline-none w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#003ea2] flex items-center justify-center hover:cursor-pointer hover:bg-[#003080] duration-75 ml-2 py-2 px-6 rounded min-w-[180px]"
      >
        {loading ? (
          <span className="flex items-center">
            <ImSpinner2 className="me-2" />
            please wait...
          </span>
        ) : (
          <span className="flex items-center">
            <AiOutlineSearch className="me-1" size={20} />
            search
          </span>
        )}
      </button>
    </form>
  );
};

export default CourseSearch;
