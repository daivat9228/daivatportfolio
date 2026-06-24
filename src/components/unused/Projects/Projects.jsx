// Import React, { useRef, useEffect } from "react";
// Import "./Intro.css";
// Import gsap from "gsap";
// Import { useGSAP } from "@gsap/react";

// Function Intro() {
//   const containerRef = useRef(null);
//   const spotlightRef = useRef(null);
//   const visualRef = useRef(null);
//   const badgeRef = useRef(null);
//   const greetingRef = useRef(null);
//   const nameRef = useRef(null);
//   const roleRef = useRef(null);
//   const descRef = useRef(null);
//   const ctasRef = useRef(null);
//   const techRef = useRef(null);
//   const sideLeftRef = useRef(null);
//   const sideRightRef = useRef(null);
//   const scrollRef = useRef(null);

//   // Scroll action helpers ──────────────────────────
//   const scrollToProjects = () => {
//     const el = document.getElementById("Projects");
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToContacts = () => {
//     const el = document.querySelector(".contacts");
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Spotlight follows mouse; scales on hover ────────────────
//   useEffect(() => {
//     const onMove = (e) => {
//       if (!spotlightRef.current) return;
//       gsap.to(spotlightRef.current, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 1.2,
//         ease: "power3.out",
//       });
//     };

//     const onEnter = () => gsap.to(spotlightRef.current, { scale: 1.5, duration: 0.5 });
//     const onLeave = () => gsap.to(spotlightRef.current, { scale: 1, duration: 0.5 });

//     const hoverEls = document.querySelectorAll("a, button, .tech-pill, .floating-element, .editor-tab");
//     hoverEls.forEach((el) => {
//       el.addEventListener("mouseenter", onEnter);
//       el.addEventListener("mouseleave", onLeave);
//     });

//     window.addEventListener("mousemove", onMove, { passive: true });
//     return () => {
//       window.removeEventListener("mousemove", onMove);
//       hoverEls.forEach((el) => {
//         el.removeEventListener("mouseenter", onEnter);
//         el.removeEventListener("mouseleave", onLeave);
//       });
//     };
//   }, []);

//   // Parallax visual tilt on mousemove ────────────────
//   useEffect(() => {
//     const visualInner = visualRef.current;
//     const glowBlobs = document.querySelectorAll(".glow-blob");
//     if (!visualInner) return;

//     const onMove = (e) => {
//       const xOffset = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
//       const yOffset = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

//       // Rotate code editor container in 3D perspective
//       gsap.to(visualInner, {
//         rotateY: -8 + xOffset * 15,
//         rotateX: 4 - yOffset * 12,
//         x: xOffset * 25,
//         y: yOffset * 25,
//         duration: 0.8,
//         ease: "power2.out",
//         overwrite: "auto",
//       });

//       // Subtle opposite shifting for background blobs to enhance depth
//       glowBlobs.forEach((blob, idx) => {
//         const factor = (idx + 1) * -15;
//         gsap.to(blob, {
//           x: xOffset * factor,
//           y: yOffset * factor,
//           duration: 1.5,
//           ease: "power2.out",
//           overwrite: "auto",
//         });
//       });
//     };

//     window.addEventListener("mousemove", onMove, { passive: true });
//     return () => {
//       window.removeEventListener("mousemove", onMove);
//     };
//   }, []);

//   // GSAP — Entrance Animation ─────────────────────────────
//   useGSAP(() => {
//     const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

//     // Background blobs fade in
//     tl.fromTo(".glow-blob",
//       { opacity: 0, scale: 0.8 },
//       { opacity: 0.8, scale: 1, duration: 2, ease: "power2.out", stagger: 0.2 },
//       0
//     );

//     // Side vertical texts
//     tl.from([sideLeftRef.current, sideRightRef.current], {
//       opacity: 0,
//       duration: 1.2,
//     }, 0.3);

//     // Left column staggered entrance
//     tl.from(badgeRef.current, { y: 30, opacity: 0, duration: 0.8 }, 0.4);
//     tl.from(greetingRef.current, { y: 25, opacity: 0, duration: 0.8 }, 0.5);
//     tl.from(nameRef.current, { y: 35, opacity: 0, duration: 0.8 }, 0.6);
//     tl.from(roleRef.current, { y: 30, opacity: 0, duration: 0.8 }, 0.7);
//     tl.from(descRef.current, { y: 30, opacity: 0, duration: 0.9 }, 0.8);
//     tl.from(ctasRef.current, { y: 25, opacity: 0, duration: 0.8 }, 0.9);
//     tl.from(techRef.current, { y: 20, opacity: 0, duration: 0.8 }, 1.0);

//     // Right column 3D rotation flip-in
//     tl.from(visualRef.current, {
//       rotateY: -45,
//       rotateX: 15,
//       scale: 0.85,
//       opacity: 0,
//       z: -150,
//       duration: 1.5,
//       ease: "expo.out"
//     }, 0.5);

//     // Floating badges orbit stagger
//     tl.from(".floating-element", {
//       scale: 0,
//       opacity: 0,
//       y: 40,
//       duration: 0.8,
//       stagger: 0.15,
//       ease: "back.out(1.5)"
//     }, 1.2);

//     // Scroll prompt
//     tl.from(scrollRef.current, {
//       opacity: 0,
//       y: 15,
//       duration: 0.8
//     }, 1.6);

//   }, { scope: containerRef });

//   return (
//     <section className="intro-dark" id="Home" ref={containerRef}>
//       {/* Mouse spotlight */}
//       <div className="spotlight" ref={spotlightRef} />

//       {/* Subtle noise */}
//       <div className="dark-grain" />

//       {/* Dynamic Mesh glow blobs */}
//       <div className="mesh-glow-container">
//         <div className="glow-blob glow-1" />
//         <div className="glow-blob glow-2" />
//         <div className="glow-blob glow-3" />
//       </div>

//       {/* Vertical side text */}
//       <div className="side-text side-text-left" ref={sideLeftRef}>
//         <span>Portfolio</span>
//         <span className="side-year">© 2026</span>
//       </div>
//       <div className="side-text side-text-right" ref={sideRightRef}>
//         <span>Scroll to explore</span>
//       </div>

//       {/* Main content grid */}
//       <div className="hero-content-wrapper">
//         {/* Left Column */}
//         <div className="hero-details">
//           {/* Availability badge */}
//           <div className="hero-badge" ref={badgeRef}>
//             <span className="avail-dot" />
//             <span>Open to Work — Available Now</span>
//           </div>

//           {/* Headline */}
//           <h1 className="hero-title">
//             <span className="hero-greeting" ref={greetingRef}>Hi, I'm</span>
//             <span className="hero-name-gradient" ref={nameRef}>Daivat Dhimmar</span>
//             <span className="hero-role" ref={roleRef}>Front-End Developer</span>
//           </h1>

//           {/* Short paragraph description */}
//           <p className="hero-desc" ref={descRef}>
//             I design and build high-performance, visually stunning interactive web applications.
//             Specializing in React, Next.js, and clean motion design to create memorable digital experiences.
//           </p>

//           {/* Action buttons */}
//           <div className="hero-ctas" ref={ctasRef}>
//             <button className="cta-btn" onClick={scrollToProjects}>
//               Explore Work <span>↗</span>
//             </button>
//             <button className="cta-ghost" onClick={scrollToContacts}>
//               Let's Connect
//             </button>
//           </div>

//           {/* Tech tags */}
//           <div className="hero-tech" ref={techRef}>
//             <span className="hero-tech-label">Core Tech:</span>
//             {["React", "Next.js", "TypeScript", "GSAP", "CSS Grid"].map((tech) => (
//               <span key={tech} className="tech-pill">{tech}</span>
//             ))}
//           </div>
//         </div>

//         {/* Right Column: Code Console */}
//         <div className="hero-visual">
//           <div className="visual-container-inner" ref={visualRef}>

//             {/* Floating badges */}
//             {/* React Icon */}
//             <div className="floating-element fe-1" title="React">
//               <svg viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="2">
//                 <circle cx="12" cy="12" r="2" fill="#61dafb"/>
//                 <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(30 12 12)"/>
//                 <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(90 12 12)"/>
//                 <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(150 12 12)"/>
//               </svg>
//             </div>

//             {/* TypeScript Icon */}
//             <div className="floating-element fe-2" title="TypeScript">
//               <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="100" height="100" rx="15" fill="#3178c6"/>
//                 <text x="32" y="72" fill="white" fontSize="42" fontFamily="Inter, sans-serif" fontWeight="bold">TS</text>
//               </svg>
//             </div>

//             {/* GSAP Icon */}
//             <div className="floating-element fe-3" title="GSAP Motion">
//               <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="100" height="100" rx="15" fill="#88ce02"/>
//                 <path d="M50 20 L30 55 L48 55 L38 80 L70 45 L52 45 Z" fill="white"/>
//               </svg>
//             </div>

//             {/* IDE Mockup */}
//             <div className="code-editor">
//               <div className="editor-header">
//                 <div className="editor-controls">
//                   <span className="control-dot dot-close" />
//                   <span className="control-dot dot-minimize" />
//                   <span className="control-dot dot-expand" />
//                 </div>
//                 <div className="editor-tabs">
//                   <div className="editor-tab">
//                     <span className="tab-icon">JS</span>
//                     <span>Profile.js</span>
//                   </div>
//                 </div>
//                 <div className="editor-lang">ES6 / React</div>
//               </div>

//               <div className="editor-body">
//                 <div className="code-line">
//                   <span className="line-number">1</span>
//                   <span className="line-content">
//                     <span className="code-keyword">const</span> <span className="code-def">developer</span> = <span className="code-bracket">{'{'}</span>
//                   </span>
//                 </div>
//                 <div className="code-line">
//                   <span className="line-number">2</span>
//                   <span className="line-content">
//                     {"  "}<span className="code-prop">name</span>: <span className="code-string">"Daivat Dhimmar"</span>,
//                   </span>
//                 </div>
//                 <div className="code-line">
//                   <span className="line-number">3</span>
//                   <span className="line-content">
//                     {"  "}<span className="code-prop">role</span>: <span className="code-string">"Front-End Developer"</span>,
//                   </span>
//                 </div>
//                 <div className="code-line">
//                   <span className="line-number">4</span>
//                   <span className="line-content">
//                     {"  "}<span className="code-prop">skills</span>: <span className="code-bracket">[</span>
//                     <span className="code-string">"React"</span>, <span className="code-string">"Next.js"</span>, <span className="code-string">"TS"</span>, <span className="code-string">"GSAP"</span>
//                     <span className="code-bracket">]</span>,
//                   </span>
//                 </div>
//                 <div className="code-line">
//                   <span className="line-number">5</span>
//                   <span className="line-content">
//                     {"  "}<span className="code-prop">focus</span>: <span className="code-string">"Pixel-Perfect Interactive UI"</span>,
//                   </span>
//                 </div>
//                 <div className="code-line">
//                   <span className="line-number">6</span>
//                   <span className="line-content">
//                     {"  "}<span className="code-prop">available</span>: <span className="code-number">true</span>
//                   </span>
//                 </div>
//                 <div className="code-line">
//                   <span className="line-number">7</span>
//                   <span className="line-content">
//                     <span className="code-bracket">{'}'}</span>;
//                   </span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator mouse */}
//       <div className="dark-scroll" ref={scrollRef}>
//         <div className="mouse-scroll">
//           <div className="mouse-wheel" />
//         </div>
//         <span className="scroll-label">scroll</span>
//       </div>

//     </section>
//   );
// }

// Export default Intro;
