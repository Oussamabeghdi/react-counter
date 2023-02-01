import { useState } from "react";
const Reset = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="reset">
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Reset;
