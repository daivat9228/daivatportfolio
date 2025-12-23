import React, {  useRef } from 'react';
import "./Hobby.css";

const Hobby = () => {
     const sliderRef = useRef(null);

  return (
    <div id="Hobbies" className="hobby-section">
      <div id="h-left">
        <span>
          My <span>Hobbies</span>
        </span>
      </div>

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
}

export default Hobby;