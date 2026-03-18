import Dexie from "dexie";
import type { Table } from "dexie";

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  profilePic?: string;
  coverPic?: string;
  headline?: string;
  bio?: string;
  location?: string;
  school?: string;
  connections?: number;
}

export interface Post {
  id?: number;
  userId: number;
  content: string;
  image?: string;
  createdAt: number;
}

class LinkedInDB extends Dexie {
  users!: Table<User>;
  posts!: Table<Post>;

  constructor() {
    super("linkedinClone");

    this.version(1).stores({
      users: "++id,email",
      posts: "++id,userId,createdAt",
    });
  }
}

export const db = new LinkedInDB();
