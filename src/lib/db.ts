import Dexie from "dexie"

export const db = new Dexie("linkedinClone")

db.version(1).stores({
  users: "++id,email",
  posts: "++id,userId,createdAt"
})
