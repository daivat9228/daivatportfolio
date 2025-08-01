import React, { useRef, useEffect } from "react";
import "./Techstack.css";
import { motion } from "framer-motion";
import HTMLimg from "../img/html.png";
import CSSpng from "../img/css3.png";
import Javascript from "../img/javascript-logo.png";
import Reacto from "../img/react-native-logo.png";
import Bootstrap from "../img/bootstrap-framework-logo.png";
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
          As an aspiring intern, I have a basic understanding of HTML, CSS,
          JavaScript, and React JS. I am familiar with HTML tags, CSS styling,
          and JavaScript functions. In addition, I have a good grasp of React JS
          components and their implementation. With my foundational skills in
          web development, I am excited to learn and grow as an intern in a
          supportive and collaborative environment.
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
            <img src={Bootstrap} alt="btsrp png" />
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