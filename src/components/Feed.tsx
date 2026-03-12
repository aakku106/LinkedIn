import "../features/feed/usePosts"
import { Posts } from "./Posts"

export default function Feed() {

  return (
    <div className=" feed-page flex flex-row flex-wrap px-56 mt-4 relative">

      <div className=" left-feed fixed min-w-52 left-32 mr-6 p-6 ">
        left

        <div className="profile bg-black/95 dark:bg-blue-100">
          fffff
        </div>
        <div className="data"></div>
        <div className="other-nav"></div>

      </div>
      <div className=" center-feed  min-w-136 max-w[34rem]  ml-44 ">

        <Posts />

      </div>
      <div className="right-feed fixed  min-w-64 right-48 p-6 bg-blue-800">
        Right
      </div>
    </div>
  )
}
