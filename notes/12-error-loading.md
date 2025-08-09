# 📘 React Tutorial: Handling Errors and Loading States in API Calls

## 1️⃣ Why Handle Errors and Loading?

When fetching data from an API:

* Data may take **time** to load → we should show a **Loading** message or spinner.
* The API may fail (network issue, wrong URL, server down) → we should show an **Error message** instead of breaking the app.

---

## 2️⃣ The Tools We’ll Use

* **`useState`** → to store:

  * **`posts`** (API data)
  * **`loading`** state
  * **`error`** message
* **`useEffect`** → to call the API when the component loads
* **`try...catch`** → to handle fetch errors
* **Bootstrap** → for simple styling

---

## 3️⃣ Code Walkthrough

### Step 1: State Setup

```tsx
const [posts, setPosts] = useState<Post[]>([]);      // Stores fetched posts
const [loading, setLoading] = useState<boolean>(true); // Shows loading spinner/text
const [error, setError] = useState<string | null>(null); // Stores error message
```

---

### Step 2: Fetch Data with Error Handling

```tsx
const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/postss"); // wrong URL to demo error
    if (!response.ok) {
      throw new Error("Error occured while calling the API"); // manual error
    }
    const data: Post[] = await response.json();
    setPosts(data);
  } catch (error: any) {
    setError(error.message); // store error
  } finally {
    setLoading(false); // stop loading in all cases
  }
};
```

**Why `finally`?**
No matter whether the fetch **succeeds** or **fails**, we want to hide the "Loading..." message.

---

### Step 3: Call the Fetch Function When Component Loads

```tsx
useEffect(() => {
  fetchPosts();
}, []);
```

The empty array `[]` ensures the function runs **only once** when the component first mounts.

---

### Step 4: Conditional Rendering

#### **Loading**

```tsx
if (loading) {
  return <h1>Loading...</h1>;
}
```

#### **Error**

```tsx
if (error) {
  return <h1 className="text-danger">{error}</h1>;
}
```

#### **Data**

```tsx
return (
  <div>
    {posts.map(post => (
      <h3 key={post.id}>{post.title}</h3>
    ))}
  </div>
);
```

---

## 4️⃣ Full Working Example

```tsx
import { useEffect, useState } from "react";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostListCard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/postss" // wrong URL to test error
      );
      if (!response.ok) {
        throw new Error("Error occured while calling the API");
      }
      const data: Post[] = await response.json();
      setPosts(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <h1 className="text-primary text-center">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-danger text-center">{error}</h1>;
  }

  return (
    <div className="container">
      <h1 className="mb-4 text-danger">Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-3 mb-3" key={post.id}>
            <div className="card h-100">
              <img src={`https://picsum.photos/id/${post.id}/300`} alt="" />
              <div className="card-body">
                <h4 className="card-title">{post.title}</h4>
                <p>{post.body}</p>
              </div>
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
```

---

## 5️⃣ Key Takeaways

| Feature         | Purpose                                                     |
| --------------- | ----------------------------------------------------------- |
| `loading` state | Shows a spinner/message while data loads                    |
| `error` state   | Prevents app from breaking, shows user-friendly message     |
| `try...catch`   | Catches network and parsing errors                          |
| `finally`       | Ensures loading is turned off regardless of success/failure |