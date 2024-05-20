import { CalendarIcon, HashtagIcon } from "@heroicons/react/outline";

const PostCard = () => {
  return (
    <div className="flex flex-col rounded-lg bg-white">
      <a className="text-2xl text-slate-800">How to Typescript in React</a>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center justify-between">
          <CalendarIcon className="h-6 w-6" />
          <span className="text-sm font-medium">2022.12.12</span>
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
  );
};

export default PostCard;
