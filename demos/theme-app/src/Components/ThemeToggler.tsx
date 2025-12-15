import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function ThemeToggler() {
  const context = useContext(ThemeContext);

  return (
    <button className="btn btn-primary mb-4" onClick={context.toggleTheme}>
      Switch to {context.theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

export default ThemeToggler;
