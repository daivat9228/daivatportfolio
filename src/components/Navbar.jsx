import React, { useRef, useState } from 'react';
import './Navbar.css';
import { Link } from "react-scroll";
import Toggle from "./toggle/Toggle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 

function Navbar() {
  const leftRef = useRef(null);
  const menuItemsRef = useRef([]);
  const buttonRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useGSAP(() => {
    gsap.from(leftRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5
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


  const toggleNavbar = () => {
    if (!isNavVisible) {
      setIsNavVisible(true);
      
      setTimeout(() => {
        gsap.fromTo(".n-list ul li", 
          { x: 50, opacity: 0, filter: "blur(10px)" },
          { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.4, stagger: 0.15 }
        );
      }, 20);
    } else {
      gsap.to(".n-list ul li", {
        x: 50, opacity: 0, filter: "blur(10px)", duration: 0.3, stagger: -0.1,
        onComplete: () => setIsNavVisible(false)
      });
    }
  };

  return (
    <div className="n-wrapper">
      <div className="n-left" ref={leftRef}>
        <div className="n-name">Daivat D.</div>
        <Toggle />
      </div>
      <div className="n-right">
        {isNavVisible && (
          <div className="n-list">
            <ul>
              {["Home", "Techstack", "Hobbies", "Timeline", "Projects"].map((item, index) => (
                <li key={index} ref={el => (menuItemsRef.current[index] = el)}>
                  <Link activeClass="active" to={item} spy={true} smooth={true}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="desktop-hamburger" onClick={toggleNavbar}>
          <span>---</span>
        </div >
        <div className=' n-button'><button className="button" ref={buttonRef}>CONTACT</button></div>
      </div>
    </div>
  );
}

export default Navbar;