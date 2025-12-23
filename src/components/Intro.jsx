import React, { useRef } from "react";
import "./Intro.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Intro() {
  const container = useRef();
  const titleRef = useRef();
  const nameRef = useRef();
  const descRef = useRef();
  const exclamRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.2,
          ease: "power4.out",
          transformOrigin: "center center",
        },
      });

      tl.from(titleRef.current, {
        opacity: 0,
        rotateX: -90,
        translateZ: 100,
      })
        .from(
          nameRef.current,
          {
            opacity: 0,
            x: 900,
            duration: 1.5,
            ease: "power4.out",
          },
          "-=0.8"
        )

        .from(
          descRef.current,
          {
            opacity: 0,
            rotateX: 45,
            translateZ: -100,
            y: 50,
          },
          "-=0.8"
        )
        // Animate the exclamation mark
        .from(exclamRef.current, {
          y: -200,
          opacity: 0,
          rotateX: 360,
        })

        .to(exclamRef.current, {
          rotateX: 360,
          duration: 2,
          ease: "power1.inOut",
          repeat: -1,
          transformOrigin: "center center",
        });
    },
    { scope: container }
  );

  return (
    <div className="intro" ref={container}>
      <div className="i-center">
        <div className="i-name">
          <span ref={titleRef} className="threeD-text">
            Hey
            <span ref={exclamRef} className="exclam">
              !
            </span>{" "}
            I Am
          </span>
          <span ref={nameRef} className="threeD-text">
            Daivat Dhimmar
          </span>
          <span ref={descRef} >
            Front-End developer with basic level of understanding in HTML, CSS,
            JavaScript, Typescript, React JS and Next JS.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
