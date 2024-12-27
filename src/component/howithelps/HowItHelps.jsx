// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "./CardComp.jsx";
import Icon1 from "../../assets/icon/1.png";
import Icon2 from "../../assets/icon/2.png";
import Icon3 from "../../assets/icon/3.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation.js";
import "../style/component.css"

const HowItHelps = () => {
  return (
    <section>
      <div className="how-container">
        <div className="howit-container">
          <div className="col-span-2">
            <div className="card-grid">
              <motion.div
                variants={SlideRight(0.2)}
                whileInView={"animate"}
                initial="initial"
              >
                <a href="https://en.wikipedia.org/wiki/Signs_and_symptoms">
                  <Card
                    icon={Icon1}
                    heading="Symptoms"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                  />
                </a>
              </motion.div>
              <motion.div
                variants={SlideRight(0.4)}
                whileInView={"animate"}
                initial="initial"
              >
                <a href="https://www.halodoc.com/artikel/ketahui-jenis-obat-corona-yang-ampuh-dan-pernah-digunakan?srsltid=AfmBOoryzTYq3CjR5d3LG0EW_WV6ZqOJ7ka3U2yxek0a1ayVxWZfTVYk">
                  <Card
                    icon={Icon2}
                    heading="Recommendations"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                  />
                </a>
              </motion.div>
              <motion.div
                variants={SlideRight(0.6)}
                whileInView={"animate"}
                initial="initial"
                
              >
                <a href="https://ayosehat.kemkes.go.id/informasi-tentang-virus-corona-novel-coronavirus">
                  <Card
                    icon={Icon3}
                    heading="Local information"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                    />
                </a>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
            className="text-how"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
              How It Helps People
            </h1>
            <p className=" text-gray-400 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              esse ab natus.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <a href="https://id.wikipedia.org/wiki/Covid-19" className="text-primary">
                Learn More
              </a>
            </p>
            <a href="https://infeksiemerging.kemkes.go.id/dashboard/covid-19">  
            <button>
              Get in Touch
            </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HowItHelps;