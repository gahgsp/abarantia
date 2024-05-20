import { GlobeAltIcon, InboxIcon } from "@heroicons/react/outline";
import Image from "next/image";

const AuthorCard = () => {
  return (
    <div className="flex flex-col w-full items-center rounded-lg bg-white py-3 px-1">
      <div className="relative h-[256px] w-[256px] overflow-hidden rounded-lg">
        <Image
          fill
          className="w-full object-cover"
          src="/assets/images/avatar.png"
          alt=""
        />
      </div>
      <h2 className="text-xl font-bold text-center">Your Name</h2>
      <span className="text-neutral-400 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
      <div className="flex flex-row items-center justify-between">
        <button className="h-10 w-10">
          <GlobeAltIcon />
        </button>
        <button className="h-10 w-10">
          <InboxIcon />
        </button>
      </div>
    </div>
  );
};

export default AuthorCard;
