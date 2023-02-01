import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Reset from "./components/Reset";

function App() {
  return (
    <div className="App">
      <p>React Counter</p>
      <div className="container">
        <Counter />
        <Reset />
      </div>
    </div>
  );
}

export default App;
