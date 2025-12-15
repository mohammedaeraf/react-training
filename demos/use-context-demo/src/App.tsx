import { useState } from "react";
import "./App.css";
import ThemeToggler from "./Components/ThemeToggler";
import { ThemeContext } from "./Context/ThemeContext";
import ThemeCard from "./Components/ThemeCard";

// Main App component demonstrating React Context for theme management
function App() {
  // State to hold the current theme, initialized to "light"
  const [theme, setTheme] = useState<string>("light");

  // Function to toggle between "light" and "dark" themes
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    // Provide the theme context to child components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container">
        <h1>Use Context Demo</h1>
        {/* Component that allows toggling the theme */}
        <ThemeToggler></ThemeToggler>
        {/* Card component that adapts its styling based on the theme */}
        <ThemeCard></ThemeCard>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
