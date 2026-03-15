import { usePosts } from "../features/feed/usePosts";
import { PostCard } from "./PostCard";

export const Posts = () => {
  const posts = usePosts();

  if (!posts) {
    return (
      <div className="rounded-2xl border border-black/8 bg-white p-6 text-sm text-slate-500 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-400">
        Loading feed...
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-black/8 bg-white p-6 text-sm text-slate-500 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-400">
        No posts yet. Start with your first update.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
