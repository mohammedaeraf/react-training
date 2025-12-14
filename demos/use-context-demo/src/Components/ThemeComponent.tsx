import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function ThemeComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div className="bg-secondary">
      <h2>Theme Component</h2>
      <p className={theme == "dark" ? "text-white" : "text-dark"}>
        Current selected theme is {theme}
      </p>
    </div>
  );
}
export default ThemeComponent;
