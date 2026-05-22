import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center h-screen bg-[#0f1d5f] overflow-hidden"
    >
      {/* NAV */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-6 right-6 flex items-center justify-between text-white z-20"
      >
        <h2 className="text-lg tracking-widest uppercase opacity-80 font-semibold">
          Om Gaikwad
        </h2>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Work", "Contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wider hover:text-red-300 transition duration-300 hover:scale-110"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl fixed top-6 right-6 z-[60]"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </motion.div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white z-[110]"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl text-white z-[120]"
          >
            <HiX />
          </button>

          {["Home", "About", "Work", "Contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold uppercase tracking-[0.2em] hover:text-red-300 transition duration-300"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      {/* LEFT TEXT */}
      

      {/* BACKGROUND TEXT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white opacity-10 font-extrabold tracking-widest text-[70px] sm:text-[100px] md:text-[120px] lg:text-[140px]"
      >
        DESIGN
      </motion.div>

      {/* MAIN TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-white tracking-tight text-center text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold z-10 px-4 leading-[0.9]"
      >
        Creative <br />
        <span className="font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic">
          Visual
        </span>{" "}
        Designer
      </motion.h1>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 right-0 sm:right-6 md:right-10 translate-y-2 md:translate-y-4"
      >
        <img
          className="w-[260px] sm:w-[340px] md:w-[500px] lg:w-[700px] xl:w-[780px] object-cover rounded-xl hover:scale-105 transition duration-700"
          src="./profile.png"
          alt="designer visual"
        />
      </motion.div>
    </div>
  );
};

export default Home;