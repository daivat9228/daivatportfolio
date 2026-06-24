import React, { useRef, useEffect } from "react";
import "./Techstack.css";
import HTMLimg from "../../../assets/images/html.png";
import CSSpng from "../../../assets/images/css3.png";
import Javascript from "../../../assets/images/javascript-logo.png";
import Reacto from "../../../assets/images/react-native-logo.png";
import TailwindCSS from "../../../assets/images/TailwindCSS.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Tech data ─────────────────────────────────────────────── */
const OUTER_TECHS = [
  { name: "HTML5", img: HTMLimg, color: "#e34c26" },
  { name: "CSS3", img: CSSpng, color: "#264de4" },
  { name: "JavaScript", img: Javascript, color: "#f7df1e" },
  { name: "React", img: Reacto, color: "#61dbfb" },
  { name: "Tailwind", img: TailwindCSS, color: "#38bdf8" },
];

const INNER_TECHS = [
  { abbr: "TS", name: "TypeScript", color: "#3178c6" },
  { abbr: "GS", name: "GSAP", color: "#88ce02" },
  { abbr: "NX", name: "Next.js", color: "#c084fc" },
];

/* ─────────────────────────────────────────────────────────── */

const Techstack = () => {
  const leftRef = useRef(null);
  const systemRef = useRef(null);
  const centerTextRef = useRef(null);
  const centerLabelRef = useRef(null);
  const outerItems = useRef([]);
  const bubbles = useRef([]);
  const innerItems = useRef([]);

  /* ── Entrance ──────────────────────────────────────────── */
  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      systemRef.current,
      { scale: 0.78, opacity: 0, rotation: -15 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.3,
        ease: "back.out(1.3)",
        scrollTrigger: {
          trigger: systemRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  /* ── Hover: icon scales & glows, center label updates ──── */
  const handleEnter = (i) => {
    const item = outerItems.current[i];
    const bubble = bubbles.current[i];

    // Pause this icon's orbit
    item.style.animationPlayState = "paused";

    // Scale & glow the bubble
    gsap.to(bubble, {
      scale: 1.32,
      duration: 0.45,
      ease: "back.out(2)",
    });

    // Center label: swap "STACK" → tech name
    gsap.to(centerTextRef.current, { opacity: 0, y: -8, duration: 0.2 });
    gsap.to(centerLabelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      delay: 0.15,
    });
    if (centerLabelRef.current)
      centerLabelRef.current.textContent = OUTER_TECHS[i].name;

    // Dim other outer items
    outerItems.current.forEach((el, j) => {
      if (j !== i) gsap.to(el, { opacity: 0.2, duration: 0.3 });
    });
    innerItems.current.forEach((el) =>
      gsap.to(el, { opacity: 0.15, duration: 0.3 }),
    );
  };

  const handleLeave = (i) => {
    const item = outerItems.current[i];
    const bubble = bubbles.current[i];

    // Scale back, then resume orbit
    gsap.to(bubble, {
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
      onComplete: () => {
        item.style.animationPlayState = "running";
      },
    });

    // Center label: swap back to "STACK"
    gsap.to(centerLabelRef.current, { opacity: 0, y: 6, duration: 0.2 });
    gsap.to(centerTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      delay: 0.1,
    });

    // Restore others
    outerItems.current.forEach((el) =>
      gsap.to(el, { opacity: 1, duration: 0.3 }),
    );
    innerItems.current.forEach((el) =>
      gsap.to(el, { opacity: 1, duration: 0.3 }),
    );
  };

  /* ── Render ─────────────────────────────────────────────── */
  return (
    <section className="ts-section" id="Techstack">
      {/* Left: editorial text */}
      <div className="ts-left" ref={leftRef}>
        <span className="ts-overline">What I build with</span>
        <h2 className="ts-heading">
          Tech
          <br />
          <span className="ts-heading-accent">Stack</span>
        </h2>
        <p className="ts-para">
          Strong foundation in HTML, CSS, JavaScript, and TypeScript. Proficient
          in React, Next.js, and Tailwind CSS. Experienced with GSAP for
          cinematic animations and building scalable, responsive interfaces.
        </p>
        <div className="ts-tag-row">
          {["React", "Next.js", "TypeScript", "GSAP", "Tailwind"].map((t) => (
            <span key={t} className="ts-tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right: orbit system */}
      <div className="ts-right">
        <div className="ts-orbit-system" ref={systemRef}>
          {/* Dashed SVG orbit rings (spin slowly) */}
          <svg className="ts-ring-svg" viewBox="0 0 400 400" aria-hidden="true">
            <circle
              cx="200"
              cy="200"
              r="150"
              stroke="rgba(128,68,178,0.22)"
              strokeWidth="1"
              strokeDasharray="6 11"
              fill="none"
            />
            <circle
              cx="200"
              cy="200"
              r="78"
              stroke="rgba(192,132,252,0.15)"
              strokeWidth="1"
              strokeDasharray="4 9"
              fill="none"
            />
          </svg>

          {/* Glowing center node */}
          <div className="ts-center">
            <div className="ts-center-glow" aria-hidden="true" />
            <div className="ts-center-pulse" aria-hidden="true" />
            <span className="ts-center-text" ref={centerTextRef}>
              STACK
            </span>
            <span className="ts-center-label" ref={centerLabelRef}>
              HTML5
            </span>
          </div>

          {/* Inner orbit — decorative, counter-clockwise */}
          {INNER_TECHS.map((tech, i) => (
            <div
              key={tech.abbr}
              className="ts-orbit-item ts-orbit-item--inner"
              style={{ animationDelay: `${-(i * (10 / 3)).toFixed(2)}s` }}
              ref={(el) => (innerItems.current[i] = el)}
              title={tech.name}
            >
              <div
                className="ts-inner-badge"
                style={{ "--badge-color": tech.color }}
              >
                {tech.abbr}
              </div>
            </div>
          ))}

          {/* Outer orbit — interactive, clockwise */}
          {OUTER_TECHS.map((tech, i) => (
            <div
              key={tech.name}
              className="ts-orbit-item ts-orbit-item--outer"
              style={{ animationDelay: `${-(i * (18 / 5)).toFixed(2)}s` }}
              ref={(el) => (outerItems.current[i] = el)}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={() => handleLeave(i)}
              title={tech.name}
            >
              <div
                className="ts-bubble"
                ref={(el) => (bubbles.current[i] = el)}
              >
                <img src={tech.img} alt={tech.name} draggable={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techstack;
