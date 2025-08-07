## 🔁 React `useEffect` Hook for Fetching Data from API

### 🔍 What is `useEffect`?

`useEffect` is a React Hook that allows you to perform **side effects** in function components — such as:

* Fetching data from an API
* Subscribing to a service
* Setting up a timer

It runs **after the component renders**.

---

### 📦 Syntax

```ts
useEffect(() => {
  // side-effect logic
}, [dependencies]);
```

* The callback function runs **after render**
* The second argument is a **dependency array**

  * `[]`: runs once (on mount)
  * `[state]`: runs whenever `state` changes

---

## 🧪 Example: Fetch Data from API

Let’s fetch product data from this dummy API:

📦 `https://fakestoreapi.com/products`

---

### 🔤 Step-by-Step Example

#### ✅ 1. Setup

```bash
npx create-react-app my-app --template typescript
cd my-app
npm install bootstrap
```

#### ✅ 2. Import Bootstrap

Add this to `main.tsx` or `index.tsx`:

```tsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

#### ✅ 3. Create `ProductList.tsx`

```tsx
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Define async function
    const fetchData = async () => {
   
        const res = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await res.json();
        setProducts(data);
    };

    // Call the async function
    fetchData();
  }, []); // Empty array → runs only once after mount

 

  return (
    <div className="container my-4">
      <h2>Product List</h2>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-4 mb-3" key={p.id}>
            <div className="card h-100">
              <img
                src={p.image}
                alt={p.title}
                className="card-img-top p-3"
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5>{p.title}</h5>
                <p className="text-success">${p.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
```

---

### ✅ 4. Use It in `App.tsx`

```tsx
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;
```

---

## 📚 Summary

| Concept                  | Explanation                            |
| ------------------------ | -------------------------------------- |
| `useEffect`              | Hook for side-effects                  |
| Dependency array         | `[]` ensures the effect runs only once |
| Fetch inside `useEffect` | Define and call an async function      |

---

### 💡 Pro Tip

Avoid putting `async` directly in `useEffect`. Instead, define an `async` function inside and **call it manually**, as done above.