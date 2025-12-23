import React, { useContext, useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Portfolio_thumbnail from "../img/optimized/Portfolio_thumbnail.webp";
import Quick_Eats_thumbnail from "../img/optimized/Quick_Eats_thumbnail.webp";
import Food_Delivery_web_thumbnail from "../img/optimized/Food_Delivery_web_thumbnail.webp";
import { ThemeContext } from "../Context";
import "./Project.css";

gsap.registerPlugin(ScrollTrigger);

const Project = React.forwardRef((props, ref) => {
  const imageRef = useRef(null);
  const elemRef = useRef(null)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // ✅ Track screen width for responsive rendering
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    const timeoutId = setTimeout(() => {
      setIsDesktop(window.innerWidth >= 768);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Combined theme and desktop effects
  useEffect(() => {
    // Update image filter
    if (imageRef.current) {
      imageRef.current.style.filter = darkMode ? "brightness(0.8)" : "none";
    }

    // Update elem background (desktop only)
    if (isDesktop) {
      if (elemRef.current) {
        elemRef.current.style.backgroundColor = darkMode ? "#79727d2c" : "none";
      }

      // Update all elem backgrounds
      const elems = document.querySelectorAll(".elem");
      elems.forEach((elem) => {
        gsap.to(elem, {
          backgroundColor: darkMode ? "#887c9224" : "white",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    }
  }, [darkMode, isDesktop]);

  // Memoized event handlers
  const handleMouseEnter = useCallback((elem, overlay, imgSrc, btnOverlay) => {
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
  }, []);

  const handleMouseLeave = useCallback((overlay, btnOverlay) => {
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
  }, []);

  const handleClick = useCallback((link) => {
    if (link) window.open(link, "_blank");
  }, []);

  // Combined hover and click events (desktop only)
  useEffect(() => {
    if (!isDesktop) return;

    const elems = document.querySelectorAll(".elem");
    const cleanupFunctions = [];

    elems.forEach((elem) => {
      const overlay = elem.querySelector(".overlay");
      const imgSrc = elem.getAttribute("data-img");
      const btnOverlay = elem.querySelector(".btn-overlay");
      const link = elem.getAttribute("data-link");

      const mouseEnterHandler = () => handleMouseEnter(elem, overlay, imgSrc, btnOverlay);
      const mouseLeaveHandler = () => handleMouseLeave(overlay, btnOverlay);
      const clickHandler = () => handleClick(link);

      elem.addEventListener("mouseenter", mouseEnterHandler);
      elem.addEventListener("mouseleave", mouseLeaveHandler);
      elem.addEventListener("click", clickHandler);

      cleanupFunctions.push(() => {
        elem.removeEventListener("mouseenter", mouseEnterHandler);
        elem.removeEventListener("mouseleave", mouseLeaveHandler);
        elem.removeEventListener("click", clickHandler);
      });
    });

    return () => cleanupFunctions.forEach(cleanup => cleanup());
  }, [isDesktop, handleMouseEnter, handleMouseLeave, handleClick]);

  // Scroll animations (run once)
  useEffect(() => {
    const elems = document.querySelectorAll(".elem");
    const scrollTriggers = [];

    elems.forEach((elem) => {
      const trigger = gsap.fromTo(
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
      scrollTriggers.push(trigger);
    });

    return () => {
      scrollTriggers.forEach(trigger => {
        if (trigger.scrollTrigger) trigger.scrollTrigger.kill();
      });
    };
  }, []);

  return (
    <div id="Projects" className="projects-sec" ref={ref}>
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
          <img src={Portfolio_thumbnail} alt="Portfolio_thumbnail" loading="lazy" />
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
          <img src={Quick_Eats_thumbnail} alt="Quick_Eats_thumbnail" loading="lazy" />
          <h2>2. Quick Eats website</h2>
          <h5>
            Food delivery web app using React.js, Tailwind CSS, useState,
            useEffect, map/filter/forEach methods, Context API for robust state management.
          </h5>
        </div>

        <div
          className="elem"
          data-img={Food_Delivery_web_thumbnail}
          data-link="https://essense-next-js-project-sdiy.vercel.app/"
        >
          <div className="overlay"></div>
          <img src={Food_Delivery_web_thumbnail} alt="Essence_e-commerce_web_thumbnail" loading="lazy" />
          <h2>3. Essence e-commerce website</h2>
          <h5>
            Essence e-commerce web app using NextJS, Tailwind CSS, useState,
            useEffect, map/filter/forEach methods, Context API, and Redux
            Toolkit for robust state management.
          </h5>
        </div>

        <div className="elem" data-img={Quick_Eats_thumbnail} data-link="https://quick-eats-r-napp.vercel.app/">
          <div className="overlay"></div>
          <img src={Quick_Eats_thumbnail} alt="" loading="lazy" />
          <h2>4. Quick Eats mobile App</h2>
          <h5>
            Food delivery mobile app using React native, Tailwind CSS, useState, useEffect, map/filter/forEach methods, Context API, and Redux Toolkit for robust state management.
          </h5>
        </div>
      </div>

      <div id="all-projects">
        <div className="button btn-elem">
          <div className="btn-overlay"></div>
          <a href='/projects'>All Projects {" →"}</a>
        </div>
      </div>
    </div>
  );
});

export default Project;
