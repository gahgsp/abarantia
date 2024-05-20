import { Post } from "@/types/post";
import { CalendarIcon, HashtagIcon } from "@heroicons/react/outline";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post: { id, title, date } }: PostCardProps) => {
  return (
    <Link href={`/posts/${id}`}>
      <div className="flex flex-col rounded-lg bg-white">
        <span className="text-2xl text-slate-800">{title}</span>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center justify-between">
            <CalendarIcon className="h-6 w-6" />
            <span className="text-sm font-medium">{date}</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <HashtagIcon className="h-6 w-6" />
            <span className="text-sm font-medium">News</span>
          </div>
        </div>
        <div className="text-75">
          Read more about using Typescript in a React Project.
        </div>
        <div className="flex flex-row items-center text-sm text-black/30">
          <div>250 words</div>
          <div>|</div>
          <div>5 minutes</div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
