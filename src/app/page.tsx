import { getSortedPosts } from "@/lib/posts";
import Link from "next/link";

const Home = () => {
  const posts = getSortedPosts();
  return (
    <>
      <ul>
        {posts.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
