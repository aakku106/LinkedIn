import type { User } from "../lib/db";
import { usePosts } from "../features/feed/usePosts";
import { PostCard } from "./PostCard";

interface PostsProps {
  user: User;
}

export const Posts = ({ user }: PostsProps) => {
  const posts = usePosts();

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
      {posts.map((post) => (
        <PostCard key={post.id} user={user} post={post} />
      ))}
    </div>
  );
};
