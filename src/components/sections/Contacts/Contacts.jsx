import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contacts.css";

gsap.registerPlugin(ScrollTrigger);

const Contacts = ({ projectRef }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const wrapRef = useRef(null);

  const handleLeftClick = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRightClick = () => {
    window.location.href = "mailto:daivat796@gmail.com";
  };

  useEffect(() => {
    if (!wrapRef.current) return;

    // Left card: slide in from left
    gsap.fromTo(
      leftRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Right card: slide in from right, slight delay
    gsap.fromTo(
      rightRef.current,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.12,
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Stagger inner text elements
    const textEls = wrapRef.current.querySelectorAll(
      ".section-label, h2, h1, p, .contact-btn",
    );
    if (textEls.length) {
      gsap.fromTo(
        textEls,
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.2,
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="contacts" id="Contact">
      <div className="contacts-container" ref={wrapRef}>
        <div className="contacts-left" ref={leftRef} onClick={handleLeftClick}>
          <div className="portfolio-card">
            <span className="section-label">
              PORTFOLIO <span>→</span>
            </span>
            <h2>
              Personal & <br /> Professional Projects{" "}
            </h2>
          </div>
          <div className="description-card">
            <p>Web Design, Webflow Development, and Creative Development.</p>
          </div>
        </div>

        <div
          className="contacts-right"
          ref={rightRef}
          onClick={handleRightClick}
        >
          <div className="get-in-touch-card">
            <span className="section-label">GET IN TOUCH </span>
            <h2>
              Let's get to it, <br />
              together.
            </h2>
          </div>

          <div className="start-project-card">
            <h1>Hire Me, if you can </h1>
            <span className="contact-btn">
              Contact me <span>→</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
