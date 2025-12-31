function Card() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Tailwind Card</h2>
        <p className="text-gray-600 mb-4">
          This is a simple card built using Tailwind CSS.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Click Me
        </button>
      </div>
    </div>
  );
}
export default Card;
