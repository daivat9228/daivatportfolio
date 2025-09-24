import React, { useRef } from "react";
import "./Contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Contact() {
  const formRef = useRef(null);
  const inputsRef = useRef([]);
  const leftRef = useRef(null);

  useGSAP(() => {
    // Animate the left side
    gsap.from(leftRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate form inputs
    gsap.fromTo(
      inputsRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="contact-form" id="Contact">
      {/* left side */}
      <div className="c-left" ref={leftRef}>
        <span>Get In Touch</span>
        <span>Contact Me</span>
      </div>
      {/* right side */}
      <div className="c-right">
        <form ref={formRef}>
          <input
            ref={(el) => (inputsRef.current[0] = el)}
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            ref={(el) => (inputsRef.current[1] = el)}
            type="text"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            ref={(el) => (inputsRef.current[2] = el)}
            name="message"
            className="user"
            placeholder="Enter Your Message here..."
          ></textarea>
          <input
            ref={(el) => (inputsRef.current[3] = el)}
            type="submit"
            value="Send"
            className="button"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
