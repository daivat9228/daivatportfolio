import React, { useRef } from 'react';
import './Navbar.css';
import { Link } from "react-scroll";
import Toggle from "./toggle/Toggle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 

function Navbar() {
  const leftRef = useRef(null);
  const menuItemsRef = useRef([]);
  const buttonRef = useRef(null);


  useGSAP(() => {
    gsap.from(leftRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5
    });

    gsap.from(menuItemsRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      delay: 0.5,
    });

    gsap.from(buttonRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 2
    });

    menuItemsRef.current.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.2,
        fontWeight: "semibold",
        duration: 1,
        ease: "power3.out"
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1,
        fontWeight: "normal",
        duration: 1,
        ease: "power3.out"
      });
    });
  });
  }, []); 


  return (
    <div className="n-wrapper">
      <div className="n-left" ref={leftRef}>
        <div className="n-name">Daivat D.</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            {["Home", "Techstack", "Hobbies", "Timeline", "Projects",  "Contact"].map((item, index) => (
              <li key={index} ref={el => (menuItemsRef.current[index] = el)}>
                <Link activeClass="active" to={item} spy={true} smooth={true}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button className="button n-button" ref={buttonRef}>Contact</button>
      </div>
    </div>
  );
}

export default Navbar;