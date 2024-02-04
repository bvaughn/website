import { formatRelativeDate } from "@/utils/time";
import assert from "assert";
import { readFileSync } from "fs";
import matter from "gray-matter";
import markdownit from "markdown-it";
import { join } from "path";

export default async function Blog({
  params: { post: postId },
}: {
  params: {
    post: string;
  };
}) {
  const { date: dateString, html, title } = await getPost(postId);
  const date = new Date(`${dateString} 00:00:00`);

  return (
    <main className="py-8 px-5 grow">
      <h1 className="capitalize">{title}</h1>
      <p className="text-sm text-gray-400">Posted {formatRelativeDate(date)}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}

const postsDirectory = join(process.cwd(), "blog");

async function getPost(id: string) {
  const fullPath = join(postsDirectory, id + ".md");
  const fileContents = readFileSync(fullPath, "utf8");
  assert(fileContents);

  const {
    content,
    data: { date, title },
  } = matter(fileContents);

  const html = markdownit().render(content);

  return {
    html,
    date,
    id,
    title,
  } as {
    html: string;
    date: string;
    id: string;
    title: string;
  };
}
