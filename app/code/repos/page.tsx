import RepoCard from "@/app/components/RepoCard";

const fetchRepos = async () => {
  const response: any = await fetch(
    "https://api.github.com/users/jonathan-baraza/repos",
    {
      method: "get",
    }
  );

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  //wait one second
  const repos = await response.json();
  return repos;
};

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <>
      <div className=" w-full m-0">
        <h1 className="font-bold text-2x my-4 px-3 mt-6 text-2xl ">
          Repositories
        </h1>
        <div className="row flex flex-row w-full mx-auto flex-wrap">
          {repos &&
            repos?.map((repo: any) => (
              <RepoCard
                id={repo.id}
                name={repo.name}
                description={repo.description}
                starGazers={repo.stargazers_count}
                forks={repo.forks_count}
                watchers={repo.watchers_count}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ReposPage;
