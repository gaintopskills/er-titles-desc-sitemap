import React, { useState, useEffect } from "react";

export const VideoHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    // Fade-in effect when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide scroll indicator when scrolling
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to <h2> smoothly
  const scrollToHeading = () => {
    const heading = document.querySelector("h2");
    if (heading) {
      const yOffset = -100; // Adjust offset to avoid overlap
      const y = heading.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden">
      {/* 🎥 Video Background */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full md:ml-5 overflow-hidden">
        <iframe
          className="w-full h-full absolute inset-0 rounded-lg shadow-[0px_0px_15px_rgba(255,255,255,0.2)]"
          src="https://www.youtube.com/embed/jJzPBiVfdMI?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=jJzPBiVfdMI"
          title="Background Video"
          allow="autoplay; fullscreen"
          loading="lazy"
          style={{ borderRadius: "12px" }}
        ></iframe>
      </div>

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ✨ Text Box */}
      <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center text-center px-6">
        <div className="bg-black/50 p-6 md:p-10 rounded-lg backdrop-blur-md shadow-[0px_0px_15px_rgba(255,255,255,0.3)] w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]">
            Los Angeles Custom Embroidery Services - Unlimited Potential
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 drop-shadow-[0px_0px_10px_rgba(255,255,255,0.3)]">
            We create custom patches, couture apparel, corporate logos, and more.
            Embroidery services are our specialty!
          </p>
        </div>
      </div>

      {/* 🔻 Scroll Indicator */}
      {showIndicator && (
        <div
          className={`pr-10 absolute bottom-10 flex justify-end w-full transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={scrollToHeading}
            className="animate-bounce focus:outline-none"
            aria-label="Scroll Down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-400 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoHeader;
