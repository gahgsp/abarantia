import PostCard from "@/components/PostCard/PostCard";
import { getSortedPosts } from "@/lib/posts";
import { Post } from "@/types/post";

const Home = () => {
  const posts = getSortedPosts();
  return (
    <>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
