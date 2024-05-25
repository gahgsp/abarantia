"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

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
        <Suspense fallback={<span>Loading...</span>}>
          <ul>
            {comments.map((comment: any) => (
              <>
                <li key={`${comment.id}-${comment.author}`}>
                  <h3>{comment.content}</h3>
                  <span>{comment.author}</span>
                </li>
                <hr />
              </>
            ))}
          </ul>
        </Suspense>
      </div>
    </section>
  );
};

export default CommentsList;
