import { useSearchUsers } from "../../hooks/useSearchUsers";
import { useEffect } from "react";
import Notifications from "../../components/Notifications";

export default function NotificationPage() {
  const { users, loading, error } = useSearchUsers();

  useEffect(() => {
    document.title = "Notifications | LinkedIn Clone | By Adarasha Gaihre";
  }, []);

  return (
    <section className="min-h-screen bg-[#cdc9be26] dark:bg-black">
      <Notifications users={users} loading={loading} error={error} />
    </section>
  );
}
