import React, { useRef } from "react";
import "./Footer.css";
import Wave from "../img/wave.svg";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Footer() {
  const footerRef = useRef(null);
  const iconsRef = useRef([]);
  const waveRef = useRef(null);

  useGSAP(() => {
    // Animate footer on load
    gsap.from(footerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });

    // Floating + hover scale effect on icons
    iconsRef.current.forEach((icon) => {
      // Floating animation
      gsap.to(icon, {
        y: -5,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });

      // Hover scale
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });

    // Subtle wave motion
    gsap.to(waveRef.current, {
      x: 20,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });
  }, []);

  const iconLinks = [
    "https://instagram.com/daivat__dhimmar",
    "https://facebook.com",
    "https://www.linkedin.com/in/daivat-dhimmar-3903a1172",
    "https://github.com/daivat9228",
  ];

  const iconComponents = [Insta, Facebook, Linkedin, Github];

  return (
    <div className="footer" ref={footerRef}>
      <img src={Wave} alt="footer wave" ref={waveRef} />
      <div className="f-content">
        <span>daivat796@gmail.com</span>
        <div className="f-icons">
          {iconComponents.map((Icon, index) => (
             <div
              key={index}
              ref={(el) => (iconsRef.current[index] = el)}
              style={{ cursor: "pointer" }}
              onClick={() => window.open(iconLinks[index], "_blank")}
            >
              <Icon color="white" size="3rem" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
