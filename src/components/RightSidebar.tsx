export function RightSidebar() {
  return (
    <aside className="order-3 self-start space-y-4 xl:col-start-3 xl:row-start-1 xl:sticky xl:top-5">
      <section className="rounded-2xl border border-gray-200 bg-white p-4 text-black shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold">Add to your feed</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            width="16"
            height="16"
            className="text-gray-600 dark:text-gray-400">
            <path d="M9 3H7v6H1v2h6v6h2v-6h6V9H9V3z" />
          </svg>
        </div>

        <div className="mt-4 space-y-4">
          {["Frontend Developer Circle", "React Nepal", "Campus Community"].map(
            (name, index) => (
              <div key={name} className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{name}</p>
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    Suggested for you
                  </p>
                  <button
                    type="button"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 text-sm font-medium hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      id="add-small"
                      aria-hidden="true"
                      role="none"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16">
                      <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                    </svg>
                    <span>Follow</span>
                  </button>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-4 text-black shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white">
        <h2 className="text-base font-semibold">Trending now</h2>
        <div className="mt-4 space-y-3">
          {[
            "Frontend hiring in Nepal",
            "React 19 patterns",
            "Internship season",
          ].map((topic, index) => (
            <button
              key={topic}
              type="button"
              className="block w-full rounded-xl px-2 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-900">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {index + 1} in your network
              </p>
              <p className="mt-1 text-sm font-medium">{topic}</p>
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
}
