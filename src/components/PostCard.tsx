import profilePic from "../assets/images/profile-pic.jpeg";

function ActionPlaceholder() {
  return (
    <span
      aria-hidden="true"
      className="h-4 w-4 rounded border border-dashed border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800"
    />
  );
}

export function PostCard({
  post,
}: {
  post: { id?: number; content: string; image?: string; createdAt: number };
}) {
  const postTime = new Date(post.createdAt).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-start gap-3 px-4 pt-4">
        <img
          src={profilePic}
          alt="Adarasha Gaihre"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Adarasha Gaihre</p>
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                Javascript Developer at Nepathya College
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {postTime}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <ActionPlaceholder />
              <ActionPlaceholder />
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
          className="max-h-128 w-full object-cover"
        />
      : null}

      <div className="grid grid-cols-2 gap-1 border-t border-gray-200 px-2 py-2 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300 sm:grid-cols-4">
        {["Like", "Comment", "Repost", "Send"].map((label) => (
          <button
            key={label}
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <ActionPlaceholder />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </article>
  );
}
