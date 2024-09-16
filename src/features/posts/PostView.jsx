import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      <h2>Post View</h2>
      {isLoading && <h3>Loading.....</h3>}
      {error && <h3>{error}</h3>}
      <div className="post-container">
        {posts &&
          posts.map((post) => {
            return (
              <div className="post" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default PostView;
