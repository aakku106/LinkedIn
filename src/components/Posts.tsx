import { usePosts } from "../features/feed/usePosts";

export const Posts = () => {
  const posts = usePosts();
  if (!posts) return <p>Loading...</p>;
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="bg-white mt-4 ">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
