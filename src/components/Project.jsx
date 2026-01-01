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
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // ✅ Resize
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ✅ Theme handling
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.filter = darkMode ? "brightness(0.8)" : "none";
    }

    if (isDesktop) {
      document.querySelectorAll(".elem").forEach((elem) => {
        gsap.to(elem, {
          backgroundColor: darkMode ? "#887c9224" : "white",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    }
  }, [darkMode, isDesktop]);

 // ✅ Hover animations (disable below or equal to 768px)
useEffect(() => {
  const elems = document.querySelectorAll(".elem");

  // ❌ Disable hover when screen <= 768
  if (window.innerWidth <= 768) {
    elems.forEach((elem) => {
      elem.onmouseenter = null;
      elem.onmouseleave = null;
    });
    return;
  }

  // ✅ Enable hover only when > 768
  elems.forEach((elem) => {
    const overlay = elem.querySelector(".overlay");
    const btnOverlay = elem.querySelector(".btn-overlay");
    const imgSrc = elem.getAttribute("data-img");

    const enter = () => {
      gsap.to(overlay, {
        y: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });

      if (btnOverlay) {
        gsap.to(btnOverlay, { y: 0, duration: 0.5 });
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
    };

    const leave = () => {
      gsap.to(overlay, { y: "-100%", duration: 0.5 });

      if (btnOverlay) {
        gsap.to(btnOverlay, { y: "-100%", duration: 0.5 });
      }

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
        });
      }
    };

    elem.onmouseenter = enter;
    elem.onmouseleave = leave;
  });

  // 🧹 Cleanup when resizing or unmounting
  return () => {
    elems.forEach((elem) => {
      elem.onmouseenter = null;
      elem.onmouseleave = null;
    });
  };
}, [isDesktop]); 



  // ✅ Scroll animation
  useEffect(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
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
          },
        }
      );
    });
  }, []);

  // ✅ Mobile tap feedback (very subtle)
  const handleTap = useCallback((e) => {
    gsap.to(e.currentTarget, {
      scale: 0.98,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
    });
  }, []);

  return (
    <div id="Projects" className="projects-sec" ref={ref}>
      <div className="p-left">
        <span>
          My <span>Projects</span>
        </span>
      </div>

      {isDesktop && (
        <div className="image-preview">
          <img ref={imageRef} alt="Preview" />
        </div>
      )}

      <div className="project-list">
        {/* 1 */}
        <a
          className="elem"
          data-img={Portfolio_thumbnail}
          href="https://daivat9228.github.io/daivatportfolio/"
          target="_blank"
          rel="noopener noreferrer"
          onTouchStart={handleTap}
        >
          <div className="overlay" />
          <img src={Portfolio_thumbnail} alt="" />
          <h2>1. Portfolio Website</h2>
          <h5> Portfolio website using React.js, Context API, GSAP, Framer Motion, and responsive UI.</h5>
        </a>

        {/* 2 */}
        <a
          className="elem"
          data-img={Quick_Eats_thumbnail}
          href="https://daivat9228.github.io/Quick-Eats/"
          target="_blank"
          rel="noopener noreferrer"
          onTouchStart={handleTap}
        >
          <div className="overlay" />
          <img src={Quick_Eats_thumbnail} alt="" />
          <h2>2. Quick Eats Website</h2>
          <h5> Food delivery web app using React.js, Tailwind CSS, Context API, and hooks.</h5>
        </a>

        {/* 3 */}
        <a
          className="elem"
          data-img={Food_Delivery_web_thumbnail}
          href="https://essense-next-js-project-sdiy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          onTouchStart={handleTap}
        >
          <div className="overlay" />
          <img src={Food_Delivery_web_thumbnail} alt="" />
          <h2>3. Essence E-commerce</h2>
          <h5>E-commerce web app using Next.js, Tailwind CSS, Context API, and Redux Toolkit.</h5>
        </a>

        {/* 4 */}
        <a
          className="elem"
          data-img={Quick_Eats_thumbnail}
          href="https://quick-eats-r-napp.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          onTouchStart={handleTap}
        >
          <div className="overlay" />
          <img src={Quick_Eats_thumbnail} alt="" />
          <h2>4. Quick Eats Mobile App</h2>
          <h5>React Native food delivery app with Redux Toolkit and Tailwind CSS.</h5>
        </a>
      </div>

      <div id="all-projects">
        <div className="button btn-elem">
          <div className="btn-overlay" />
          <a href="/projects">All Projects →</a>
        </div>
      </div>
    </div>
  );
});

export default Project;