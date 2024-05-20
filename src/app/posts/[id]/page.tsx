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
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <MDXRemote source={currentPost.content} />
    </section>
  );
};

export default Post;
