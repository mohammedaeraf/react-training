import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function ThemedComponent() {
  const context = useContext(ThemeContext);
  return (
    <div>
      <h2>Themed Component</h2>
      <p>
        This component is styled based on the current theme{" "}
        <strong>{context.theme}</strong>.
      </p>
    </div>
  );
}
export default ThemedComponent;
