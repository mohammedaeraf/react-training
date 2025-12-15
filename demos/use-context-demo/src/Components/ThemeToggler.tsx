import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

// Component that provides a button to toggle between light and dark themes
function ThemeToggler() {
  // Access the theme context to get current theme and toggle function
  let context = useContext(ThemeContext);
  return (
    // Button that toggles the theme when clicked
    // Displays the opposite theme as the current one
    <button className="btn btn-primary m-4" onClick={context.toggleTheme}>
      Switch Theme to {context.theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
export default ThemeToggler;
