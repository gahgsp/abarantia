import AddComment from "@/components/AddComment/AddComment";
import CommentsList from "@/components/CommentsList/CommentsList";
import { getPostContent } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc"; // RSC due to using NextJS App Router.

interface PostProps {
  params: { id: string };
}

const Post = async ({ params }: PostProps) => {
  // For "components", "pages", "layouts", etc. NextJS injects a property called "params".
  // It contains the URL parameters.
  const currentPost = getPostContent(params.id);

  return (
    <section>
      <div className="rounded-lg bg-white py-3 px-1">
        <MDXRemote source={currentPost.content} />
      </div>
      <div className="rounded-lg bg-white py-3 px-1 mt-5">
        <AddComment />
      </div>
      <div className="rounded-lg bg-white py-3 px-1 mt-5">
        <CommentsList />
      </div>
    </section>
  );
};

export default Post;
