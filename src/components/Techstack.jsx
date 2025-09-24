import React, { useRef, useEffect } from "react";
import "./Techstack.css";
import { motion } from "framer-motion";
import HTMLimg from "../img/html.png";
import CSSpng from "../img/css3.png";
import Javascript from "../img/javascript-logo.png";
import Reacto from "../img/react-native-logo.png";
// import Bootstrap from "../img/bootstrap-framework-logo.png";
import TailwindCSS from "../img/TailwindCSS.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Techstack = () => {
  const tLeftRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      tLeftRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tLeftRef.current,
          start: "top 80%",
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  
  return (
    <div className="techstack" id="Techstack">
      {/* left side */}
      <div className="t-left" ref={tLeftRef}>
        <span>Tech</span>
        <span>Stack</span>
        <div>
         I have a basic foundation in HTML, CSS, Tailwind CSS, and JavaScript, with hands-on experience in building responsive and visually appealing user interfaces. I am proficient in React JS, focusing on component-based architecture and efficient state management. Additionally, I am familiar with React Native for creating cross-platform mobile applications and have explored GSAP to add smooth and engaging animations to projects. With these skills, I continuously strive to enhance my expertise and deliver clean, user-friendly, and dynamic web experiences..
        </div>
      </div>
      <div className="t-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="t-mainCircle"
        >
          <div className="t-secCircle">
            <img src={HTMLimg} alt="html png" />
          </div>
          <div className="t-secCircle" id="t-secCircle2">
            <img src={TailwindCSS} alt="btsrp png" />
          </div>
          <div className="t-secCircle">
            <img src={Reacto} alt="react png" />
          </div>
          <div className="t-secCircle">
            <img src={CSSpng} alt="css" />
          </div>
          <div className="t-secCircle" id="t-secCircle3">
            <img src={Javascript} alt="js" />
          </div>
        </motion.div>
        
        {/* background circle  */}
        <div className="t-backCircle blueCircle"></div>
        <div className="t-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Techstack;