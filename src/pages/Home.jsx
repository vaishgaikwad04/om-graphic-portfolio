import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/me.jpg"
          alt="cover"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* BLACK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#111827]"></div>

        {/* SIDE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50"></div>
      </div>

      {/* NAVBAR */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full z-50"
      >
        <div className="flex items-center justify-between px-5 sm:px-6 lg:px-16 xl:px-24 py-6">
          
          {/* LOGO */}
          <h2 className="text-sm sm:text-base tracking-[0.25em] uppercase font-semibold text-white/90">
            Om Gaikwad
          </h2>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {["Home", "About", "Work", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-xs lg:text-sm uppercase tracking-[0.18em] text-white/70 hover:text-white transition duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-white z-[100]"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 z-[99]"
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
              className="text-2xl  font-bold uppercase tracking-[0.2em] hover:text-gray-300 transition"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-5 sm:px-6 lg:px-16 xl:px-24 pt-24">

        {/* SMALL TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.25em] text-xs sm:text-sm text-white/60 mb-6"
        >
          Graphic Designer & Video Editor
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            max-w-5xl
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-[88px]
            xl:text-[100px]
            font-black
            leading-[0.9]
            tracking-tight
          "
        >
          Creative
          <span className="block italic font-light text-white/70">
            Visual Designer
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="
            mt-8
            max-w-xl
            text-base
            sm:text-lg
            lg:text-xl
            text-white/70
            leading-relaxed
          "
        >
          Creating bold visuals, cinematic edits, and modern digital
          experiences that help brands stand out with emotion and style.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#work"
            className="px-7 py-3 bg-white text-black rounded-full text-sm uppercase tracking-[0.15em] font-semibold hover:bg-gray-200 transition duration-300"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-7 py-3 border border-white/30 rounded-full text-sm uppercase tracking-[0.15em] text-white hover:bg-white hover:text-black transition duration-300"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* BIG BACKGROUND TEXT */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          font-black
          tracking-[0.15em]
          text-white
          whitespace-nowrap
          pointer-events-none
          z-10
          text-[70px]
          sm:text-[110px]
          md:text-[150px]
          lg:text-[220px]
          xl:text-[260px]
        "
      >
        DESIGN
      </motion.h1>
    </section>
  );
};

export default Home;