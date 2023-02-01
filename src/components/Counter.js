import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="display">
      {/* {counter <= 0 && <button> - </button>} */}
      <div className="buttons">
        <button
          className="bouton"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <div className="counter">{counter}</div>
        <button
          className="bouton"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="boutonreset"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Counter;
