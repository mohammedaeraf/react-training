import ThemedComponent from "./Components/ThemedComponent";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      <div className="min-vh-100 p-5">
        <div className="container">
          <h1 className="mb-4">React UseContext Example</h1>
          <ThemedComponent></ThemedComponent>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
