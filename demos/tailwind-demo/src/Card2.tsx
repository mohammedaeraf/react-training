function Card2() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="shadow-sm w-80 m-6 p-6 rounded-lg bg-white">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Tailwind Card</h2>
        <p className="text-gray-600 mb-4">
          This is a simple card built using Tailwind CSS.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
}
export default Card2;
