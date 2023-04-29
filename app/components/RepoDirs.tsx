import Link from "next/link";
const fetchRepoContents = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // const contents: any = await fetch(
  //   `https://api.github.com/repos/jonathan-baraza/${name}/contents`,
  //   {
  //     method: "get",
  //   }
  // );

  // const dirs = contents.filter((content: any) => content.type === "dir");
  const dirs = [
    {
      path: "one",
    },
    {
      path: "two",
    },
    {
      path: "three",
    },
    {
      path: "four",
    },
  ];
  return dirs;
};
async function RepoDirs({ name }: { name: string }) {
  const dirs = await fetchRepoContents(name);

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RepoDirs;
