## 🧑‍💻 Assignment 04 – Using **Props** to Display Product Information

### 🎯 **Objective**:

Learn how to **pass and use props** in React components by creating a reusable `ProductCard` component that displays product information using props.

---

### 📌 **Part A: Create `ProductCard` Component**

1. Create a component called `ProductCard.tsx` (or `.jsx`).

2. The component should receive the following **props**:

   - `name` (string)
   - `price` (number)
   - `category` (string)
   - `image` (string — URL of the product image)

3. Display the data inside a **Bootstrap Card** layout.
   Each card should show:

   - Product image
   - Product name
   - Category
   - Price

---

### ✅ **Expected Output Example:**

```plaintext
-----------------------------------------
Product: iPhone 15 Pro
Category: Smartphones
Price: ₹1,49,900
-----------------------------------------
```

---

### 📌 **Part B: Use `ProductCard` in `App.tsx`**

1. In your main `App.tsx`, create a **list of 3–5 product objects**.

```ts
const products = [
  {
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "men's clothing",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    name: "Mens Casual Premium Slim Fit T-Shirts",
    category: "men's clothing",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  },
  {
    name: "Mens Cotton Jacket",
    category: "men's clothing",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
  {
    name: "Mens Casual Slim Fit",
    category: "men's clothing",
    price: 15.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  },
  {
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    category: "jewelery",
    price: 695,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  },
  {
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    category: "women's clothing",
    price: 56.99,
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
  },
];
```

2. Use the `map()` function to **pass each product’s data** as props to the `ProductCard` component.

---

### 💡 **ProductProps Type**

- Use **TypeScript** to define `ProductProps` interface:

  ```ts
  type ProductProps = {
    name: string;
    category: string;
    price: number;
    image: string;
  };
  ```
