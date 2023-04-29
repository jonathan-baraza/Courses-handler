import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-700 min-h-screen text-white">
      <h1>Welcome to Kings repos</h1>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/about/team"}>Team</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
