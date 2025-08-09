import { useEffect, useState } from "react";

// Define the Post interface to type the post data
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  // imageUrl : string; // Not used, but could be added for real images
}

const PostListCard = () => {
  // State to hold the list of posts
  const [posts, setPosts] = useState<Post[]>([]);
  // State to track loading status
  const [loading, setLoading] = useState<boolean>(true);
  // State to store any error message
  const [error, setError] = useState<string | null>(null);

  // Function to fetch posts from the API
  const fetchPosts = async () => {
    try {
      // Intentionally incorrect URL to demonstrate error handling
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/postss"
      );
      // If response is not OK, throw an error
      if (!response.ok) {
        throw new Error("Error occured while calling the API");
      }
      // Parse the response as JSON
      const data: Post[] = await response.json();
      setPosts(data); // Update posts state
      setLoading(false); // Set loading to false
    } catch (error: any) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // Ensure loading is false after fetch
    }
  };

  // useEffect to fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Show loading message while data is being fetched
  if (loading) {
    return (
      <div className="container text-center">
        <h1 className="text-danger">Loading... </h1>
      </div>
    );
  }

  // Show error message if there was an error fetching data
  if (error) {
    return (
      <div className="container text-center">
        <h1 className="text-danger fw-bold">{error}</h1>
      </div>
    );
  }

  // Render the list of posts in Bootstrap cards
  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Posts</h1>

      <div className="row">
        {posts.map((post) => (
          <div className="col-md-3 mb-3" key={post.id}>
            {/* Card with flex column to align button at the bottom */}
            <div className="card h-100 d-flex flex-column">
              {/* Placeholder image using post id */}
              <img src={`https://picsum.photos/id/${post.id}/300`} alt="" />
              <div className="card-body d-flex flex-column">
                {/* Post title */}
                <h4 className="card-title text-danger">{post.title}</h4>
                {/* Post body */}
                <p className="card-text text-secondary">{post.body}</p>
                {/* Spacer to push button to the bottom */}
                <div className="flex-grow-1">&nbsp;</div>
                {/* Link button aligned at the bottom of the card */}
                <a href="" className="btn btn-primary">
                  View Entire Post
                </a>
              </div>
              {/* Card footer with author info */}
              <div className="card-footer text-muted">
                Author - {post.userId}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostListCard;