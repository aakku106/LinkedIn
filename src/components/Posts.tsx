import { useEffect, useState } from "react";
import type { User } from "../lib/db";
import { db } from "../lib/db";
import { usePosts } from "../features/feed/usePosts";
import { PostCard } from "./PostCard";

export const Posts = () => {
  const posts = usePosts();
  const [authors, setAuthors] = useState<Map<number, User>>(new Map());

  useEffect(() => {
    if (!posts) return;

    const fetchAuthors = async () => {
      const authorMap = new Map<number, User>();
      for (const post of posts) {
        if (!authorMap.has(post.userId)) {
          const author = await db.users.get(post.userId);
          if (author) {
            authorMap.set(post.userId, author);
          }
        }
      }
      setAuthors(authorMap);
    };

    fetchAuthors();
  }, [posts]);

  if (!posts) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
        Loading feed...
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-600 shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-gray-400">
        No posts yet. Start with your first update.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => {
        const author = authors.get(post.userId);
        return <PostCard key={post.id} post={post} author={author} />;
      })}
    </div>
  );
};
