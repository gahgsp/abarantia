"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

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
  console.log(comments);

  return (
    <section>
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
    </section>
  );
};

export default CommentsList;
