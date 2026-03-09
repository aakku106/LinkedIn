import { usePosts } from "./usePosts"

export default function FeedPage() {
  const posts = usePosts()

  if (!posts) return <p>Loading...</p>

  return (
    <div className="max-w-xl mx-auto space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 shadow rounded">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

