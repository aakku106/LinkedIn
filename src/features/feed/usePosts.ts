import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../lib/db";

export function usePosts() {
  return useLiveQuery(async () => {
    const posts = await db.posts.toArray();
    return [...posts].sort((a, b) => b.createdAt - a.createdAt);
  });
}
