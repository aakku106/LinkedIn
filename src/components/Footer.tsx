const footerLinks = [
  "About",
  "Accessibility",
  "User Agreement",
  "Privacy Policy",
  "Cookie Policy",
  "Copyright Policy",
  "Brand Policy",
  "Guest Controls",
  "Community Guidelines",
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-[#f3f2ef] px-4 py-4 text-gray-600 dark:border-gray-700 dark:bg-[#121212] dark:text-gray-300">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold">
        <button
          type="button"
          className="group inline-flex items-center gap-1.5 transition hover:cursor-pointer hover:text-sky-500">
          <span className="text-lg font-bold text-black dark:text-gray-100 group-hover:text-sky-500">
            Linked
            <span className="ml-0.5 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-black text-xs font-bold text-white dark:bg-gray-100 dark:text-black group-hover:bg-sky-500 group-hover:text-white">
              in
            </span>
          </span>
          <span className="font-semibold">&copy; 2026</span>
        </button>

        {footerLinks.map((label) => (
          <button
            key={label}
            type="button"
            className="transition hover:cursor-pointer hover:text-sky-500">
            {label}
          </button>
        ))}

        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-sm border border-gray-400 px-2 py-0.5 transition hover:cursor-pointer hover:text-sky-500 dark:border-gray-500">
          Language
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8">
            <path d="M2 5l6 6 6-6" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
