import { getAllPostIds, getPostContent } from "@/lib/posts";
import { Post as PostDefinition } from "@/types/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface PostProps {
  post: PostDefinition;
  mdxSource: MDXRemoteSerializeResult;
}

const Post = ({ post, mdxSource }: PostProps) => {
  return (
    <div>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostContent(params?.id as string);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      post,
      mdxSource,
    },
  };
};

export default Post;
