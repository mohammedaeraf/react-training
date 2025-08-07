import { useEffect, useState } from "react";

// Functional component for a simple counter app
function Counter2() {
  // Declare state variable 'counter' with initial value 0
  let [counter, setCounter] = useState(0);

  // useEffect runs every time 'counter' changes
  useEffect(() => {
    // Log the current value of counter to the console
    console.log(`The value of counter = ${counter}`);
  }, [counter]); // Dependency array: effect runs when 'counter' changes

  return (
    <div className="m-3">
      {/* Heading for the counter app */}
      <h1 className="text-primary my-3">Counter App</h1>
      <div>
        {/* Increment button increases counter by 1 */}
        <button
          className="btn btn-success"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increment
        </button>
        {/* Decrement button decreases counter by 1 */}
        <button
          className="btn btn-danger mx-3"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Decrement
        </button>
      </div>
      {/* Display the current count */}
      <h4 className="mt-3">
        Count: <span className="badge bg-primary">{counter}</span>
      </h4>
    </div>
  );
}
export default Counter2;
