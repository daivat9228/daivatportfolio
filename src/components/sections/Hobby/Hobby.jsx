import React, { useRef } from "react";
import "./Hobby.css";

const Hobby = () => {
  const sliderRef = useRef(null);

  return (
    <div id="Hobbies" className="hobby-section">
      <header className="h-header">
        <span className="h-overline">Beyond the screen</span>
        <h2 className="h-heading">
          My <span className="h-heading-accent">Hobbies</span>
        </h2>
      </header>

      <div id="hobby-slidder-wrapper">
        <div id="hobby-slidder" ref={sliderRef}>
          <div className="hobby">
            <h1>MOVIES</h1>
            <div id="dot"></div>
            <h1>SKETCHING</h1>
            <div id="dot"></div>
            <h1>TRAVELLING</h1>
            <div id="dot"></div>
            <h1>ART</h1>
            <div id="dot"></div>
            <h1>PAINTING</h1>
            <div id="dot"></div>
            <h1>PHOTOGRAPHY</h1>
            <div id="dot"></div>
          </div>
          <div className="hobby">
            <h1>SKETCHING</h1>
            <div id="dot"></div>
            <h1>MOVIES</h1>
            <div id="dot"></div>
            <h1>ART</h1>
            <div id="dot"></div>
            <h1>TRAVELLING</h1>
            <div id="dot"></div>
            <h1>PHOTOGRAPHY</h1>
            <div id="dot"></div>
            <h1>PAINTING</h1>
            <div id="dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
