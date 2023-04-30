import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
const fetchRepo = async (name: string) => {
  const response: any = await fetch(
    `https://api.github.com/repos/jonathan-baraza/${name}`,
    {
      method: "get",
    }
  );

  const repo = await response.json();
  // const repo = {
  //   description: "repo desc",
  //   stargazers_count: 33,
  //   forks_count: 18,
  //   watchers_count: 48,
  // };
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
          <span className="flex items-center flex-row mr-6">
            <FaStar />
            <span className="ml-1">{repo.stargazers_count}</span>
          </span>
          <span className="flex items-center flex-row mr-6">
            <FaCodeBranch />
            <span className="ml-1">{repo.forks_count}</span>
          </span>
          <span className="flex items-center flex-row mr-6">
            <FaEye />

            <span className="ml-1">{repo.watchers_count}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Repo;
