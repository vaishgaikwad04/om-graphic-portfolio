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
            className="absolute top-6 right-6 text-3xl text-white"
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

      {/* BACKGROUND TEXT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white font-extrabold tracking-widest text-[60px] sm:text-[80px] md:text-[100px] lg:text-[115px] xl:text-[125px] z-0"
      >
        DESIGN
      </motion.div>

      {/* MAIN TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-20 text-white tracking-tight text-center 
        text-5xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[105px]
        font-extrabold px-4 leading-[0.92]"
      >
        Creative <br />
        <span className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl italic">
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
        className="absolute bottom-0 right-0 md:right-6 lg:right-10 z-10"
      >
        <img
          className="
          w-[250px]
          sm:w-[320px]
          md:w-[430px]
          lg:w-[560px]
          xl:w-[650px]
          2xl:w-[720px]
          object-contain
          opacity-80
          hover:scale-105
          transition duration-700
          "
          src="./profile.png"
          alt="designer visual"
        />
      </motion.div>
    </div>
  );
};

export default Home;