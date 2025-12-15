import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="btn btn-primary mb-4"
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

export default ThemeToggler;
