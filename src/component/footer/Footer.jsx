// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import "../style/component.css"

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className="container-footer">
        {/* brand info */}
        <div className="space-y-4">
          <p >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            voluptatum ut molestiae facere.
          </p>
        </div>
        {/* social icons */}
        <div className="icon">
          <a href="https://www.facebook.com/KementerianKesehatanRI">
          <FaFacebook className="hover:text-primary duration-200" />
          </a>
          <a href="https://www.instagram.com/kemenkes_ri/">
          <FaInstagram className="hover:text-primary duration-200" />
          </a>
          <a href="https://infeksiemerging.kemkes.go.id/dashboard/covid-19">
          <FaLinkedin className="hover:text-primary duration-200" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;