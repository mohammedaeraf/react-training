## 🧑‍🏫 **Assignment 17: Theme Toggle App using React Context**

### 🎯 Objective:

Learn to implement global state management using React Context API. Create a theme toggle application that allows switching between light and dark themes, applying the theme to the entire app including background, text, and component styles.

---

### ✅ **Part A – Set Up Theme Context**

**Instructions:**

1. Create a new folder `Context` inside `src` if it doesn't exist.

2. Create a file `ThemeContext.tsx` in the `Context` folder.

3. Define a type for the theme context:

```tsx
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
```

4. Create and export the context with default values:

```tsx
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});
```

5. Export the context and the type.

---

### ✅ **Part B – Create Theme Toggler Component**

**Instructions:**

1. Create a new folder `Components` inside `src` if it doesn't exist.

2. Create a file `ThemeToggler.tsx` in the `Components` folder.

3. Import `useContext` and the `ThemeContext`.

4. Create a functional component that:

   - Uses the context to get `theme` and `toggleTheme`.
   - Renders a button that calls `toggleTheme` on click.
   - Displays text like "Switch to Dark" or "Switch to Light" based on current theme.

5. Style the button with Bootstrap classes (e.g., `btn btn-primary`).

6. Export the component.

---

### ✅ **Part C – Create Themed Components**

**Instructions:**

1. Create a component `ThemedCard.tsx` that displays a Bootstrap card.

2. Use `useContext` to access the theme.

3. Apply conditional classes: `text-bg-light` for light theme, `text-bg-dark` for dark theme.

4. Create another component `ThemedTable.tsx` that displays a simple table with some sample data.

5. Apply theme-based classes to the table (e.g., `table-light` or `table-dark`).

6. Ensure both components adapt their appearance based on the theme.

---

### ✅ **Part D – Integrate in App.tsx**

**Instructions:**

1. In `App.tsx`, import necessary components and context.

2. Use `useState` to manage the theme state, initialized to "light".

3. Define a `toggleTheme` function that switches between "light" and "dark".

4. Wrap the app content with `ThemeContext.Provider`, passing `{ theme, toggleTheme }` as value.

5. Apply conditional classes to the root div for background: `bg-light` or `bg-dark`.

6. Apply conditional classes to the main heading for text color: `text-dark` or `text-light`.

7. Render the `ThemeToggler`, `ThemedCard`, and `ThemedTable` components inside the container.

8. Ensure Bootstrap CSS is imported.

---

### 💡 Output Example:

**Light Theme:**

- Page background: White/light
- Heading text: Dark
- Card: Light background with dark text
- Table: Light themed
- Button: "Switch to Dark"

**Dark Theme:**

- Page background: Dark
- Heading text: Light
- Card: Dark background with light text
- Table: Dark themed
- Button: "Switch to Light"

---

### 📝 Notes:

- Use Bootstrap for styling to keep it consistent.
- Test the toggle functionality to ensure all components update when the theme changes.
- This assignment demonstrates prop drilling avoidance using Context API.

---

### 🚀 Bonus:

- Add more themed components or customize the themes further (e.g., custom colors).
- Persist the theme choice in localStorage so it remembers the user's preference on reload.</content>
  <parameter name="filePath">c:\code\react-training\assignments\a17-theme-app.md
