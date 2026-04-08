import { useState } from "react";
import { ProfileCard } from "./LeftSidebar";
import type { User } from "../lib/db";

export type NotificationType = "jobs" | "my-posts" | "mentions";

export interface NotificationViewItem {
  id: string;
  type: NotificationType;
  avatar: string;
  displayName: string;
  time: string;
  primary: string;
  secondary: string;
  cta: string | null;
}

interface NotificationsProps {
  user: User;
  notifications: NotificationViewItem[];
  loading: boolean;
  error: string | null;
}

const tabs: Array<{ id: NotificationType | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "jobs", label: "Jobs" },
  { id: "my-posts", label: "My posts" },
  { id: "mentions", label: "Mentions" },
];

function NotificationLeftSidebar({ user }: { user: User }) {
  return (
    <aside className="hidden xl:block space-y-3 self-start">
      <ProfileCard user={user} />

      <section className="rounded-2xl border border-slate-700/60 bg-linear-to-r from-slate-900 to-slate-800 p-6 text-slate-100 shadow-sm">
        <h2 className="text-5xl/12 font-semibold tracking-tight">
          Manage your notifications
        </h2>
        <button
          type="button"
          className="mt-6 text-4xl font-semibold text-sky-300 hover:text-sky-200">
          View settings
        </button>
      </section>
    </aside>
  );
}

export default function Notifications({
  user,
  notifications,
  loading,
  error,
}: NotificationsProps) {
  const [activeTab, setActiveTab] = useState<NotificationType | "all">("all");

  const filteredNotifications =
    activeTab === "all" ? notifications : (
      notifications.filter((item) => item.type === activeTab)
    );

  const hasNotifications = filteredNotifications.length > 0;

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-4 px-2 py-4 sm:px-4 md:px-6 xl:grid-cols-[20rem_minmax(0,1fr)]">
      <NotificationLeftSidebar user={user} />

      <div className="space-y-4">
        <section className="rounded-2xl border border-slate-700/60 bg-linear-to-r from-slate-900 to-slate-800 p-4">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={
                  activeTab === tab.id ?
                    "rounded-full border border-emerald-300 bg-emerald-400 px-5 py-2 text-lg font-semibold text-slate-900"
                  : "rounded-full border border-slate-500 px-5 py-2 text-lg font-semibold text-slate-200 hover:border-slate-300"
                }>
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-[#3f5f82] bg-[#254362] shadow-xl">
          {loading && (
            <div className="p-6 text-slate-200">Loading notifications...</div>
          )}
          {!loading && error && (
            <div className="p-6 text-red-200">
              Failed to load notifications: {error}
            </div>
          )}
          {!loading && !error && !hasNotifications && (
            <div className="p-6 text-slate-200">
              No notifications found for this tab.
            </div>
          )}

          {!loading && !error && hasNotifications && (
            <ul>
              {filteredNotifications.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-4 border-t border-[#3f5f82] p-4 first:border-t-0 sm:p-6">
                  <div className="mt-5 h-3 w-3 shrink-0 rounded-full bg-sky-300" />

                  <img
                    src={item.avatar}
                    alt={item.displayName}
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-xl leading-snug text-slate-100">
                      <span className="font-semibold">{item.primary}</span>
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      {item.secondary}
                    </p>

                    {item.cta && (
                      <button
                        type="button"
                        className="mt-3 rounded-full border border-sky-400 px-5 py-1.5 text-xl font-semibold text-sky-300 hover:bg-sky-400/10">
                        {item.cta}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-4 pl-2 text-slate-300">
                    <span className="text-3xl leading-none">...</span>
                    <span className="text-2xl font-semibold">{item.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </section>
  );
}
