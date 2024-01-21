import { getSortedPostsData } from "@/app/blog/[post]/data";
import { formatRelativeDate } from "@/utils/time";
import assert from "assert";

export async function generateStaticParams() {
  return getSortedPostsData();
}

export default async function Blog({
  params: { post: postFromParams },
}: {
  params: { post: string };
}) {
  const posts = await getSortedPostsData();

  return (
    <>
      <main className="py-8 px-5 grow">
        <h1>Blog</h1>
        <p>Occasionally I write about things that I find interesting.</p>
        {posts.map(({ date, id, title }) => (
          <Link date={date} id={id} key={id} title={title} />
        ))}
      </main>
    </>
  );
}

function Link({
  date,
  id,
  title,
}: {
  date: string;
  id: string;
  title: string;
}) {
  const relativeDateString = formatRelativeDate(new Date(`${date} 00:00:00`));

  return (
    <a
      className={
        "flex items-center w-full py-2 transition-colors duration-200 gap-x-2focus:outline-none"
      }
      href={`/blog/${id}`}
    >
      <div className="text-left rtl:text-right">
        <h1 className="text-sm font-medium capitalize">{title}</h1>

        <p className="text-xs text-gray-400">{relativeDateString}</p>
      </div>
    </a>
  );
}
