import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Project.css";
import Portfolio_thumbnail from "../img/Portfolio_thumbnail.png";
import Quick_Eats_thumbnail from "../img/Quick_Eats_thumbnail.png";
import Food_Delivery_web_thumbnail from "../img/Food_Delivery_web_thumbnail.png";
import { ThemeContext } from "../Context";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const imageRef = useRef(null);
  const elemRef = useRef(null)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // ✅ Track screen width for responsive rendering
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Update image styles based on theme
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.filter = darkMode ? "brightness(0.8)" : "none";
    }
  }, [darkMode]);

  // ✅ Update elem color based on theme
  useEffect(() => {
    if (!isDesktop) return; 
    if(elemRef.current){
      elemRef.current.style.backgroundColor = darkMode ? "#887c9224" : "none"
    }
  }, [darkMode]);

  // ✅ Hover background update only for desktop
  useEffect(() => {
    if (!isDesktop) return;
    const elems = document.querySelectorAll(".elem");

    elems.forEach((elem) => {
      gsap.to(elem, {
        backgroundColor: darkMode ? "#887c9224" : "white",
        duration: 0.3,
        ease: "power2.inOut",
      });
    });
  }, [darkMode, isDesktop]);

  // ✅ Hover preview only for desktop
  useEffect(() => {
    if (!isDesktop) return;

    const elems = document.querySelectorAll(".elem");

    elems.forEach((elem) => {
      const overlay = elem.querySelector(".overlay");
      const imgSrc = elem.getAttribute("data-img");
      const btnOverlay = elem.querySelector(".btn-overlay");

      // Mouse Enter
      elem.addEventListener("mouseenter", () => {
        gsap.to(overlay, { y: 0, duration: 0.5, ease: "power3.inOut" });
        if (btnOverlay) {
          gsap.to(btnOverlay, { y: 0, duration: 0.5, ease: "power3.inOut" });
        }
        if (imageRef.current) {
          imageRef.current.src = imgSrc;
          gsap.to(imageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
          });
        }
      });

      // Mouse Leave
      elem.addEventListener("mouseleave", () => {
        gsap.to(overlay, { y: "-100%", duration: 0.5, ease: "power3.inOut" });
        if (btnOverlay) {
          gsap.to(btnOverlay, {
            y: "-100%",
            duration: 0.5,
            ease: "power3.inOut",
          });
        }
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            ease: "power3.in",
          });
        }
      });
    });
  }, [isDesktop]);

  // ✅ Click to open link (always active)
  useEffect(() => {
    const elems = document.querySelectorAll(".elem");
    elems.forEach((elem) => {
      elem.addEventListener("click", () => {
        const link = elem.getAttribute("data-link");
        if (link) window.open(link, "_blank");
      });
    });
  }, []);

  // ✅ Scroll animations
  useEffect(() => {
    const elems = document.querySelectorAll(".elem");

    elems.forEach((elem) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div id="Projects" className="projects-sec">
      <div className="p-left">
        <span>
          My <span>Projects</span>
        </span>
      </div>

      {/* ✅ Preview only on desktop */}
      {isDesktop && (
        <div className="image-preview">
          <img ref={imageRef} alt="Preview" />
        </div>
      )}

      <div className="project-list">
        <div
          className="elem"
          data-img={Portfolio_thumbnail}
          data-link="https://daivat9228.github.io/daivatportfolio/"
        >
          <div className="overlay"></div>
          <img src={Portfolio_thumbnail} alt="Portfolio_thumbnail" />
          <h2>1. Portfolio Website</h2>
          <h5>
            Portfolio website using React.js with hands-on experience in Context
            API, useState, mapping methods, GSAP, Framer Motion, and responsive
            UI using CSS.
          </h5>
        </div>

        <div
          className="elem"
          data-img={Quick_Eats_thumbnail}
          data-link="https://daivat9228.github.io/Quick-Eats/"
        >
          <div className="overlay"></div>
          <img src={Quick_Eats_thumbnail} alt="Quick_Eats_thumbnail" />
          <h2>2. Quick Eats website</h2>
          <h5>
            Food delivery web app using React.js, Tailwind CSS, useState,
            useEffect, map/filter/forEach methods, Context API for robust state management.
          </h5>
        </div>

        <div
          className="elem"
          data-img={Food_Delivery_web_thumbnail}
          data-link="https://daivat9228.github.io/food-delivery-web/"
        >
          <div className="overlay"></div>
          <img src={Food_Delivery_web_thumbnail} alt="Food_Delivery_web_thumbnail" />
          <h2>3. Food Delivery website</h2>
          <h5>
            Food delivery web app using React.js, Tailwind CSS, useState,
            useEffect, map/filter/forEach methods, Context API, and Redux
            Toolkit for robust state management.
          </h5>
        </div>

        <div className="elem" data-img={Quick_Eats_thumbnail} data-link="https://quick-eats-r-napp.vercel.app/">
          <div className="overlay"></div>
          <img src={Quick_Eats_thumbnail} alt="" />
          <h2>4. Food Delivery mobile App</h2>
          <h5>
            Food delivery mobile app using React native, Tailwind CSS, useState, useEffect, map/filter/forEach methods, Context API, and Redux Toolkit for robust state management.
          </h5>
        </div>

        <div className="elem" data-img="https://picsum.photos/800/500?random=4">
          <div className="overlay"></div>
          <img src="https://picsum.photos/800/500?random=4" alt="" />
          <h2>5. Lorem, ipsum.</h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque! Facere, quam. Fuga, adipisci facilis! Iure tempore corporis perspiciatis nobis.
          </h5>
        </div>
      </div>

      <div id="all-projects">
        <div className="btn-elem">
          <div className="btn-overlay"></div>
          <a>All Projects {"->"}</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
