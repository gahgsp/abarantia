/**
 * When the component has it's own state or listents to user actions, it can not be a Server Component anymore.
 * Therefore, we declare it as a part of the client bundle.
 */
"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

const CommentsList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const response = await fetch("/api/comment");
      const { comments } = await response.json();
      return comments;
    },
  });

  const { comments } = data;

  return (
    <section>
      <div className="flex items-center justify-center text-lg text-slate-800">
        <h2>Comments</h2>
      </div>
      <div className="py-4 px-4">
        <ul>
          {comments.map((comment: any) => (
            <React.Fragment key={`${comment.id}-${comment.author}`}>
              <li>
                <h3>{comment.content}</h3>
                <span>{comment.author}</span>
              </li>
              <hr />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CommentsList;
