import { useState } from "react";
import "./App.css";
import ThemeToggler from "./Components/ThemeToggler";
import { ThemeContext } from "./Context/ThemeContext";
import ThemeCard from "./Components/ThemeCard";

function App() {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container">
        <h1>Use Context Demo</h1>
        <ThemeToggler></ThemeToggler>
        <ThemeCard></ThemeCard>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
