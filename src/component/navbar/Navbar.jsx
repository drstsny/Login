// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../../assets/icon/logo.png";
import { motion } from "framer-motion";
import "../style/component.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <div className="navbar-logo">
            <img src={Logo} alt="Logo" />
          </div>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <div className={`navbar-links ${isOpen ? "block" : "hidden"} md:flex`}>
            <a
              href="https://sehatnegeriku.kemkes.go.id/baca/rilis-media/20230413/2742762/indonesia-miliki-obat-baru-covid-19-dinilai-lebih-efektif-obati-pasien/"
              className="navbar-link"
            >
              Products
            </a>
            <a
              href="https://bpkpenabur.or.id/jatibarang/smpk-bpk-penabur-jatibarang/berita/cerpen-siswa-guru/aku-dan-kehidupanku-di-wabah-covid-19-amanda-f-p-hutahaean"
              className="navbar-link"
            >
              Custom Stories
            </a>
            <a
              href="https://www.halodoc.com/kesehatan/coronavirus?srsltid=AfmBOoq1pZZI6xk5ngQw3KOI41TS5gwLZsZkceEzfnB6JSRWGbjUpVNX"
              className="navbar-link"
            >
              About
            </a>
            <a href="/Blogs" className="navbar-link">
              Blogs
            </a>
          </div>

          {/* Button Section */}
          <div className="navbar-login ">
            <a href="http://localhost:5173/Login">
              <button>
                Login
              </button>
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
