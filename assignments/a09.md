## 📝 **Assignment 09: Display Products from Dummy API**

#### **Title:** Product List Component using API

#### **Objective:**

Build a React component that fetches a list of products from a dummy API and displays them using Bootstrap cards or list items.

---

### ✅ **Requirements:**

#### **Part A: Basic Product List**

1. Create a React component called `ProductList`.
2. Use the following API endpoint to fetch products:
   👉 `https://fakestoreapi.com/products`
3. Each product contains fields such as:

   * `id`
   * `title`
   * `price`
   * `description`
   * `image`
4. Store the fetched data using the `useState` hook.
5. Fetch data using the `fetch()` function (or async/await).
6. Display all products using:

   * Product **title**
   * Product **price**
   * Product **image**
7. Use Bootstrap’s `Card` component
8. Include a **"Fetch Products"** button to trigger the fetch manually.

---

### ✅ **Bonus (Optional Enhancements):**

* Display product **category**
* Add **loading indicator** while fetching
* Limit to first 5 or 10 products using `.slice()`
* Add a **search bar** to filter products by title

---

### 📦 **Expected Output:**

* A list or grid of products shown as:

  ```
  [Product Image]
  Title: "Fjallraven - Foldsack No. 1 Backpack"
  Price: $109.95
  ```

---

### 💡 Hints:

* Use Bootstrap classes such as `.card`, `.row`, `.col`, `.list-group`, etc.
* Use `map()` to loop through the list of products and display them.
* Don’t forget to add `key={product.id}` inside your `.map()` loop.

---

### 📁 Sample API Response:

```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack",
    "price": 109.95,
    "description": "...",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  }
]
```