import type { User } from "../lib/db";
import { Posts } from "./Posts";
import { RightSidebar } from "./RightSidebar";
import { LeftSidebar } from "./LeftSidebar";
import { CreatePostForm } from "./CreatePostForm";

interface FeedProps {
  user: User;
}

export default function Feed({ user }: FeedProps) {
  return (
    <div className="mx-auto  grid w-full max-w-7xl gap-4 px-2 py-4 sm:px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[16rem_minmax(0,1fr)_19rem]">
      <LeftSidebar user={user} />

      <section className="order-1 min-w-0 space-y-4 xl:col-start-2 xl:row-start-1">
        <CreatePostForm user={user} />

        <div className="flex items-center gap-3 px-1 text-sm text-gray-600 dark:text-gray-400">
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
          <span>Sort by: Top</span>
        </div>

        <Posts />
      </section>

      <RightSidebar />
    </div>
  );
}
