import { getSortedPostsData } from "@/app/blog/[post]/getSortedPostsData";
import { formatRelativeDate } from "@/utils/time";

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
        <p>Sometimes I write about tech.</p>
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
    <a className="flex flex-row items-center gap-1" href={`/blog/${id}`}>
      <div className="font-medium capitalize">{title}</div>
      <div className="text-sm text-gray-400">({relativeDateString})</div>
    </a>
  );
}
