import type { User, Post } from "../lib/db";
import { db } from "../lib/db";
import { useAuthStore } from "../features/auth/authStore";

interface PostCardProps {
  post: Post;
  author?: User;
}

export function PostCard({ post, author }: PostCardProps) {
  const userId = useAuthStore((state) => state.userId);
  const liked =
    typeof userId === "number" && (post.likedByUserIds ?? []).includes(userId);
  const likeCount = post.likeCount ?? 0;

  const postTime = new Date(post.createdAt).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-black shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white">
      <div className="flex items-start gap-3 px-4 pt-4">
        <img
          src={author?.profilePic}
          alt={author?.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{author?.name}</p>
              <p className="truncate text-xs text-gray-600 dark:text-gray-400">
                {author?.headline}
              </p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                {postTime}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-900"
                aria-label="More options">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-600 dark:text-gray-400">
                  <path
                    d="M3.25 8C3.25 8.69 2.69 9.25 2 9.25C1.31 9.25 0.75 8.69 0.75 8C0.75 7.31 1.31 6.75 2 6.75C2.69 6.75 3.25 7.31 3.25 8ZM14 6.75C13.31 6.75 12.75 7.31 12.75 8C12.75 8.69 13.31 9.25 14 9.25C14.69 9.25 15.25 8.69 15.25 8C15.25 7.31 14.69 6.75 14 6.75ZM8 6.75C7.31 6.75 6.75 7.31 6.75 8C6.75 8.69 7.31 9.25 8 9.25C8.69 9.25 9.25 8.69 9.25 8C9.25 7.31 8.69 6.75 8 6.75Z"
                    fill="currentColor"></path>
                </svg>
              </button>
              <button
                type="button"
                className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-900"
                aria-label="Dismiss post">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-600 dark:text-gray-400">
                  <path
                    d="M13.78 12.72C14.07 13.01 14.07 13.49 13.78 13.78C13.63 13.93 13.44 14 13.25 14C13.06 14 12.87 13.93 12.72 13.78L8 9.06L3.28 13.78C3.13 13.93 2.94 14 2.75 14C2.56 14 2.37 13.93 2.22 13.78C1.93 13.49 1.93 13.01 2.22 12.72L6.94 8L2.22 3.28C1.93 2.99 1.93 2.51 2.22 2.22C2.51 1.93 2.99 1.93 3.28 2.22L8 6.94L12.72 2.22C13.01 1.93 13.49 1.93 13.78 2.22C14.07 2.51 14.07 2.99 13.78 3.28L9.06 8L13.78 12.72Z"
                    fill="currentColor"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-3 pt-3">
        <p className="whitespace-pre-wrap text-sm leading-6 text-slate-900 dark:text-blue-100">
          {post.content}
        </p>
      </div>

      {post.image ?
        <img
          src={post.image}
          alt="Post attachment"
          loading="lazy"
          className="max-h-128 w-full object-cover"
        />
      : null}

      <div className="flex items-center justify-between border-t border-gray-200 px-4 py-2 text-xs text-gray-600 dark:border-gray-800 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              fill="currentColor"
              width="10"
              height="10">
              <path d="M12.91 7l-2.25-2.57a8.21 8.21 0 01-1.5-2.55L9 1.37A2.08 2.08 0 007 0a2.08 2.08 0 00-2.06 2.08v1.17a5.81 5.81 0 00.31 1.89l.28.86H2.38A1.47 1.47 0 001 7.47a1.45 1.45 0 00.64 1.21 1.48 1.48 0 00-.37 2.06 1.54 1.54 0 00.62.51h.05a1.6 1.6 0 00-.19.71A1.47 1.47 0 003 13.42v.1A1.46 1.46 0 004.4 15h4.83a5.61 5.61 0 002.48-.58l1-.42H14V7zM12 12.11l-1.19.52a3.59 3.59 0 01-1.58.37H5.1a.55.55 0 01-.53-.4l-.14-.48-.49-.21a.56.56 0 01-.34-.6l.09-.56-.42-.42a.56.56 0 01-.09-.68L3.55 9l-.4-.61A.28.28 0 013.3 8h5L7.14 4.51a4.15 4.15 0 01-.2-1.26V2.08A.09.09 0 017 2a.11.11 0 01.08 0l.18.51a10 10 0 001.9 3.24l2.84 3z"></path>
            </svg>
          </span>
          <span>{likeCount} likes</span>
        </div>
      </div>

      <div className="flex border-t border-gray-200 px-2 py-2 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
        <button
          type="button"
          onClick={async () => {
            if (typeof post.id !== "number" || typeof userId !== "number")
              return;

            const currentLikedByUserIds = post.likedByUserIds ?? [];
            const nextLiked = !liked;
            const nextLikedByUserIds =
              nextLiked ?
                [...new Set([...currentLikedByUserIds, userId])]
              : currentLikedByUserIds.filter((id) => id !== userId);
            const nextLikeCount = nextLikedByUserIds.length;

            await db.posts.update(post.id, {
              likedByUserIds: nextLikedByUserIds,
              likeCount: nextLikeCount,
            });
          }}
          aria-pressed={liked}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-3 py-2 min-w-0 ${liked ? "text-blue-600" : ""} hover:bg-gray-100 dark:hover:bg-gray-900`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="thumbs-up-outline-small"
            aria-hidden="true"
            role="none"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16">
            <path d="M12.91 7l-2.25-2.57a8.21 8.21 0 01-1.5-2.55L9 1.37A2.08 2.08 0 007 0a2.08 2.08 0 00-2.06 2.08v1.17a5.81 5.81 0 00.31 1.89l.28.86H2.38A1.47 1.47 0 001 7.47a1.45 1.45 0 00.64 1.21 1.48 1.48 0 00-.37 2.06 1.54 1.54 0 00.62.51h.05a1.6 1.6 0 00-.19.71A1.47 1.47 0 003 13.42v.1A1.46 1.46 0 004.4 15h4.83a5.61 5.61 0 002.48-.58l1-.42H14V7zM12 12.11l-1.19.52a3.59 3.59 0 01-1.58.37H5.1a.55.55 0 01-.53-.4l-.14-.48-.49-.21a.56.56 0 01-.34-.6l.09-.56-.42-.42a.56.56 0 01-.09-.68L3.55 9l-.4-.61A.28.28 0 013.3 8h5L7.14 4.51a4.15 4.15 0 01-.2-1.26V2.08A.09.09 0 017 2a.11.11 0 01.08 0l.18.51a10 10 0 001.9 3.24l2.84 3z"></path>
          </svg>
          <span className="hidden sm:inline">Like</span>
        </button>
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 min-w-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="comment-small"
            aria-hidden="true"
            role="none"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16">
            <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
          </svg>
          <span className="hidden sm:inline">Comment</span>
        </button>
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 min-w-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="repost-small"
            aria-hidden="true"
            role="none"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16">
            <path d="M4 10H2V5c0-1.66 1.34-3 3-3h3.85L7.42 0h2.44L12 3 9.86 6H7.42l1.43-2H5c-.55 0-1 .45-1 1v5zm8-4v5c0 .55-.45 1-1 1H7.15l1.43-2H6.14L4 13l2.14 3h2.44l-1.43-2H11c1.66 0 3-1.34 3-3V6h-2z"></path>
          </svg>
          <span className="hidden sm:inline">Repost</span>
        </button>
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 min-w-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="send-privately-small"
            aria-hidden="true"
            role="none"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16">
            <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
          </svg>
          <span className="hidden sm:inline">Send</span>
        </button>
      </div>
    </article>
  );
}
