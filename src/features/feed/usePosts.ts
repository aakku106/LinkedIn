import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../lib/db";

export function usePosts() {
  return useLiveQuery(async () => {
    const posts = await db.posts.toArray();
    const shuffledPosts = [...posts];

    for (let i = shuffledPosts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPosts[i], shuffledPosts[j]] = [
        shuffledPosts[j],
        shuffledPosts[i],
      ];
    }

    return shuffledPosts;
  });
}
