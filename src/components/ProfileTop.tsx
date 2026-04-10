import nepathyaColzLogo from "../assets/images/nepathya-logo.jpeg";
import "../assets/styles/profileTop.css";
import type { User } from "../lib/db";

interface ProfileTopProps {
  user: User;
}

export const ProfileTop = ({ user }: ProfileTopProps) => {
  return (
    <div
      className="profile-container flex flex-col
bg-white dark:bg-gray-950 dark:text-white
rounded-2xl w-full">
      <div className="relative">
        <img
          src={user.coverPic}
          className="w-full rounded-t-2xl aspect-4/1 object-cover"
          alt={`${user.name} Cover Picture`}
          loading="lazy"
        />
        <div className="absolute bottom-0 left-4 sm:left-8 translate-y-1/2 sm:border-4 border-3 border-white dark:border-black rounded-full">
          <img
            src={user.profilePic}
            className="rounded-full w-24 sm:w-36 aspect-square object-cover"
            alt={`${user.name} profile picture`}
            loading="lazy"
          />
        </div>
      </div>

      <div className="px-4 sm:px-8 pb-4 pt-14 sm:pt-20">
        <div className="flex justify-between flex-wrap gap-2">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            {user.name}
          </h1>
          <div className="flex flex-wrap items-center-safe gap-4">
            <img
              src={nepathyaColzLogo}
              height="24"
              width="34"
              className="bio_clzLogo"
              loading="lazy"
            />
            <span className="text-black dark:text-white">{user.school}</span>
          </div>
        </div>
        <div className="mt-2 text-black dark:text-white">{user.headline}</div>
        <div className="flex flex-row flex-wrap gap-4 mt-1">
          <span className="text-black dark:text-white">{user.location}</span>
          <li className="text-blue-800 dark:text-blue-400 hover:cursor-pointer">
            Contact info
          </li>
        </div>
        <div className="connections mt-3">
          <a className="text-blue-800 dark:text-blue-400 hover:cursor-pointer">
            {user.connections} Connections
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white">
            Open to
          </button>
          <button className="text-black dark:text-white">Add section</button>
          <button className="text-black dark:text-white">
            Enhance profile
          </button>
          <button
            style={{
              border: "1px solid white",
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              data-supported-dps="16x16"
              viewBox="0 0 16 16"
              data-token-id="342"
              width="16"
              height="16"
              role="img"
              aria-hidden="true">
              <path d="M3 9.5A1.5 1.5 0 1 1 4.5 8 1.5 1.5 0 0 1 3 9.5M11.5 8A1.5 1.5 0 1 0 13 6.5 1.5 1.5 0 0 0 11.5 8m-5 0A1.5 1.5 0 1 0 8 6.5 1.5 1.5 0 0 0 6.5 8" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 flex flex-col rounded-2xl p-4 bg-gray-100 dark:bg-gray-900 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
            <div className="text-black dark:text-white">Open to work</div>
            <div className="text-black dark:text-white">
              Web Developer, Js Developer, and ...{" "}
            </div>
            <a className="text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
              Show details
            </a>
          </div>
          <div className="flex-1 flex flex-col rounded-2xl p-4 bg-gray-100 dark:bg-gray-900 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
            <div className="text-black dark:text-white">Open to Volunteer</div>
            <div className="text-black dark:text-white">
              Education, Community import
            </div>
            <a className="text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
              Show details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
