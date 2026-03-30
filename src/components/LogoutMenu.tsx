import type { User } from "../lib/db";
import { useAuthStore } from "../features/auth/authStore";
import { NavLink } from "react-router-dom";

interface LogoutMenuProps {
  user: User | null;
}

export const LogoutMenu = ({ user }: LogoutMenuProps) => {
  const { logout } = useAuthStore();

  return (
    <aside className="absolute right-40 top-22 w-80 bg-gray-700 dark:bg-gray-800 border border-gray-700 rounded-lg shadow-xl text-white overflow-hidden z-50">
      <div className="px-6 py-4 border-b border-gray-700">
        <div className="flex gap-4 mb-4">
          <img
            src={user?.profilePic}
            alt={user?.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{user?.name}</h3>
            <p className="text-sm text-gray-400">{user?.headline}</p>
          </div>
        </div>
        <div className="flex gap-3">


          <NavLink to="/profile"
            className={`flex-1 border border-blue-400 text-blue-400 py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-400/10 transition`}
          >
            View profile

          </NavLink>


          <button className="flex-1 bg-blue-400 text-black py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-300 transition">
            Verify
          </button>
        </div>
      </div>

      <div className="px-6 py-4 border-b border-gray-700">
        <h4 className="text-white font-semibold mb-3">Account</h4>
        <ul className="space-y-3 text-sm">
          <li className="text-gray-300 hover:text-white cursor-pointer transition flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-supported-dps="24x24"
              fill="currentColor"
              width="16"
              height="16">
              <path
                d="M20.01 20.01c.63-.63.99-1.48.99-2.38V6.38C21 4.51 19.49 3 17.62 3H6.38c-.9 0-1.75.36-2.38.99l16.02 16.02z"
                fillOpacity="0.5"></path>
              <path
                d="M3.99 3.99C3.36 4.62 3 5.48 3 6.38v11.25c0 1.87 1.51 3.38 3.38 3.38h11.25c.9 0 1.75-.36 2.38-.99L3.99 3.99z"
                fillOpacity="1"></path>
            </svg>
            Get 1 free month of Premium
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer transition">
            Settings & Privacy
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer transition">
            Help
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer transition">
            Language
          </li>
        </ul>
      </div>

      <div className="px-6 py-4 border-b border-gray-700">
        <h4 className="text-white font-semibold mb-3">Manage</h4>
        <ul className="space-y-3 text-sm">
          <li className="text-gray-300 hover:text-white cursor-pointer transition">
            Posts & Activity
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer transition">
            Job Posting Account
          </li>
        </ul>
      </div>

      <div className="px-6 py-4">
        <button
          onClick={() => logout()}
          className="w-full text-gray-300 hover:text-white py-2 text-sm font-semibold transition text-left">
          Sign Out
        </button>
      </div>
    </aside >
  );
};
