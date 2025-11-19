## 📌 Assignment: Search and Display API Data in React

### 🎯 Objective

Build a **search feature** in React to fetch and display results from an API based on a user’s search term.
You can choose **one** of the following search types:

* **Products** (from [DummyJSON Products API](https://dummyjson.com/products/search))
* **Posts** (from [DummyJSON Posts API](https://dummyjson.com/posts/search))
* **Users** (from [DummyJSON Users API](https://dummyjson.com/users/search))

---

### 📝 Requirements

1. **Create a Search Input Box**

   * A text box for entering the search query.
   * A "Search" button that triggers an API call.

2. **Fetch API Data**

   * Use the appropriate DummyJSON API:

     * Products: `https://dummyjson.com/products/search?q={searchTerm}`
     * Posts: `https://dummyjson.com/posts/search?q={searchTerm}`
     * Users: `https://dummyjson.com/users/search?q={searchTerm}`

3. **Store and Display Results**

   * Store API results in a state variable.
   * Display results in **Bootstrap cards** (or any styled container).
   * Show at least 3 details for each result (e.g., title, description, image).

4. **Handle Edge Cases**

   * Show a message if no results are found.
   * Show an error message if the API call fails.

5. **Routing (Bonus)**

   * Wrap each result in a `Link` (React Router) to navigate to a detail page.
   * Pass the `id` of the clicked item in the URL.

---

### 📂 Starter Code Template

```tsx
import { useState } from "react";

type Item = {
  id: number;
  title?: string;
  name?: string;
  description?: string;
  image?: string;
};

const SearchPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchItems = async (searchTerm: string) => {
    const response = await fetch(`YOUR_API_URL?q=${searchTerm}`);
    const data = await response.json();
    setItems(data.products || data.posts || data.users || []);
  };

  return (
    <div className="container py-4">
      <h1>Search Items</h1>

      <div className="mb-4 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-primary ms-2"
          onClick={() => fetchItems(searchTerm)}
        >
          Search
        </button>
      </div>

      <div className="row">
        {items.map((item) => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="card h-100">
              {item.image && (
                <img src={item.image} alt="" className="card-img-top" />
              )}
              <div className="card-body">
                <h5 className="card-title">{item.title || item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
```

---

### ✅ Submission Checklist

* [ ] Search bar and button working
* [ ] API call fetches correct data
* [ ] Results displayed with at least 3 fields
* [ ] No-results and error messages handled
* [ ] (Bonus) Links to detail pages