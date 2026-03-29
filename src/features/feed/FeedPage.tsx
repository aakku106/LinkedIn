import { useEffect, useState } from "react";
import { db, type User } from "../../lib/db";
import { useAuthStore } from "../auth/authStore";
import Feed from "../../components/Feed";

export default function FeedPage() {
  const [user, setUser] = useState<User | null>(null);
  const userId = useAuthStore((state) => state.userId);

  useEffect(() => {
    document.title = "Feed | LinkedIn Clone | By Adarasha Gaihre";
    let isMounted = true;

    const loadUser = async () => {
      if (typeof userId !== "number") {
        if (isMounted) setUser(null);
        return;
      }

      const currentUser = await db.users.get(userId);
      if (isMounted) setUser(currentUser || null);
    };

    loadUser();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  if (!user)
    return (
      <section className="min-h-screen bg-[#f3f2ef] dark:bg-black">
        <div className="flex items-center justify-center h-screen text-gray-600 dark:text-gray-400">
          Loading...
        </div>
      </section>
    );

  return (
    <section className="min-h-screen bg-[#cdc9be26] dark:bg-black">
      <Feed user={user} />
    </section>
  );
}
