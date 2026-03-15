import { useState } from "react";
import profilePic from "../assets/images/profile-pic.jpeg";
import { createPost } from "../features/feed/CreatePost";
import { Posts } from "./Posts";
import { ProfileTop } from "./ProfileTop";

function IconSlot() {
  return (
    <span
      aria-hidden="true"
      className="h-5 w-5 rounded-md border border-dashed border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800"
    />
  );
}

export default function Feed() {
  const [draft, setDraft] = useState("");

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-4 px-2 py-4 font-sans sm:px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[16rem_minmax(0,1fr)_19rem]">
      <aside className="order-2 self-start space-y-4 xl:col-start-1 xl:row-start-1 xl:sticky xl:top-24">
        <ProfileTop />

        <section className="rounded-2xl border border-black/8 bg-white p-4 text-gray-900 shadow-sm dark:border-white/10 dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
              <div>
                <p className="text-sm font-semibold">Profile viewers</p>
              </div>
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300">
                28
              </p>
            </a>
            <a
              href="#"
              className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
              <div>
                <p className="text-sm font-semibold">Post impressions</p>
              </div>
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300">
                5
              </p>
            </a>
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-4 text-gray-900 shadow-sm dark:border-white/10 dark:bg-gray-900 dark:text-gray-100">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Access exclusive tools & insights
          </p>
          <div className="mt-3 flex items-center gap-3 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="premium-chip-v2-medium"
              aria-hidden="true"
              role="none"
              data-supported-dps="24x24"
              width="24"
              height="24">
              <path
                d="M20.01 20.01c.63-.63.99-1.48.99-2.38V6.38C21 4.51 19.49 3 17.62 3H6.38c-.9 0-1.75.36-2.38.99l16.02 16.02z"
                fill="#e7a33e"></path>
              <path
                d="M3.99 3.99C3.36 4.62 3 5.48 3 6.38v11.25c0 1.87 1.51 3.38 3.38 3.38h11.25c.9 0 1.75-.36 2.38-.99L3.99 3.99z"
                fill="#c37d16"></path>
            </svg>
            <span>Try sales nav for free</span>
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-3 text-gray-900 shadow-sm dark:border-white/10 dark:bg-gray-900 dark:text-gray-100">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="bookmark-fill-small"
              aria-hidden="true"
              role="none"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16">
              <path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"></path>
            </svg>
            <span>Saved items</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="group-small"
              aria-hidden="true"
              role="none"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16">
              <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
              <circle cx="8" cy="4" r="2"></circle>
              <circle cx="12.5" cy="5.5" r="1.5"></circle>
              <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
              <circle cx="3.5" cy="5.5" r="1.5"></circle>
            </svg>
            <span>Groups</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="newspaper-small"
              aria-hidden="true"
              role="none"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16">
              <path d="M13 4v8H3V4h10m2-2H1v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2zm-3 3H4v2h8V5zM7 8H4v3h3V8zm5 0H8v1h4V8zm0 2H8v1h4v-1z"></path>
            </svg>
            <span>Newsletters</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="calendar-small"
              aria-hidden="true"
              role="none"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16">
              <path d="M2 2v9a3 3 0 003 3h6a3 3 0 003-3V2zm8.5 1.5a1 1 0 11-1 1 1 1 0 011-1zm-5 0a1 1 0 11-1 1 1 1 0 011-1zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V7h8z"></path>
            </svg>
            <span>Events</span>
          </button>
        </section>
      </aside>

      <section className="order-1 min-w-0 space-y-4 xl:col-start-2 xl:row-start-1">
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const content = draft.trim();
            if (!content) return;
            await createPost(content, 1);
            setDraft("");
          }}
          className="rounded-2xl border border-black/8 bg-white p-4 text-gray-900 shadow-sm dark:border-white/10 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex items-start gap-3">
            <img
              src={profilePic}
              alt="Adarasha Gaihre"
              className="h-12 w-12 rounded-full object-cover"
            />
            <textarea
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              rows={2}
              placeholder="Start a post"
              className="min-h-24 flex-1 resize-none rounded-3xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-500 hover:bg-gray-50 focus:border-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400 dark:hover:bg-gray-800"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              {["Video", "Photo", "Write article"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <IconSlot />
                  <span>{item}</span>
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={!draft.trim()}
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-700">
              Post
            </button>
          </div>
        </form>

        <div className="flex items-center gap-3 px-1 text-sm text-gray-500 dark:text-gray-400">
          <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
          <span>Sort by: Top</span>
        </div>

        <Posts />
      </section>

      <aside className="order-3 self-start space-y-4 xl:col-start-3 xl:row-start-1 xl:sticky xl:top-24">
        <section className="rounded-2xl border border-black/8 bg-white p-4 text-gray-900 shadow-sm dark:border-white/10 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-semibold">Add to your feed</h2>
            <IconSlot />
          </div>

          <div className="mt-4 space-y-4">
            {[
              "Frontend Developer Circle",
              "React Nepal",
              "Campus Community",
            ].map((name, index) => (
              <div key={name} className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{name}</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Suggested for you
                  </p>
                  <button
                    type="button"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 text-sm font-medium hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      id="add-small"
                      aria-hidden="true"
                      role="none"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16">
                      <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                    </svg>
                    <span>Follow</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-4 text-gray-900 shadow-sm dark:border-white/10 dark:bg-gray-900 dark:text-gray-100">
          <h2 className="text-base font-semibold">Trending now</h2>
          <div className="mt-4 space-y-3">
            {[
              "Frontend hiring in Nepal",
              "React 19 patterns",
              "Internship season",
            ].map((topic, index) => (
              <button
                key={topic}
                type="button"
                className="block w-full rounded-xl px-2 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {index + 1} in your network
                </p>
                <p className="mt-1 text-sm font-medium">{topic}</p>
              </button>
            ))}
          </div>
        </section>
      </aside>
    </div>
  );
}
