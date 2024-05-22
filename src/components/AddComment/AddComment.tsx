/**
 * When the component has it's own state, it can not be a Server Component anymore.
 * Therefore, we declare it as a part of the client bundle.
 */
"use client";

import { useState } from "react";

const AddComment = () => {
  const [comment, setComment] = useState("");

  const handleOnTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const onSubmitComment = async () => {
    const response = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });
    console.log(response);
  };

  return (
    <div className="flex flex-col w-full">
      <label>Write your comment:</label>
      <textarea
        value={comment}
        onChange={handleOnTextAreaChange}
        cols={30}
        rows={5}
        className="border border-gray-200"
      ></textarea>
      <button
        onClick={onSubmitComment}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default AddComment;
