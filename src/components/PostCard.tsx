import profilePic from "../assets/images/profile-pic.jpeg";

function ActionPlaceholder() {
  return (
    <span
      aria-hidden="true"
      className="h-4 w-4 rounded border border-dashed border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-800"
    />
  );
}

export function PostCard({
  post,
}: {
  post: { id?: number; content: string; image?: string; randomTime?: string };
}) {
  const randomTime = post.randomTime || "now";

  return (
    <article className="overflow-hidden rounded-2xl border border-black/8 bg-white text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-100">
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
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                Javascript Developer at Nepathya College
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {randomTime}
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
        <p className="whitespace-pre-wrap text-sm leading-6 text-slate-700 dark:text-slate-200">
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

      <div className="grid grid-cols-2 gap-1 border-t border-slate-200 px-2 py-2 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300 sm:grid-cols-4">
        {["Like", "Comment", "Repost", "Send"].map((label) => (
          <button
            key={label}
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            <ActionPlaceholder />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </article>
  );
}
