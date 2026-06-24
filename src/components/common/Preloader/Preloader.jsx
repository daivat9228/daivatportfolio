import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const wrapRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const proxy = { val: 0 };
    gsap.to(proxy, {
      val: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate() {
        setProgress(Math.round(proxy.val));
        if (lineRef.current) {
          lineRef.current.style.transform = `scaleX(${proxy.val / 100})`;
        }
      },
      onComplete() {
        gsap.to(wrapRef.current, {
          opacity: 0,
          duration: 0.6,
          onComplete: () => onComplete(),
        });
      },
    });
  }, [onComplete]);

  return (
    <div className="pl-wrap-minimal" ref={wrapRef}>
      <div className="pl-top-right">
        <div className="pl-text-large">
          {progress}
          <span className="pl-percent">%</span>
        </div>
        <div className="pl-progress-bar">
          <div className="pl-progress-fill" ref={lineRef} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
