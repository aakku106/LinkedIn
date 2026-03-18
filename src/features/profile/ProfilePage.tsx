import { useEffect, useState } from "react";
import { db, type User } from "../../lib/db";
import { ProfileTop } from "../../components/ProfileTop";
import { useAuthStore } from "../auth/authStore";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const userId = useAuthStore((state) => state.userId);

  useEffect(() => {
    document.title = "Profile | LinkedIn Clone | By Adarasha Gaihre";

    let isMounted = true;

    const loadUser = async () => {
      if (typeof userId !== "number") {
        if (isMounted) setUser(null);
        return;
      }

      const currentUser = await db.users.get(userId);
      if (isMounted) {
        setUser(currentUser || null);
      }
    };

    loadUser();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  if (!user) {
    return (
      <section className="w-full px-2 sm:px-20 md:px-30 lg:px-70 py-4">
        <div className="mx-auto w-full max-w-5xl text-center text-gray-600 dark:text-gray-400">
          Loading profile...
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#cdc9be26] px-2 sm:px-20 md:px-30 lg:px-70 py-4">
      <div className="mx-auto w-full max-w-5xl">
        <ProfileTop user={user} />
      </div>
    </section>
  );
}
