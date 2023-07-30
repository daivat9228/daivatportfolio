import React from "react";
import Card from "./cards/Card.jsx";
import "./Hobbies.css";
import Sketching from "../img/sketch1.png";
import Movies from "../img/movie1.png";
import Travelling from "../img/travelling1.png";
import { motion } from "framer-motion";

const Hobbies = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="hobbies" id="Hobbies">
      {/* {left side} */}
      <div className="h-left">
        <span>My</span>
        <span>Hobbies</span>
        <div>My hobbies encompass a delightful range of interests  that keep me engaged and inspired. I find solace in the  captivating world of movies, where each story unfolds  before my eyes, leaving me enthralled. Sketching, on the other hand, is my creative outlet, allowing me to express emotions and ideas through strokes of a pencil. The allure of exploration beckons me to embark on enriching journeys, as traveling exposes me to diverse cultures and landscapes, igniting my sense of wonder and curiosity. These hobbies collectively enrich my life and add vivid colors to my daily experiences.</div>
      </div>

      {/* {right side} */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Sketching}
            heading={"Sketching"}
          />
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card 
          emoji={Movies} 
          heading={"Movies"} 
           />
        </motion.div>

        {/* third card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card 
          emoji={Travelling} 
          heading={"Travelling"} 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hobbies;
