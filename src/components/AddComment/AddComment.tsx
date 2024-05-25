/**
 * When the component has it's own state, it can not be a Server Component anymore.
 * Therefore, we declare it as a part of the client bundle.
 */
"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useState, useTransition } from "react";

const AddComment = () => {
  const queryClient = useQueryClient();

  const [comment, setComment] = useState("");
  /**
   * A transition defines a process that won't block the UI during the render.
   * This means, even running the request to publish a comment the user is still able
   * to navigate in the UI (clicking in other actions as well as navigating to a different route / component).
   */
  const [isSubmitting, startSubmit] = useTransition();

  const handleOnTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const onSubmitComment = async () => {
    startSubmit(async () => {
      await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment }),
      });

      await queryClient.invalidateQueries({ queryKey: ["comments"] });
    });
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
        disabled={isSubmitting}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
      >
        {isSubmitting ? "Publishing..." : "Publish Comment"}
      </button>
    </div>
  );
};

export default AddComment;
