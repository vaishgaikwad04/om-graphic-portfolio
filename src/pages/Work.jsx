import React, { useState } from "react";

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      name: "Jaamun Tree",
      type: "Branding / Social Media",
      media: "image",
      src: "/two.png",
      poster: "jamoon",
    },
    {
      name: "Oscar Pizza",
      type: "Reels Editing",
      media: "video",
      src: "/videos/Video.mp4",
      poster:
        "https://tse2.mm.bing.net/th/id/OIP.Dk2WeW9rQVFQYAu-jp8YFQHaHa?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Shiva's D' Aura",
      type: "Video Editing",
      media: "video",
      src: "/videos/shiva.mp4",
      poster: "/shiva.jpg",
    },
    {
      name: "Auralia Cafe",
      type: "Video Editing",
      media: "video",
      src: "/videos/auralia.mp4",
      poster: "/auralia.jpg",
    },
  ];

  return (
    <div
      id="work"
      className="min-h-screen bg-linear-gradient(180deg, #0f1d5f 0%, #1e293b 100%) text-white px-6 md:px-24 py-24"
    >
      {/* HEADER */}
      <div className="mb-20 animate-fade-down">
        <p className="text-black/40 tracking-[0.3em] uppercase text-sm">
          Selected Work
        </p>

        <h1 className="text-3xl md:text-6xl font-extrabold mt-4 animate-soft-glow text-gray-500">
         Recent Work
        </h1>
      </div>

      {/* GRID */}
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 120}ms` }}
            className="
              break-inside-avoid group relative overflow-hidden
              rounded-[32px] bg-white/5 backdrop-blur-md
              border border-white/10 mb-8
              animate-card-in
              transition-all duration-700
              hover:-translate-y-2 hover:scale-[1.01]
            "
          >
            {/* MEDIA */}
            <div className="overflow-hidden">
              {project.media === "image" ? (
                <img
                  src={project.src}
                  alt={project.name}
                  onClick={() => setSelectedImage(project.src)}
                  className={`
                    w-full cursor-pointer object-cover transition-all duration-700 ease-out
                    group-hover:scale-[1.06]
                    ${index % 2 === 0 ? "h-[890px]" : "h-[860px]"}
                  `}
                />
              ) : (
                <video
                  controls
                  playsInline
                  poster={project.poster}
                  className={`
                    w-full object-cover bg-black
                    transition-all duration-700 ease-out
                    group-hover:brightness-110 group-hover:scale-[1.02]
                    ${index % 2 === 0 ? "h-[790px]" : "h-[760px]"}
                  `}
                >
                  <source src={project.src} type="video/mp4" />
                </video>
              )}
            </div>

            {/* OVERLAY */}
            <div className="absolute bottom-0 left-0 p-8 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 animate-fade-in"
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-full max-h-full rounded-2xl animate-zoom"
          />

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:scale-125 transition"
          >
            ×
          </button>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        .animate-card-in {
          animation: cardIn 0.9s ease-out both;
        }

        .animate-fade-down {
          animation: fadeDown 0.9s ease-out both;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out both;
        }

        .animate-zoom {
          animation: zoom 0.4s ease-out both;
        }

        .animate-soft-glow {
          animation: softGlow 3s ease-in-out infinite alternate;
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoom {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes softGlow {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Work;