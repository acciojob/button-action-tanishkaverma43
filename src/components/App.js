import React, { useState } from "react";
import "./App.css"; // Corrected import statement

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div id="main">
      <button id="click" onClick={() => setIsVisible(!isVisible)}> // Toggles the visibility
        {isVisible ? "Hide Paragraph" : "Show Paragraph"} // Changes button text based on visibility
      </button>
      <p id="para" className={isVisible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
      </p>
    </div>
  );
}

export default App;
