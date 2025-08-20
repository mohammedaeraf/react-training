import { useEffect, useState } from "react";

// Define the Post interface to type the post data
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  // imageUrl : string; // Not used, but could be added for real images
}

const RECORDS_PER_PAGE: number = 8;

const PostList4 = () => {
  // State to hold the list of posts
  const [posts, setPosts] = useState<Post[]>([]);
  // State to track loading status
  const [loading, setLoading] = useState<boolean>(true);

  const [currentPage, setCurrentPage] = useState<number>(1);
  // State to store any error message
  const [error, setError] = useState<string | null>(null);

  // Function to fetch posts from the API
  const fetchPosts = async () => {
    try {
      // Intentionally incorrect URL to demonstrate error handling
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // If response is not OK, throw an error
      if (!response.ok) {
        throw new Error("Error occured while calling the API");
      }
      // Parse the response as JSON
      const data: Post[] = await response.json();
      setPosts(data); // Update posts state
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

  // total no of posts from API
  const totalPosts: number = posts.length;

  // Use Math.ceil to round off decimal to next whole number ex: 9.3 => 10
  const totalPages: number = Math.ceil(totalPosts / RECORDS_PER_PAGE);

  // generate an array of page numbers for pagination controls
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // calculate start and end index for current page
  const startIndex: number = (currentPage - 1) * RECORDS_PER_PAGE;
  const endIndex: number = startIndex + RECORDS_PER_PAGE;

  // slice the posts array to get only the posts for the current page (based on currentPage)
  const paginatedPosts: Post[] = posts.slice(startIndex, endIndex);

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
      <h1 className="text-danger fw-bold mb-4">Posts (with Pagination)</h1>

      <div className="row">
        {paginatedPosts.map((post) => (
          <div className="col-md-3 mb-3" key={post.id}>
            {/* Card with flex column to align button at the bottom */}
            <div className="card h-100 d-flex flex-column">
              <img src={`https://picsum.photos/id/${post.id}/300`} alt="" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-danger">{post.title}</h4>
                <p className="card-text text-secondary">{post.body}</p>
                <div className="flex-grow-1">&nbsp;</div>
                <a href="" className="btn btn-primary">
                  View Entire Post
                </a>
              </div>
              <div className="card-footer text-muted">
                Author - {post.userId}
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          {pageNumbers.map((pageNumber) => (
            <li
              className={
                // if page number is the currently selected page add extra class 'active' to highlight
                currentPage == pageNumber ? "page-item active" : "page-item"
              }
            >
              <button
                className="page-link"
                onClick={() => {
                  setCurrentPage(pageNumber); // set currentPage
                  window.scrollTo({ top: 0 }); // scroll to the top
                }}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PostList4;
