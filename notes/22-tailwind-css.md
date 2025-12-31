# 📘 Tutorial: Using Tailwind CSS in React JS

---

## 🎯 What You Will Learn

By the end of this tutorial, students will be able to:

* Create a React project using **Vite**
* Install **Tailwind CSS (latest version)**
* Use **Tailwind utility classes**
* Build a **simple card UI**

---

## 🧱 STEP 1: Create React Project Using Vite

### 1️⃣ Open terminal and run:

```bash
npm create vite@latest tailwind-react-demo --template react
```

### 2️⃣ Go into the project folder:

```bash
cd tailwind-react-demo
```

### 3️⃣ Install dependencies:

```bash
npm install
```

### 4️⃣ Start the project:

```bash
npm run dev
```

👉 Open the browser URL shown (usually `http://localhost:5173`)

---

## 🎨 STEP 2: Install Tailwind CSS (Latest Way)

### 1️⃣ Install Tailwind and Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

### 2️⃣ Enable Tailwind in `vite.config.js`

Open **`vite.config.js`** and update it:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

### 3️⃣ Import Tailwind in CSS

Open **`src/index.css`**
Remove everything and add:

```css
@import "tailwindcss";
```

✅ Tailwind is now ready — no config files needed!

---

## 🧪 STEP 3: Verify Tailwind Is Working

Open **`src/App.jsx`** and replace code with:

```jsx
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Tailwind is Working!
      </h1>
    </div>
  )
}
```

👉 If text appears **blue and centered**, Tailwind is working 🎉

---

## 🪪 STEP 4: Create a Simple Card Using Tailwind

Now replace `App.jsx` with this **simple card UI**:

```jsx
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-6 rounded-lg shadow-md w-80">

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Web Development
        </h2>

        <p className="text-gray-600 mb-4">
          Learn HTML, CSS, JavaScript and React from scratch.
        </p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Enroll Now
        </button>

      </div>

    </div>
  )
}
```

---

## 🧠 Explanation of Tailwind Classes (Tell Students)

| Class                              | Purpose            |
| ---------------------------------- | ------------------ |
| `min-h-screen`                     | Full screen height |
| `flex items-center justify-center` | Center content     |
| `bg-white`                         | White card         |
| `p-6`                              | Padding            |
| `rounded-lg`                       | Rounded corners    |
| `shadow-md`                        | Card shadow        |
| `text-xl font-bold`                | Title styling      |
| `hover:bg-blue-700`                | Hover effect       |