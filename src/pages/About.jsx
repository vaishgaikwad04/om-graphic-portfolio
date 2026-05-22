import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#1e293b] text-white overflow-hidden"
    >
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex flex-col justify-center px-5 sm:px-6 lg:px-16 xl:px-24 py-20">

        {/* BIG BACKGROUND TEXT */}
        <h1 className="absolute top-6 left-2 md:left-6 lg:left-10 text-[60px] sm:text-[90px] md:text-[150px] lg:text-[180px] xl:text-[220px] font-black text-white/10 leading-none select-none">
          OM
        </h1>

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center relative z-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-white/60 mb-5">
              Graphic Designer & Video Editor
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[105px] font-black leading-[0.9] tracking-tight text-white">
              OM
              <span className="block italic font-light text-white/70">
                GAIKWAD
              </span>
            </h1>

            <p className="mt-8 text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl">
              I create bold visuals, cinematic edits, and modern brand
              identities that help businesses stand out with emotion and style.
            </p>

            {/* CLIENTS */}
            <div className="mt-12">
              <p className="uppercase text-xs sm:text-sm tracking-[0.25em] text-white/60 mb-5">
                Selected Clients
              </p>

              <div className="space-y-3">
                {["Oscarr Pizza", "Culinary Karma", "Jaamun Tree"].map(
                  (item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      viewport={{ once: true }}
                      className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/60 hover:text-white transition duration-300"
                    >
                      {item}
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end"
          >
            <div className="overflow-hidden rounded-2xl w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[580px] xl:max-w-[650px]">
              <img
                src="/me.jpg"
                alt="Om Gaikwad"
                className="w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] xl:h-[80vh] object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-4 left-4 lg:-left-10 bg-[#181818]/90 border border-gray-600 p-4 sm:p-5 backdrop-blur-xl max-w-[240px] rounded-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Experience
              </p>

              <h2 className="text-3xl sm:text-4xl font-black mt-2 text-white">
                2+
              </h2>

              <p className="text-sm text-white/70 mt-2 leading-relaxed">
                Years creating visual stories & digital experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* STORY SECTION */}
      <div className="px-5 sm:px-6 lg:px-16 xl:px-24 py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-6xl">

          <p className="uppercase tracking-[0.25em] text-white/50 text-xs sm:text-sm mb-8">
            Philosophy
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white"
          >
            Design should
            <span className="block italic font-light text-white/70">
              make people feel something.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-lg sm:text-xl lg:text-2xl text-white/70 leading-relaxed lg:leading-loose max-w-5xl font-light"
          >
            My work blends storytelling, movement, typography, and emotion to
            create visuals that connect deeply with audiences. Whether it’s a
            restaurant brand, social media campaign, or cinematic reel — I aim
            to build experiences that people remember.
          </motion.p>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="relative px-5 sm:px-6 lg:px-16 xl:px-24 py-24 lg:py-32 overflow-hidden border-t border-white/10">

        {/* BACKGROUND TEXT */}
        <h1 className="absolute top-6 left-0 text-[60px] sm:text-[100px] md:text-[160px] lg:text-[220px] xl:text-[250px] font-black text-white/10 leading-none select-none">
          SKILLS
        </h1>

        {/* TOP CONTENT */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

          <div>
            <p className="uppercase tracking-[0.25em] text-white/50 text-xs sm:text-sm mb-5">
              Expertise
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight text-white">
              Creative
              <span className="block italic font-light text-white/70">
                Capabilities
              </span>
            </h2>
          </div>

          <p className="max-w-md text-white/50 text-base lg:text-lg leading-relaxed">
            Focused on building modern visuals, cinematic edits, and impactful
            digital experiences that elevate brands with emotion and clarity.
          </p>
        </div>

        {/* SKILLS LIST */}
        <div className="py-16 border-t border-white/10">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

            <div>
              <p className="uppercase tracking-[0.25em] text-white/30 text-xs sm:text-sm mb-4">
                Expertise
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white">
                Creative
                <span className="block italic font-light text-white/40">
                  Skills
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-white/40 leading-relaxed text-sm sm:text-base">
              Blending visuals, motion, and storytelling to create modern digital
              experiences.
            </p>
          </div>

          {/* SKILLS */}
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8">
            {[
              "Brand Identity",
              "Graphic Design",
              "Video Editing",
              "Social Media Design",
              "Creative Direction",
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group border-b border-white/10 pb-4 flex items-center justify-between"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/70 group-hover:text-white transition duration-300">
                  {skill}
                </h3>

                <span className="text-white/20 group-hover:text-white transition duration-300 text-sm sm:text-base">
                  0{i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;