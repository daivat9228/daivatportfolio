import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Cursor.css";

/**
 * GlobalCursor
 * ─────────────
 * Renders the magnetic ring + dot cursor for the entire site.
 * • Ring lags behind via lerp RAF (0.12 factor)
 * • Dot snaps instantly
 * • Listens for `cursor-scale` custom events (dispatched by Navbar, etc.)
 * • Uses event delegation on document so it catches every interactive element
 *   regardless of when they mount — no need to re-query on route changes.
 * • Hidden on touch / coarse-pointer devices via CSS media query.
 */
const GlobalCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    const spotlight = spotlightRef.current;
    if (!ring || !dot || !spotlight) return;

    let mouseX = 0,
      mouseY = 0;
    let curX = 0,
      curY = 0;
    let rafId;

    /* ── Mouse tracking ─────────────────────────────────────── */
    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot: very fast snap for smoothness without lag
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.02, overwrite: true });
      // Spotlight follows much faster now
      gsap.to(spotlight, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    /* ── RAF: ring lerp ─────────────────────────────────────── */
    const tick = () => {
      // Increased lerp factor from 0.08 to 0.25 for much faster moving ring
      curX += (mouseX - curX) * 0.25;
      curY += (mouseY - curY) * 0.25;
      gsap.set(ring, { x: curX, y: curY });
      rafId = requestAnimationFrame(tick);
    };

    /* ── cursor-scale custom event (Navbar pill, etc.) ──────── */
    const onCursorScale = (e) => {
      const s = e.detail?.scale ?? 1;
      gsap.to(ring, {
        scale: s,
        opacity: s > 1 ? 0.45 : 1,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });
    };

    /* ── Event delegation: hover any interactive element ────── */
    const SELECTORS = [
      "a",
      "button",
      '[role="button"]',
      ".meta-link",
      ".nb-link",
      ".nb-contact",
      ".tl-row",
      ".ts-orbit-item--outer",
      ".ts-tag",
      ".h-word",
      ".desktop-hamburger",
      ".social-link",
    ].join(", ");

    const onOver = (e) => {
      if (e.target.closest(SELECTORS)) {
        gsap.to(ring, {
          scale: 1.8,
          opacity: 0.6,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(spotlight, { scale: 1.5, duration: 0.5, overwrite: "auto" });
      }
    };
    const onOut = (e) => {
      if (e.target.closest(SELECTORS)) {
        gsap.to(ring, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(spotlight, { scale: 1, duration: 0.5, overwrite: "auto" });
      }
    };

    /* ── Hide/show on window enter/leave ────────────────────── */
    const onDocLeave = () =>
      gsap.to([ring, dot], { opacity: 0, duration: 0.25 });
    const onDocEnter = () =>
      gsap.to([ring, dot], { opacity: 1, duration: 0.25 });

    /* ── Mount ──────────────────────────────────────────────── */
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("cursor-scale", onCursorScale);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onDocLeave);
    document.addEventListener("mouseenter", onDocEnter);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("cursor-scale", onCursorScale);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onDocLeave);
      document.removeEventListener("mouseenter", onDocEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="spotlight" ref={spotlightRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
};

export default GlobalCursor;
