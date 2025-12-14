import "./App.css";
import ThemeComponent from "./Components/ThemeComponent";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value="light">
      <div>
        <h1>Use Context Demo</h1>
        <ThemeComponent></ThemeComponent>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
