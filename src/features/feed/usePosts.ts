import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../lib/db";

export function usePosts() {
  return useLiveQuery(async () => {
    const posts = await db.posts.toArray();
    const shuffledPosts = [...posts];
    const randomTimes = ["now", "3m", "12m", "1h", "4h", "Yesterday"];

    for (let i = shuffledPosts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPosts[i], shuffledPosts[j]] = [
        shuffledPosts[j],
        shuffledPosts[i],
      ];
    }

    return shuffledPosts.map((post) => ({
      ...post,
      randomTime: randomTimes[Math.floor(Math.random() * randomTimes.length)],
    }));
  });
}
