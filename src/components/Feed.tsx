import { useState } from "react";
import nepathyaColzLogo from "../assets/images/nepathya-logo.png";
import profilePic from "../assets/images/profile-pic.jpeg";
import { createPost } from "../features/feed/CreatePost";
import { Posts } from "./Posts";

function IconSlot() {
  return (
    <span
      aria-hidden="true"
      className="h-5 w-5 rounded-md border border-dashed border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-800"
    />
  );
}

export default function Feed() {
  const [draft, setDraft] = useState("");

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-4 px-2 py-4 font-sans sm:px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[16rem_minmax(0,1fr)_19rem]">
      <aside className="order-2 self-start space-y-4 xl:col-start-1 xl:row-start-1 xl:sticky xl:top-24">
        <section className="overflow-hidden rounded-2xl border border-black/8 bg-white text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-100">
          <div className="h-20 bg-linear-to-r from-sky-200 via-blue-200 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-800" />
          <div className="px-4 pb-4">
            <div className="-mt-9 inline-flex rounded-full border-4 border-white dark:border-slate-900">
              <img
                src={profilePic}
                alt="Adarasha Gaihre"
                className="h-18 w-18 rounded-full object-cover"
              />
            </div>
            <div className="mt-3">
              <p className="text-lg font-semibold">Adarasha Gaihre</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Javascript Developer at Nepathya College
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Butwal, Lumbini
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <img
                src={nepathyaColzLogo}
                alt="Nepathya College"
                className="h-5 w-5 rounded-full"
              />
              <span>Nepathya College</span>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-4 text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-100">
          <a className="block text-sm font-medium text-sky-700 dark:text-sky-400">
            View all analytics
          </a>
          <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-800">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Connections
                </p>
                <p className="text-sm font-semibold">Grow your network</p>
              </div>
              <IconSlot />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-4 text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-100">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Access exclusive tools & insights
          </p>
          <div className="mt-3 flex items-center gap-3 font-medium">
            <IconSlot />
            <span>Try Premium for $0</span>
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-3 text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-100">
          {["Saved items", "Groups", "Newsletters", "Events"].map((item) => (
            <button
              key={item}
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
              <IconSlot />
              <span>{item}</span>
            </button>
          ))}
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
          className="rounded-2xl border border-black/8 bg-white p-4 text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-100">
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
              className="min-h-24 flex-1 resize-none rounded-3xl border border-slate-300 px-4 py-3 text-sm outline-none placeholder:text-slate-500 hover:bg-slate-50 focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:hover:bg-slate-800"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              {["Video", "Photo", "Write article"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <IconSlot />
                  <span>{item}</span>
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={!draft.trim()}
              className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-300 dark:disabled:bg-slate-700">
              Post
            </button>
          </div>
        </form>

        <div className="flex items-center gap-3 px-1 text-sm text-slate-500 dark:text-slate-400">
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
          <span>Sort by: Top</span>
        </div>

        <Posts />
      </section>

      <aside className="order-3 self-start space-y-4 xl:col-start-3 xl:row-start-1 xl:sticky xl:top-24">
        <section className="rounded-2xl border border-black/8 bg-white p-4 text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-100">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{name}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Suggested for you
                  </p>
                  <button
                    type="button"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
                    <IconSlot />
                    <span>Follow</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-4 text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-100">
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
                className="block w-full rounded-xl px-2 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400">
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
