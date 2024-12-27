// 
// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroImage from "../../assets/hero.png";
import { SlideUp } from "../../utility/animation";
import { motion } from "framer-motion";
import "../style/component.css"

const Hero = () => {
  return (
    <section>
      <div className="hero-container]">
        {/* Text section */} 
        <div className="text-section">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideUp(0.2)}
              whileInView={"animate"}
              initial="initial"
            >
              COVID-19 Risk <br /> Assessment Tool
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              whileInView={"animate"}
              initial="initial"
            >
              A set of solutions designed to help quickly identify coronavirus
              symptoms and get reliable information regarding COVID-19 concerns.
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              whileInView={"animate"}
              initial="initial"
            >
              <a href="https://ayosehat.kemkes.go.id/7-langkah-sederhana-yang-efektif-mengurangi-penyebaran-covid-19">
                <button>See how to use it</button>
              </a>
            </motion.div>
          </div>
        </div>
        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="image-section"
        >
          <img src={HeroImage} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;