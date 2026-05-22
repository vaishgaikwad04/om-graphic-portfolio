import React from "react";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 md:px-24"
    >
      <div className="max-w-3xl w-full text-center animate-container">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight animate-title">
          Let’s Work Together
        </h1>

        {/* Sub text */}
        <p className="text-white/60 max-w-xl mt-6 text-base sm:text-lg leading-relaxed mx-auto animate-fade delay-100 px-2">
          Open for freelance projects, branding, and creative collaborations.
          Let’s build something meaningful together.
        </p>

        {/* Divider */}
        <div className="w-20 h-[1px] bg-white/20 my-14 mx-auto animate-fade delay-200"></div>

        {/* ICONS */}
        <div className="flex items-center justify-center gap-8 sm:gap-4 text-white/60">

          {/* Email */}
          <a
            href="mailto:oom27146@gmail.com"
            className="group animate-float-slow"
          >
            <FaEnvelope className="text-3xl group-hover:text-white group-hover:scale-110 transition duration-300" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/om_gaikwad._.o7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group animate-float-slow delay-100"
          >
            <FaInstagram className="text-3xl group-hover:text-white group-hover:scale-110 transition duration-300" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919850196991"
            target="_blank"
            rel="noopener noreferrer"
            className="group animate-float-slow delay-200"
          >
            <FaWhatsapp className="text-3xl group-hover:text-white group-hover:scale-110 transition duration-300" />
          </a>

        </div>

        {/* Footer */}
        <p className="text-white/40 text-sm mt-16 tracking-widest uppercase animate-fade delay-300">
          Designed & Developed by Vaishnavi Gaikwad
        </p>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        .animate-container {
          animation: containerIn 1s ease-out both;
        }

        .animate-title {
          animation: titleIn 1s ease-out both;
        }

        .animate-fade {
          animation: fadeIn 1s ease-out both;
        }

        .animate-float-slow {
          animation: float 5s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        @keyframes containerIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;