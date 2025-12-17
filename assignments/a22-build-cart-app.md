# Assignment A22 — Build the Cart App (Full Project)

## 🎯 Overview

Build a complete Cart App from scratch that matches the features and user experience of the `demos/cart-app`. This project consolidates knowledge of React, TypeScript, state management, routing, forms, and basic persistence.

Estimated time: 6–10 hours (can be split across sessions)

## 📚 Learning outcomes

- Create a React + TypeScript app scaffolded with Vite
- Use React Router to implement navigation and routes
- Build and consume a Context provider for cart state management
- Work with fetch APIs and display product lists
- Implement UI interactions: add/remove items, update quantities, search and filter
- Persist state to `localStorage` and gracefully handle invalid data
- Validate forms and provide user feedback
- Improve app UX with modals, confirmations, and accessible controls

---

## 🔧 Starter (optional)

You may start from the repository's `demos/cart-app` or create a fresh app using Vite and follow the file structure suggested below.

Suggested project structure:

```
demos/your-cart-app/
  package.json
  src/
    main.tsx
    App.tsx
    components/
      Products.tsx
      ProductCard.tsx
      Cart.tsx
      Navbar.tsx
      AddressForm.tsx
      OrderPlaced.tsx
    contexts/
      CartContext.tsx
    styles/
      app.css
```

---

## ✅ Core Requirements (must implement)

Implement the following features. Keep commits small and descriptive.

1. Product list

   - Fetch product data from a mock or public API (or use a local JSON file).
   - Show product title, image (if available), price, and an "Add to cart" button.

2. Cart state with Context

   - Implement `CartContext` to hold cart items and provide actions:
     - addToCart(product)
     - removeFromCart(productId)
     - updateQuantity(productId, qty)
     - clearCart()
   - Use TypeScript types for cart items, product, and context values.

3. Cart page

   - Show a list of items with quantity controls (±), line subtotals, and a grand total.
   - Allow removal of an item from the cart.

4. Confirmation before destructive actions

   - On remove item (and optionally on clear cart), show a confirmation.
   - Beginner-friendly option: use `window.confirm("Are you sure?")`.
   - Optionally implement a Bootstrap modal for improved UX.

5. Persist cart to localStorage

   - Save cart state whenever it changes.
   - Load cart on app mount, and handle parse errors safely (fallback to empty cart).

6. Checkout flow

   - `AddressForm` component with required fields: name, email, address, city, postal code.
   - Basic validation: required checks and email pattern.
   - On successful submit, clear the cart and navigate to `OrderPlaced` page that displays a summary.

7. Navigation

   - `Navbar` shows a link to products and cart (with item count badge).
   - Use React Router to navigate between `Products`, `Cart`, `AddressForm`, and `OrderPlaced` routes.

8. Search & Filter (UX)

   - Add a search box on the Products page to filter by title/description.

9. Accessibility & UI polish
   - Add `aria-label`s for interactive controls where appropriate.
   - Ensure keyboard accessibility for modals and buttons.

---

## ✨ Nice-to-have (Bonus)

- Replace `window.confirm` with a Bootstrap modal or custom accessible modal
- Show toasts/snackbars for feedback (item removed, order placed)
- Add product images and lazy-loading
- Add sorting by price or name
- Unit tests for context reducer or utility functions
- Responsive design adjustments and mobile-first improvements

---

## 💻 Setup & Run

1. Create the app or copy the `demos/cart-app` structure.
2. Install and run:

```bash
cd demos/your-cart-app
npm install
npm run dev
```

3. Open in the browser (Vite usually serves at http://localhost:5173)

---

## 📝 Deliverables

- A working app implementing all **Core Requirements**
- A public branch or PR with a clear description and screenshots
- A short README describing assumptions and how to run the project
- Optional: GIF or short video demonstrating the core flows

---

## 🧾 Acceptance criteria

To pass the assignment your submission must:

- Build the described app and all core features work when running locally
- No TypeScript type errors and safe handling of `localStorage` data
- Form validation for checkout and a successful order summary page
- Clear commit history and a readable codebase

---

## 🧮 Grading rubric (suggested)

- Functionality (50%) — All core features implemented and behave correctly
- Code Quality (20%) — Type-safe, readable, modular components and good naming
- UX & Accessibility (15%) — Usable interface, keyboard-accessible, basic ARIA
- Tests (5%) — Basic unit tests for critical logic (if provided)
- Documentation (10%) — README and short usage notes

---

## 💡 Hints & Tips

- Keep your `CartContext` small and focused; consider using a reducer for complex logic.
- Persist using a small `useEffect` hook that serializes state; wrap JSON.parse in try/catch.
- For validation, HTML5 validation + simple JS checks are sufficient for this assignment.
- Use `useMemo` or keep derived calculations (totals) efficient so the UI updates quickly.

---

If you'd like, I can also:

- provide a starter repository or branch with minimal scaffolding ✅
- add a sample solution or instructor's notes ✅
- write a short test plan or checklist for graders ✅

Good luck — build something you’re proud of! 🚀
