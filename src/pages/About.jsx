import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: 120 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-500 text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gray-500 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-500 rounded-full"></div>

      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center px-5 sm:px-6 lg:px-16 xl:px-24 py-24">
        {/* HUGE BG TEXT */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className="
            absolute
            top-10
            left-1/2
            -translate-x-1/2
            font-black
            tracking-[0.2em]
            text-white
            pointer-events-none
            whitespace-nowrap
            text-[80px]
            sm:text-[120px]
            md:text-[180px]
            lg:text-[260px]
          "
        >
          ABOUT
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-10 w-full">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-blue-200/60 mb-6">
              Graphic Designer & Video Editor
            </p>

            <h1
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[85px]
                xl:text-[95px]
                font-black
                leading-[0.9]
                tracking-tight
              "
            >
              OM
              <span className="block italic font-light text-blue-100/70">
                GAIKWAD
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="
                mt-8
                text-base
                sm:text-lg
                lg:text-xl
                text-white/65
                leading-relaxed
                max-w-xl
              "
            >
              I create cinematic visuals, modern branding, and engaging digital
              experiences that help businesses stand out with emotion,
              storytelling, and creativity.
            </motion.p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-12">
              {[
                ["2+", "Years"],
                ["40+", "Projects"],
                ["10+", "Clients"],
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    rounded-2xl
                    p-5
                    hover:bg-white/10
                    transition duration-500
                  "
                >
                  <h2 className="text-3xl sm:text-4xl font-black">
                    {item[0]}
                  </h2>

                  <p className="text-sm text-white/60 mt-2">{item[1]}</p>
                </motion.div>
              ))}
            </div>

            {/* CLIENTS */}
            <div className="mt-14">
              <p className="uppercase tracking-[0.25em] text-xs text-white/40 mb-5">
                Selected Clients
              </p>

              <div className="space-y-4">
                {[
                  "Oscarr Pizza",
                  "Culinary Karma",
                  "Jaamun Tree",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="
                      text-2xl
                      lg:text-3xl
                      font-semibold
                      text-white/50
                      hover:text-white
                      hover:translate-x-2
                      transition-all
                      duration-500
                    "
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* GLOW */}
          

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                shadow-2xl
                w-full
                max-w-[360px]
                sm:max-w-[460px]
                lg:max-w-[540px]
              "
            >
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.8 }}
                src="/me.jpg"
                alt="Om Gaikwad"
                className="
                  w-full
                  h-[60vh]
                  sm:h-[70vh]
                  lg:h-[78vh]
                  object-cover
                "
              />
            </div>

            {/* FLOAT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              viewport={{ once: true }}
              className="
                absolute
                bottom-6
                -left-4
                sm:left-0
                lg:-left-12
                bg-white/10
                backdrop-blur-2xl
                border
                border-white/10
                rounded-2xl
                p-5
                max-w-[240px]
              "
            >
              <p className="uppercase tracking-[0.25em] text-xs text-white/50">
                Experience
              </p>

              <h2 className="text-4xl font-black mt-2">2+</h2>

              <p className="text-sm text-white/60 mt-3 leading-relaxed">
                Years creating visuals, edits, and digital experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="relative px-5 sm:px-6 lg:px-16 xl:px-24 py-24 lg:py-32 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-8">
            Philosophy
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
              font-black
              leading-tight
            "
          >
            Design should
            <span className="block italic font-light text-white/60">
              make people feel something.
            </span>
          </h2>

          <p
            className="
              mt-10
              text-lg
              sm:text-xl
              lg:text-2xl
              text-white/60
              leading-relaxed
              lg:leading-loose
              max-w-5xl
            "
          >
            My work blends storytelling, typography, visuals, and movement to
            create experiences people remember. Whether it’s a brand campaign,
            cinematic reel, or social media design — every detail is built with
            emotion and intention.
          </p>
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="relative px-5 sm:px-6 lg:px-16 xl:px-24 py-24 lg:py-32 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">
            Expertise
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
              font-black
              leading-[0.95]
            "
          >
            Creative
            <span className="block italic font-light text-white/60">
              Skills
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {[
            "Brand Identity",
            "Graphic Design",
            "Video Editing",
            "Creative Direction",
            "Social Media Design",
            "Motion Graphics",
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                group
                p-7
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                hover:bg-white/[0.06]
                transition-all
                duration-500
              "
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl lg:text-3xl font-semibold text-white/75 group-hover:text-white transition">
                  {skill}
                </h3>

                <span className="text-white/30 text-lg font-medium">
                  0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;