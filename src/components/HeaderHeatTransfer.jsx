import React, { useState, useEffect } from "react";

export const HeaderHeatTransfer = () => {
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
    const forcePlay = () => {
      const iframe = document.querySelector("iframe");
      if (iframe) {
        iframe.src += "&autoplay=1";
      }
      window.removeEventListener("click", forcePlay);
    };
  
    window.addEventListener("click", forcePlay);
    return () => window.removeEventListener("click", forcePlay);
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
      {/* 🖼️ Image Background (Replaces Video) */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full md:ml-5 overflow-hidden">
        <img
          src="/heat-transfer/heat-transfer-services-on-tshirts.webp" // Change this path to your actual image
          alt="Custom Cut and Sew Services"
          className="w-full h-full object-cover rounded-lg shadow-[0px_0px_15px_rgba(255,255,255,0.2)]"
          style={{ borderRadius: "12px" }} // Ensures the image has rounded corners
        />
      </div>

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ✨ Text Box */}
      <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center text-center px-6">
        <div className="bg-black/50 p-6 md:p-10 rounded-lg backdrop-blur-md shadow-[0px_0px_15px_rgba(255,255,255,0.3)] w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]">
          Heat Transfer Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 drop-shadow-[0px_0px_10px_rgba(255,255,255,0.3)]">
          We provide top-quality heat transfer services in Los Angeles. Whether you need custom full-color heat transfers for your business, sports team, fashion apparel, or special event, we offer competitive pricing and premium customer service to bring your designs to life.
          </p>
        </div>
      </div>

      {/* 🔻 Scroll Indicator (Fixed & Clickable) */}
      {showIndicator && (
        <div
          className={`absolute bottom-10 right-10 z-50 flex transition-opacity duration-1000 ${
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
              className="w-10 h-10 text-gray-400 opacity-60 hover:text-gray-300"
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

export default HeaderHeatTransfer;
