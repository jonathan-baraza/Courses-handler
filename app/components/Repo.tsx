import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
const fetchRepo = async (name: string) => {
  const response: any = await fetch(
    `https://api.github.com/repos/jonathan-baraza/${name}`,
    {
      method: "get",
    }
  );

  const repo = await response.json();
  console.log("repo");
  console.log(repo);
  return repo;
};
const Repo = async ({ name }: { name: string }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <div>
        <div className="text-sm mt-3">{repo.description}</div>
        <div className="stats flex items-center text-[#343a40] mt-3">
          {" "}
          <span className="flex items-center flex-row mr-4">
            <FaStar />
            <span className="ml-2">{repo.starGazers}</span>
          </span>
          <span className="flex items-center flex-row mr-4">
            <FaCodeBranch />
            <span className="ml-2">{repo.forks}</span>
          </span>
          <span className="flex items-center flex-row mr-4">
            <FaEye />

            <span className="ml-2">{repo.watchers}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Repo;
