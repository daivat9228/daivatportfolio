import React, { useRef, useEffect } from "react";
import timelineElements from "../../../data/timelineElements";
import gsap from "gsap";
import "./Timeline.css";

/* ── Icon components ─────────────────────────────────────────── */
const WorkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const StudyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────── */

const Timeline = () => {
  const rowRefs = useRef([]);
  const bodyRefs = useRef([]);
  const accentRefs = useRef([]);
  const chevRefs = useRef([]);

  /* ── Staggered entrance on scroll ─────────────────────────── */
  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = rows.indexOf(entry.target);
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            delay: i * 0.07,
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    rows.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  /* ── Hover: expand row ─────────────────────────────────────── */
  const handleEnter = (i) => {
    const body = bodyRefs.current[i];
    const accent = accentRefs.current[i];
    const chev = chevRefs.current[i];
    if (!body) return;

    gsap.to(body, {
      height: body.scrollHeight,
      duration: 0.52,
      ease: "power4.out",
    });
    gsap.to(accent, {
      scaleY: 1,
      duration: 0.45,
      ease: "expo.out",
      delay: 0.04,
    });
    gsap.to(chev, { rotation: 180, duration: 0.35, ease: "power2.out" });
  };

  /* ── Hover: collapse row ───────────────────────────────────── */
  const handleLeave = (i) => {
    const body = bodyRefs.current[i];
    const accent = accentRefs.current[i];
    const chev = chevRefs.current[i];
    if (!body) return;

    gsap.to(body, { height: 0, duration: 0.4, ease: "power3.in" });
    gsap.to(accent, { scaleY: 0, duration: 0.35, ease: "power3.in" });
    gsap.to(chev, { rotation: 0, duration: 0.3, ease: "power2.in" });
  };

  return (
    <section className="tl-section" id="Timeline">
      {/* ── Section header ─────────────────────────────────── */}
      <header className="tl-header">
        <span className="tl-overline">Career &amp; Education</span>
        <h2 className="tl-heading">
          My <span className="tl-heading-accent">Timeline</span>
        </h2>
        <div className="tl-header-line" />
      </header>

      {/* ── Accordion rows ─────────────────────────────────── */}
      <div className="tl-accordion">
        {timelineElements.map((el, i) => (
          <div
            key={el.id}
            className={`tl-row tl-row--${el.icon}`}
            ref={(r) => (rowRefs.current[i] = r)}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={() => handleLeave(i)}
          >
            {/* Left purple accent bar */}
            <span
              className="tl-accent"
              ref={(r) => (accentRefs.current[i] = r)}
              aria-hidden="true"
            />

            {/* Always-visible row header */}
            <div className="tl-row-head">
              <span className="tl-index">{String(i + 1).padStart(2, "0")}</span>

              <span className="tl-date">{el.date}</span>

              <span className={`tl-badge tl-badge--${el.icon}`}>
                {el.icon === "work" ? <WorkIcon /> : <StudyIcon />}
              </span>

              <div className="tl-title-group">
                <span className="tl-title">{el.title}</span>
                {el.location && (
                  <span className="tl-location">{el.location}</span>
                )}
              </div>

              <span
                className="tl-chevron"
                ref={(r) => (chevRefs.current[i] = r)}
                aria-hidden="true"
              >
                ↓
              </span>
            </div>

            {/* Expandable description */}
            <div className="tl-body" ref={(r) => (bodyRefs.current[i] = r)}>
              <div className="tl-body-inner">
                <p className="tl-description">{el.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
