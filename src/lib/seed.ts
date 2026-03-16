import { db } from "./db";
import profilePic from "../assets/images/profile-pic.jpeg";
import coverPic from "../assets/images/profile-coverPic.jpeg";

export async function seedDatabase() {
  const userCount = await db.users.count();

  if (userCount === 0) {
    const userId = await db.users.add({
      name: "Adarasha Gaihre",
      email: "aakku@aakku.com",
      password: "1234",
      avatar: "",
      profilePic: profilePic,
      coverPic: coverPic,
    });

    const fakePosts = Array.from({ length: 20 }).map((_, i) => ({
      userId,
      content: `Demo post #${i + 1} Try try try ...`,
      image: `https://picsum.photos/seed/${i}/600/400`,
      createdAt: Date.now() - i * 1000000,
    }));

    await db.posts.bulkAdd(fakePosts);
  }
}
