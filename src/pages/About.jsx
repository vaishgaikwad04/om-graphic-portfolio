import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#1e293b] text-white overflow-hidden"
    >
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-20">

        {/* BIG BACKGROUND TEXT */}
        <h1 className="absolute top-10 left-4 md:left-10 text-[90px] md:text-[220px] font-black text-white/10 leading-none select-none">
          OM
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.4em] text-sm text-white/60 mb-6">
              Graphic Designer & Video Editor
            </p>

            <h1 className="text-6xl md:text-[120px] font-black leading-[0.9] tracking-tight text-white">
              OM
              <span className="block italic font-light text-white/70">
                GAIKWAD
              </span>
            </h1>

            <p className="mt-10 text-lg md:text-2xl text-white/60 leading-relaxed max-w-xl">
              I create bold visuals, cinematic edits, and modern brand
              identities that help businesses stand out with emotion and style.
            </p>

            {/* CLIENTS */}
            <div className="mt-14">
              <p className="uppercase text-sm tracking-[0.3em] text-white/60 mb-6">
                Selected Clients
              </p>

              <div className="space-y-4">
                {["Oscarr Pizza", "Culinary Karma", "Jaamun Tree"].map(
                  (item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      viewport={{ once: true }}
                      className="text-2xl md:text-4xl font-semibold text-white/60 hover:text-white transition duration-300"
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
            className="relative"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src="/me.jpg"
                alt="Om Gaikwad"
                className="w-full h-[75vh] object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 md:-bottom-10 -left-2 md:-left-10 bg-[#181818] border border-gray-600 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Experience
              </p>

              <h2 className="text-4xl font-black mt-2 text-white">2+</h2>

              <p className="text-white/70 mt-2">
                Years creating visual stories & digital experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* STORY SECTION */}
      <div className="px-6 md:px-20 py-32 border-t border-white/10">
        <div className="max-w-6xl">

          <p className="uppercase tracking-[0.35em] text-white/50 text-sm mb-8">
            Philosophy
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black leading-tight text-white"
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
            className="mt-12 text-xl md:text-3xl text-white/70 leading-loose max-w-5xl font-light"
          >
            My work blends storytelling, movement, typography, and emotion to
            create visuals that connect deeply with audiences. Whether it’s a
            restaurant brand, social media campaign, or cinematic reel — I aim
            to build experiences that people remember.
          </motion.p>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="relative px-6 md:px-20 py-36 overflow-hidden border-t border-white/10">

        {/* BACKGROUND TEXT */}
        <h1 className="absolute top-10 left-0 text-[120px] md:text-[250px] font-black text-white/10 leading-none select-none">
          SKILLS
        </h1>

        {/* TOP CONTENT */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-24">

          <div>
            <p className="uppercase tracking-[0.35em] text-white/50 text-sm mb-6">
              Expertise
            </p>

            <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tight text-white">
              Creative
              <span className="block italic font-light text-white/70">
                Capabilities
              </span>
            </h2>
          </div>

          <p className="max-w-md text-white/50 text-lg leading-relaxed">
            Focused on building modern visuals, cinematic edits, and impactful
            digital experiences that elevate brands with emotion and clarity.
          </p>
        </div>

        {/* SKILLS LIST */}
        <div className="px-6 md:px-0 py-24 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

            <div>
              <p className="uppercase tracking-[0.35em] text-white/30 text-sm mb-4">
                Expertise
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
                Creative
                <span className="block italic font-light text-white/40">
                  Skills
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-white/40 leading-relaxed">
              Blending visuals, motion, and storytelling to create modern digital
              experiences.
            </p>
          </div>

          {/* SKILLS */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
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
                <h3 className="text-2xl md:text-3xl font-semibold text-white/70 group-hover:text-white transition duration-300">
                  {skill}
                </h3>
                <span className="text-white/20 group-hover:text-white transition duration-300">
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