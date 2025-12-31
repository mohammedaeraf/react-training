function Card() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white w-80 shadow-sm rounded p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Mongo DB & Express JS
        </h2>
        <p className="text-gray-600 mb-4 italic">
          Learn Backend Development using Mongo DB & Express JS
        </p>
        <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
export default Card;
