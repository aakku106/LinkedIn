import { db } from "../../lib/db";

export async function createPost(content: string, userId: number) {
  await db.posts.add({
    content,
    userId,
    createdAt: Date.now(),
    likeCount: 0,
    likedByUserIds: [],
  });
}
