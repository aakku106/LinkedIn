import { Link } from "react-router-dom";
import type { User } from "../lib/db";
import nepathyaColzLogo from "../assets/images/nepathya-logo.png";

type UserProp = { user: User };

export function LeftSidebar({ user }: UserProp) {
  return (
    <aside className="order-2 self-start space-y-4 hidden xl:block xl:fixed xl:left-20 xl:top-33  xl:w-64 max-h-[calc(100vh-120px)] overflow-y-auto">
      <ProfileCard user={user} />

      <section className="rounded-2xl border border-gray-200 bg-white p-4 text-black shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white">
        <div className="space-y-3">
          <Link
            to="#"
            className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer">
            <div>
              <p className="text-sm font-semibold">Profile viewers</p>
            </div>
            <p className="text-sm font-bold text-gray-600 dark:text-gray-300">
              106
            </p>
          </Link>
          <Link
            to="#"
            className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer">
            <div>
              <p className="text-sm font-semibold">Post impressions</p>
            </div>
            <p className="text-sm font-bold text-gray-600 dark:text-gray-300">
              5
            </p>
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-4 text-black shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white">
        <p className="text-xs text-gray-600 dark:text-gray-400">
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

      <section className="rounded-2xl border border-gray-200 bg-white p-3 text-black shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white">
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
  );
}

function ProfileCard({ user }: UserProp) {
  return (
    <Link
      to={"/profile"}
      className="rounded-2xl overflow-hidden bg-white  dark:border dark:bg-gray-950 ">
      <div className="relative">
        <img
          src={user.coverPic}
          className="w-full rounded-t-2xl aspect-4/1 object-cover"
          alt="Cover Picture"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-4 translate-y-1/2 border-4 border-white dark:border-gray-950 rounded-full">
          <img
            src={user.profilePic}
            className="rounded-full w-24 aspect-square object-cover"
            alt="Profile picture"
          />
        </div>
      </div>

      <div className="px-4 pb-4 pt-14">
        <p className="text-base font-extrabold text-black dark:text-white">
          {user.name}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {user.headline}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          {user.location}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <img
            src={nepathyaColzLogo}
            alt="Nepathya College"
            className="h-6 w-6 rounded-full"
          />
          <p className="text-xs font-medium text-black dark:text-white">
            {user.school}
          </p>
        </div>
      </div>
    </Link>
  );
}

export { ProfileCard };
