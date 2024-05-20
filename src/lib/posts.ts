import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post";

const POSTS_DIRECTORY = path.join(process.cwd(), "src/content");

export const getSortedPosts = (): Post[] => {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  const allPosts = fileNames.map((fileName: string) => {
    const fullPath = path.join(POSTS_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const parsedContent = matter(fileContents);

    return {
      id: fileName.replace(/\.mdx?$/, ""),
      title: parsedContent.data.title,
      date: parsedContent.data.date,
      content: parsedContent.content,
    };
  });

  return allPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA > dateB ? -1 : 1;
  });
};

export const getPostContent = (id: string): Post => {
  const fullPath = path.join(POSTS_DIRECTORY, `${id}.mdx`);
  console.log(fullPath);
  const content = fs.readFileSync(fullPath, "utf8");

  const parsedContent = matter(content);

  return {
    id,
    title: parsedContent.data.title,
    date: parsedContent.data.date,
    content: parsedContent.content,
  };
};
