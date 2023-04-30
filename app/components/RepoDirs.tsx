import Link from "next/link";
const fetchRepoContents = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const contents: any = await fetch(
    `https://api.github.com/repos/jonathan-baraza/${name}/contents`,
    {
      method: "get",
    }
  );

  const allContent = await contents.json();
  const dirs = await allContent.filter(
    (content: any) => content.type === "dir"
  );

  console.log("dirs");
  console.log(dirs);
  return dirs;
};
async function RepoDirs({ name }: { name: string }) {
  const dirs = await fetchRepoContents(name);

  return (
    <>
      <h3 className="text-xl mt-6 mb-2 font-bold">Directories</h3>
      <ul className="list list-disc pl-6">
        {dirs.map((dir: any) => (
          <li key={dir.path} className="underline text-blue-800 ">
            <Link href={dir.html_url}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RepoDirs;
