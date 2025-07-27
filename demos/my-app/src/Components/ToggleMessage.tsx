import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible ? <p>Hello, this is a message!</p> : <p></p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default ToggleMessage;
