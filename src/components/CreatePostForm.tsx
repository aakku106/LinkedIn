import { useState } from "react";
import { createPost } from "../features/feed/CreatePost";
import type { User } from "../lib/db";

interface CreatePostProps {
  user: User;
}

export function CreatePostForm({ user }: CreatePostProps) {
  const [draft, setDraft] = useState("");

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const content = draft.trim();
        if (!content || typeof user.id !== "number") return;
        await createPost(content, user.id);
        setDraft("");
      }}
      className="rounded-2xl border border-gray-200 bg-white p-4 text-black shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white">
      <div className="flex items-start gap-3">
        <img
          src={user.profilePic}
          alt={user.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover"
        />
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          rows={2}
          placeholder="Start a post"
          className="min-h-24 flex-1 resize-none rounded-3xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-600 hover:bg-gray-50 focus:border-gray-400 dark:border-gray-600 dark:bg-gray-900 dark:placeholder:text-gray-400 dark:hover:bg-gray-800"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="video-medium"
              aria-hidden="true"
              role="none"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24">
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            <span>Video</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="image-medium"
              aria-hidden="true"
              role="none"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24">
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            <span>Photo</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="content-align-left-medium"
              aria-hidden="true"
              role="none"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24">
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            <span>Write article</span>
          </button>
        </div>

        <button
          type="submit"
          disabled={!draft.trim()}
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-700">
          Post
        </button>
      </div>
    </form>
  );
}
