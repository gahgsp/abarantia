import { getSortedPosts } from "@/lib/posts";
import Link from "next/link";

const Home = () => {
  const posts = getSortedPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {posts.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
