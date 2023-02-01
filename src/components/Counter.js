import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="buttons">
        <button
          className="bouton+"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>

        <button
          className="bouton-"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Counter;
