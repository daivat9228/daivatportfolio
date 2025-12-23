import React, { useContext, useEffect, useRef } from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { ThemeContext } from "../../Context";
import gsap from "gsap";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const tButtonRef = useRef(null);
  const bodyRef = useRef(document.body);

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });

    // Animate the switch knob
    gsap.to(tButtonRef.current, {
      x: darkMode ? 16 : 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // Animate background
    gsap.to(bodyRef.current, {
      backgroundColor: darkMode ? "#ffffff" : "#000000ff",
      color: darkMode ? "#000000ff" : "#ffffff",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  // Sync toggle knob on load
  useEffect(() => {
    gsap.set(tButtonRef.current, {
      x: darkMode ? 0 : 16,
    });
  }, [darkMode]);

  return (
    <div className="toggle" onClick={handleClick}>
      <Sun />
      <Moon />
      <div className="t-button" ref={tButtonRef}></div>
    </div>
  );
};

export default Toggle;
