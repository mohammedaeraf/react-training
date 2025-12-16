import { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import type { Theme } from "./Context/ThemeContext";
import ThemeToggler from "./Components/ThemeToggler";
import ThemedCard from "./Components/ThemedCard";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemedTable from "./Components/ThemedTable";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-vh-100 p-5 ${
          theme === "light" ? "bg-light" : "bg-dark"
        }`}
      >
        <div className="container">
          <h1
            className={`mb-4 ${theme === "light" ? "text-dark" : "text-light"}`}
          >
            React Theme Toggle using Bootstrap
          </h1>
          <ThemeToggler />
          <ThemedCard />
          <ThemedTable />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
