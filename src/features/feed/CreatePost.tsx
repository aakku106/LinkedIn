import { db } from "../../lib/db"

async function createPost(content: string, userId: number) {
  await db.posts.add({
    content,
    userId,
    createdAt: Date.now()
  })
}
