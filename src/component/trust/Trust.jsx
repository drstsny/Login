// eslint-disable-next-line no-unused-vars
import React from "react";
import Icon1 from "../../assets/icon/icon1.png";
import Icon2 from "../../assets/icon/icon2.png"; 
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";
import "../style/component.css"

const Trust = () => {
  return (
    <section className="container-trust">
      <div className="container-trus">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
        >
          Why you can trust this tools
        </motion.h1>
        <div className="text-trust"> 
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
          >
            <img src={Icon1} alt="" />
            <p className="text1">Based on reliable sources</p>
            <p className="">
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO.
            </p>
            <p >
              Enchance your preliminary diagnosis and triage with pediatric
              content
              <a href="https://id.wikipedia.org/wiki/Covid-19">
                <span className="text-primary"> Learnmore</span>
              </a>
            </p>
          </motion.div>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
          >
            <img src={Icon2} alt=""/>
            <p className="text1">Based on reliable sources</p>
            <p>
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO.
            </p>
            <p>
              Enchance your preliminary diagnosis and triage with pediatric
              content 
              <a href="https://id.wikipedia.org/wiki/Covid-19">
              <span className="text-primary"> Learnmore</span>
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Trust;