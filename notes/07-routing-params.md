# 🧭 Tutorial: React Routing with Parameters

### 🧠 What You Will Learn

* How to use `react-router-dom` for routing
* How to define dynamic routes (with `:id`)
* How to read route parameters using `useParams()`

---

## ✅ Step 1: Setup React Project

You can use **Vite** (or CRA if preferred). We'll proceed with Vite here.

```bash
npm create vite@latest react-routing-demo --template react-ts
cd react-routing-demo
npm install
```

### Install React Router:

```bash
npm install react-router-dom
```

---

## ✅ Step 2: Create Project Structure

Inside `src/`, create a folder `pages/` and add two components:

```
src/
├── App.tsx
├── main.tsx
└── pages/
    ├── UserList.tsx
    └── UserDetails.tsx
```

---

## ✅ Step 3: Create `UserList.tsx`

This component will show a static list of users. Each user will link to a detail page using their ID.

```tsx
// src/pages/UserList.tsx
import { Link } from "react-router-dom";

const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
];

function UserList() {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

---

## ✅ Step 4: Create `UserDetails.tsx`

This component will read the `id` from the URL using `useParams()`.

```tsx
// src/pages/UserDetails.tsx
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Details</h2>
      <p>You selected user with ID: <strong>{id}</strong></p>
    </div>
  );
}

export default UserDetails;
```

---

## ✅ Step 5: Set Up Routing in `App.tsx`

```tsx
// src/App.tsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## ✅ Step 6: Start the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

You should see:

* A list of users
* Clicking on a user navigates to `/users/1`, `/users/2`, etc.
* The detail page displays the ID from the URL

---

## ✅ How it Works

| Feature       | What it does                              |
| ------------- | ----------------------------------------- |
| `/users/:id`  | Defines a **dynamic route** using `:id`   |
| `useParams()` | Accesses the value of `:id` from the URL  |
| `<Link>`      | Creates a clickable navigation to a route |