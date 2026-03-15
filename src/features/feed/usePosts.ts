import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../lib/db";

export function usePosts() {
  return useLiveQuery(() => db.posts.orderBy("createdAt").reverse().toArray());
}
