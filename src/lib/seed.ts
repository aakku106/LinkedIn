import { db, type User } from "./db";
import profilePic from "../assets/images/profile-pic.webp";
import coverPic from "../assets/images/profile-coverPic.webp";

const seededUsers: Omit<User, "id">[] = [
  {
    name: "Adarasha Gaihre",
    email: "aakku@aakku.com",
    password: "1234",
    profilePic,
    coverPic,
    headline: "Student at Nepathya College",
    bio: "Building web apps and learning full-stack development.",
    location: "Rupandehi, Lumbini, Nepal",
    school: "Nepathya College",
    connections: 86,
  },
];

export async function seedDatabase() {
  const userCount = await db.users.count();
  if (userCount === 0) {
    await db.users.bulkAdd(seededUsers);
  }

  const postCount = await db.posts.count();
  if (postCount > 0) {
    return;
  }

  const firstUser = await db.users.orderBy("id").first();
  if (!firstUser || typeof firstUser.id !== "number") {
    return;
  }
  const userId = firstUser.id;

  const fakePosts = Array.from({ length: 20 }).map((_, i) => ({
    userId,
    content: `Demo post #${i + 1} - LinkedIn clone.`,
    image: `https://picsum.photos/seed/linkedin-${i + 1}/600/400`,
    createdAt: Date.now() - i * 1000000,
  }));

  await db.posts.bulkAdd(fakePosts);
}
