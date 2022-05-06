import React, { useState } from "react";
import "../styles/App.css";
import star from "../star.png";
const App = () => {
  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(300);
  function handleclick() {
    console.log("handleclick");
    setHeight(height + 2);
    setWidth(width + 2);
  }

  return (
    <div id="main">
      <img
        src={star}
        alt="star"
        onClick={handleclick}
        height="{height}px"
        width="{width}px"
      />
    </div>
  );
};

export default App;
