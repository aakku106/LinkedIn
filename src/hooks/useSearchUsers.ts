import { useEffect, useState } from "react";

export interface SearchUser {
  id: { value: string };
  name: { first: string; last: string };
  picture: { large: string };
  email: string;
  location: { city: string; country: string };
}

const STORAGE_KEY = "cached_random_users";

export const useSearchUsers = () => {
  const [users, setUsers] = useState<SearchUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      // Checking sessionStorage
      const cached = sessionStorage.getItem(STORAGE_KEY);
      // Paila fetch bhako raixa bhani cached empty hunna
      if (cached) {
        try {
          setUsers(JSON.parse(cached));
          return; // yo chynxa natra recursive call bhayara code fatxa
        } catch (e) {
          console.error("Failed to parse cached users:", e);
        }
      }

      //Paila fetch na bhakay bhayyay fetch garni ani set item han dini
      try {
        setLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        setUsers(data.results);
        // Store in sessionStorage for future use
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data.results));
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to fetch users";
        setError(message);
        console.error("Failed to fetch users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const clearCache = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setUsers([]);
  };

  return { users, loading, error, clearCache };
};
