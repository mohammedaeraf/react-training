# 🧭 **Assignment 07 – Routing with URL Parameters in React**

### 🎯 **Objective**

Learn how to use **React Router Params** to load details of a selected item based on its **ID** from the URL.

---

# 📌 **Part A: Create Two Components**

You must create:

### **1️⃣ ProductList Component**

* Create a static array of products.
* Each product must contain:

  ```ts
  { id: number, name: string, price: number }
  ```
* Display all products in a list or Bootstrap card layout.
* Each product should have a **"View Details"** button or link.
* When clicked, it should navigate to:

  ```
  /products/1
  /products/2
  etc…
  ```

Example link:

```tsx
<Link to={`/products/${product.id}`}>View Details</Link>
```

---

### **2️⃣ ProductDetails Component**

* Use `useParams()` to extract the product ID from the URL.
* Using the same product list, find the product with the matching ID.
* Display its **name**, **price**, and any extra info you add.

Example:

```tsx
const { id } = useParams();
```

---

# 🧩 **Part B: Set Up Routing**

In your `App.tsx`, add routes:

```tsx
<Routes>
  <Route path="/products" element={<ProductList />} />
  <Route path="/products/:id" element={<ProductDetails />} />
</Routes>
```

---

# 📁 **Sample Data for Products**

```ts
const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Tablet", price: 18000 }
];
```

---

# 🎯 **Expected Output**

* `/products` → shows 3 product cards
* Clicking **View Details** navigates to:

  * `/products/1`
  * `/products/2`
* `/products/1` → shows details of Laptop
* `/products/2` → shows details of Smartphone

No API needed — only local data.
