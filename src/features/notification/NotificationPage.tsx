import { useEffect, useState } from "react";
import Notifications, {
  type NotificationType,
  type NotificationViewItem,
} from "../../components/Notifications";
import { db, type User } from "../../lib/db";
import { useSearchUsers } from "../../hooks/useSearchUsers";
import { useAuthStore } from "../auth/authStore";

const timeLabels = [
  "1h",
  "2h",
  "3h",
  "4h",
  "12h",
  "13h",
  "17h",
  "21h",
  "1d",
  "2d",
];

export default function NotificationPage() {
  const [user, setUser] = useState<User | null>(null);
  const userId = useAuthStore((state) => state.userId);
  const { users, loading, error } = useSearchUsers();

  useEffect(() => {
    document.title = "Notifications | LinkedIn Clone | By Adarasha Gaihre";
  }, []);

  useEffect(() => {
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
        <div className="flex h-screen items-center justify-center text-gray-600 dark:text-gray-400">
          Loading...
        </div>
      </section>
    );

  const notifications: NotificationViewItem[] = users.map((user, index) => {
    const remainder = index % 3;
    const type: NotificationType =
      remainder === 0 ? "jobs"
      : remainder === 1 ? "my-posts"
      : "mentions";

    const fullName = `${user.name.first} ${user.name.last}`;
    const role = index % 2 === 0 ? "web developer" : "javascript developer";
    const region = index % 3 === 0 ? "Nepal" : "Asia";

    const primary =
      type === "jobs" ? `${role}: new opportunities in ${region}.`
      : type === "my-posts" ?
        `${fullName} posted an update you might be interested in.`
      : `New message opportunities are available from ${fullName}.`;

    const secondary =
      type === "jobs" ?
        `${fullName} and similar profiles are active around ${user.location.city}, ${user.location.country}.`
      : type === "my-posts" ?
        `Discover more pages and creators around ${user.location.city}.`
      : `Open requests from ${user.location.city}, ${user.location.country}.`;

    const cta =
      type === "jobs" ? "View jobs"
      : type === "mentions" ? "Respond"
      : null;

    return {
      id: user.id.value || `${user.email}-${index}`,
      type,
      avatar: user.picture.large,
      displayName: fullName,
      time: timeLabels[index % timeLabels.length],
      primary,
      secondary,
      cta,
    };
  });

  return (
    <section className="min-h-screen bg-[#cdc9be26] dark:bg-black">
      <Notifications
        user={user}
        notifications={notifications}
        loading={loading}
        error={error}
      />
    </section>
  );
}
