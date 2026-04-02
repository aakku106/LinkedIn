import type { SearchUser } from "../hooks/useSearchUsers";

interface NotificationsProps {
  users: SearchUser[];
  loading: boolean;
  error: string | null;
}

const tabs = ["All", "Jobs", "My posts", "Mentions"];
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

function getNotificationText(user: SearchUser, index: number) {
  const fullName = `${user.name.first} ${user.name.last}`;
  const role = index % 2 === 0 ? "web developer" : "javascript developer";
  const region = index % 3 === 0 ? "Nepal" : "Asia";

  if (index % 3 === 0) {
    return {
      primary: `${role}: new opportunities in ${region}.`,
      secondary: `${fullName} and similar profiles are active around ${user.location.city}, ${user.location.country}.`,
      cta: "View jobs",
    };
  }

  if (index % 3 === 1) {
    return {
      primary: `${fullName} posted an update you might be interested in.`,
      secondary: `Discover more pages and creators around ${user.location.city}.`,
      cta: null,
    };
  }

  return {
    primary: `New message opportunities are available from ${fullName}.`,
    secondary: `Open requests from ${user.location.city}, ${user.location.country}.`,
    cta: "Respond",
  };
}

export default function Notifications({
  users,
  loading,
  error,
}: NotificationsProps) {
  const hasNotifications = users.length > 0;

  return (
    <section className="mx-auto w-full max-w-5xl space-y-4 px-2 py-4 sm:px-4 md:px-6">
      <section className="rounded-2xl border border-slate-700/60 bg-linear-to-r from-slate-900 to-slate-800 p-4">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={
                index === 0 ?
                  "rounded-full border border-emerald-300 bg-emerald-400 px-5 py-2 text-lg font-semibold text-slate-900"
                : "rounded-full border border-slate-500 px-5 py-2 text-lg font-semibold text-slate-200 hover:border-slate-300"
              }>
              {tab}
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
          <div className="p-6 text-slate-200">No notifications found.</div>
        )}

        {!loading && !error && hasNotifications && (
          <ul>
            {users.map((user, index) => {
              const details = getNotificationText(user, index);
              const time = timeLabels[index % timeLabels.length];
              const displayName = `${user.name.first} ${user.name.last}`;
              const avatarKey = user.id.value || `${user.email}-${index}`;

              return (
                <li
                  key={avatarKey}
                  className="flex items-start gap-4 border-t border-[#3f5f82] p-4 first:border-t-0 sm:p-6">
                  <div className="mt-5 h-3 w-3 shrink-0 rounded-full bg-sky-300" />

                  <img
                    src={user.picture.large}
                    alt={displayName}
                    className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-xl leading-snug text-slate-100">
                      <span className="font-semibold">{details.primary}</span>
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      {details.secondary}
                    </p>

                    {details.cta && (
                      <button
                        type="button"
                        className="mt-3 rounded-full border border-sky-400 px-5 py-1.5 text-xl font-semibold text-sky-300 hover:bg-sky-400/10">
                        {details.cta}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-4 pl-2 text-slate-300">
                    <span className="text-3xl leading-none">...</span>
                    <span className="text-2xl font-semibold">{time}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </section>
  );
}
