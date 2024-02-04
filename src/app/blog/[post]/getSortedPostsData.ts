import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

import "server-only";

const postsDirectory = join(process.cwd(), "blog");

export function getSortedPostsData() {
  const fileNames = readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = join(postsDirectory, fileName);
    const fileContents = readFileSync(fullPath, "utf8");

    const {
      data: { date, title },
    } = matter(fileContents);

    return {
      date,
      id,
      title,
    } as {
      date: string;
      id: string;
      title: string;
    };
  });

  return allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
}
