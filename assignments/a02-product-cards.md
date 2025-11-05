# 🧩 **Assignment 02: Display a List of Products in Bootstrap Cards**

## 🎯 **Objective**

To help students understand how to:

* Store data in an array of objects
* Loop through data using `map()` in React
* Display the data dynamically using Bootstrap Cards
* Practice basic component structure, props, and styling

---

## 🧱 **Problem Statement**

Create a **React component** named `ProductList` that displays a **list of products** using Bootstrap **card layout**.
Each product should display:

* **Name**
* **Description**
* **Price**
* **Image**
* **View Details** button (that links to the product details page)

---

## 💡 **Instructions**

1. **Create a new component:**
   File: `ProductList.tsx`

2. **Define a Product type:**

   ```tsx
   type Product = {
     name: string;
     detailsPage: string;
     description: string;
     price: number;
     image: string;
   };
   ```

3. **Create an array of products:**
   Include at least **3 products** with the same structure as the one shown below:

   ```tsx
   const products: Product[] = [
     {
       name: "iPhone 15 Pro",
       detailsPage: "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
       description: "Apple today debuted iPhone 15 Pro and iPhone 15 Pro Max...",
       price: 999.99,
       image: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg",
     },
     // Add more products here
   ];
   ```

4. **Display each product** using the **Bootstrap Card layout**, similar to the one in your example.

5. **Use `map()`** to loop through the `products` array and generate a `ProductCard` for each item.

6. **Apply simple styling** to the cards (optional `ProductCard.css` file).

7. **Display all products in a grid layout** (for example, 3 cards per row using Bootstrap’s grid system).

---

## 🧰 **Expected Code Structure**

```tsx
import "./ProductCard.css";

type Product = {
  name: string;
  detailsPage: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  // your product data here
];

// Please use it for reference only. Please do not copy-paste.
function ProductList() {
  return (
    <div className="container my-4">
      <h2 className="text-center text-primary mb-4">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.name}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-warning">{product.name}</h4>
                <h6 className="card-subtitle mb-2 text-secondary">Price: ${product.price}</h6>
                <p className="card-text flex-grow-1">{product.description}</p>
                <a
                  href={product.detailsPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto w-100"
                >
                  View Details
                </a>
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