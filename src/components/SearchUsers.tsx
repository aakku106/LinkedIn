import { useState } from "react";
import { useSearchUsers } from "../hooks/useSearchUsers";

export const SearchUsers = () => {
  const { users, loading } = useSearchUsers();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers =
    searchTerm.trim() === "" ?
      []
    : users.filter(
        (user) =>
          user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()),
      );

  const showResults = searchTerm.trim() !== "" && filteredUsers.length > 0;

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full outline-none border rounded-full p-2.5 text-black dark:text-white dark:bg-gray-800 bg-white"
      />

      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg max-h-64 overflow-y-auto z-40">
          {loading ?
            <div className="p-4 text-gray-500">Loading...</div>
          : filteredUsers.length > 0 ?
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredUsers.map((user) => (
                <li
                  key={user.id.value}
                  className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.picture.large}
                      alt={`${user.name.first} ${user.name.last}`}
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-black dark:text-white truncate">
                        {user.name.first} {user.name.last}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                        {user.location.city}, {user.location.country}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          : <div className="p-4 text-gray-500 text-sm">No users found</div>}
        </div>
      )}
    </div>
  );
};
