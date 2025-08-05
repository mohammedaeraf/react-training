import { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json();
    setPosts(data);
  };

  return (
    <div className="container">
      <h1 className="text-danger">List of Posts from JsonPlaceHolder</h1>
      <button onClick={fetchPosts}>Fetch Posts</button>
      <ul className="list-group m-3 p-3">
        {posts.map((post) => (
          <li className="list-group-item">
            <h3 className="text-primary my-2">{post.title}</h3>
            <p className="text-secondary">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostList;
