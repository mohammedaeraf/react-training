# 🧑‍🏫 Tutorial: Fetching Data from an API Using `useState` and Fetch

In this tutorial, we’ll build a simple `PostList` component that fetches and displays posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a free dummy API.

---

## ✅ 1. Goal

We’ll:

* Fetch posts from the API using `fetch()`
* Store them in state using `useState`
* Display them in a Bootstrap-styled list
* Trigger data fetch on button click

---

## 🧱 2. Project Setup

If you haven't created a project:

```bash
npm create vite@latest post-fetch-demo --template react-ts
cd post-fetch-demo
npm install
npm install bootstrap
```

In `main.tsx`, import Bootstrap:

```ts
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## 📄 3. Component Code — `PostList.tsx`

```tsx
import { useState } from "react";

// Define the structure (type) of a Post object
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostList = () => {
  // State variable to hold array of posts
  const [posts, setPosts] = useState<Post[]>([]);

  // Function to fetch posts from API
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json();
    setPosts(data); // update state with received data
  };

  return (
    <div className="container">
      <h1 className="text-danger my-4">List of Posts from JsonPlaceHolder</h1>
      <button className="btn btn-primary mb-3" onClick={fetchPosts}>
        Fetch Posts
      </button>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h4 className="text-primary">{post.title}</h4>
            <p className="text-secondary">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
```

---

## 🧠 4. Explanation

### `useState<Post[]>([])`

* Initializes `posts` as an empty array.
* `Post[]` tells TypeScript the array will contain objects of type `Post`.

### `fetchPosts()`

* Uses `fetch()` to make a GET request to the API.
* Converts response to JSON.
* Stores the result in `posts` using `setPosts`.

### JSX

* A `<button>` triggers the `fetchPosts` function on click.
* Posts are rendered using `.map()` inside a Bootstrap list group.

---

## 🎯 5. How to Use It

### App.tsx

```tsx
import PostList from "./PostList";

function App() {
  return (
    <div>
      <PostList />
    </div>
  );
}

export default App;
```

---

## ✅ Output

* A red heading
* A blue button labeled **Fetch Posts**
* When clicked, 100 posts from JSONPlaceholder API will be displayed in a styled list.

---

## 📌 Bonus Tips

* Add a loading state with another `useState`
* Use `useEffect` to fetch automatically on component load
* Handle errors with `try-catch`
* Limit posts with `.slice(0, 10)`
