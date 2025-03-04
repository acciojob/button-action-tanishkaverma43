import React, { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div id="main">
      <button id="click" onClick={() => setIsVisible(true)}>
        Show Paragraph
      </button>
      <p id="para" className={isVisible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
      </p>
    </div>
  );
}

export default App;
