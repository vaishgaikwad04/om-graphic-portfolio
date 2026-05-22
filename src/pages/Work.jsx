import React, { useState, useEffect, useRef } from "react";

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
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

  // AUTO PLAY ON SCROLL
  const videoRefs = useRef([]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const currentVideo = entry.target;

        if (entry.isIntersecting) {
          // pause all other videos
          videoRefs.current.forEach((video) => {
            if (video && video !== currentVideo) {
              video.pause();
            }
          });

          currentVideo.play().catch(() => {});
        } else {
          currentVideo.pause();
        }
      });
    },
    { threshold: 0.7 }
  );

  videoRefs.current.forEach((video) => {
    if (video) observer.observe(video);
  });

  return () => {
    videoRefs.current.forEach((video) => {
      if (video) observer.unobserve(video);
    });
  };
}, []);

  return (
    <div
      id="work"
      className="min-h-screen bg-gray-200 text-black px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 lg:py-24 overflow-hidden"
    >
      {/* HEADER */}
      <div className="mb-12 lg:mb-16 animate-fade-down">
        <p className="text-black/80 tracking-[0.25em] uppercase text-[11px] sm:text-xs">
          Selected Work
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mt-3 text-gray-500 leading-tight">
          Recent Work
        </h1>
      </div>

      {/* GRID */}
      <div className="columns-1 md:columns-2 gap-5 lg:gap-8 space-y-5 lg:space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 120}ms` }}
            className="
              break-inside-avoid group relative overflow-hidden
              rounded-[24px] lg:rounded-[32px]
              bg-white/5 backdrop-blur-md
              border border-white/10 mb-5 lg:mb-8
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
                  className="
                    w-full cursor-pointer object-cover
                    transition-all duration-700 ease-out
                    group-hover:scale-[1.05]
                    h-[420px] sm:h-[520px] md:h-[620px] lg:h-[700px]
                  "
                />
              ) : (
               <video
  ref={(el) => (videoRefs.current[index] = el)}
  loop
  playsInline
  controls
  poster={project.poster}
  onClick={(e) => {
    e.target.muted = false;
  }}
  className="
    w-full object-cover bg-black
    transition-all duration-700 ease-out
    group-hover:brightness-110
    group-hover:scale-[1.02]
    h-[420px] sm:h-[520px] md:h-[620px] lg:h-[700px]
  "
>
  <source src={project.src} type="video/mp4" />
</video>
              )}
            </div>

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                {project.name}
              </h2>

              <p className="text-white/70 text-sm sm:text-base mt-1">
                {project.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-full max-h-full rounded-2xl animate-zoom"
          />

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-3xl sm:text-4xl hover:scale-125 transition"
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoom {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Work;