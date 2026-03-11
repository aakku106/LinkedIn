import { usePosts } from "./usePosts"
import "../../assets/styles/feedPage.css"

export default function FeedPage() {
  const posts = usePosts()

  if (!posts) return <p>Loading...</p>

  return (
    <div className="flex feed-page flex-row px-56 mt-4 relative">

      <div className=" left-feed fixed mr-6 p-6 bg-amber-600">left</div>
      <div className=" center-feed mr-6 p-6 ">

        {posts.map((post) => (
          <div key={post.id} className="bg-white mt-4 ">
            <p>{post.content}</p>
          </div>
        ))}

      </div>
      <div className="right-feed fixed p-6 bg-blue-800">
        Right
      </div>
    </div>
  )
}

