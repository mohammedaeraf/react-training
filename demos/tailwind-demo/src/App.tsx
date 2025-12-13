import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Tailwind Card</h2>
        <p className="text-gray-600 mb-4">
          This is a simple card built using Tailwind CSS. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Eaque saepe dolorem perferendis
          aspernatur dolore, totam commodi tempore. In voluptatibus, adipisci
          vero, quae fugiat repudiandae laboriosam atque labore sequi maiores
          quos.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
