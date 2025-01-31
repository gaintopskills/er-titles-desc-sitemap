import React from "react";

export const VideoHeader = () => {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden">
      {/* 🎥 Video Background (Now with left margin on desktop & rounded corners) */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full md:ml-5 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full absolute inset-0 rounded-lg"
          src="https://www.youtube.com/embed/jJzPBiVfdMI?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=jJzPBiVfdMI"
          title="Background Video"
          allow="autoplay; fullscreen"
          loading="lazy"
        ></iframe>
      </div>

      {/* 🔥 Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✨ Text Box with Cool Shadow & Centering */}
      <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center text-center px-6">
        <div className="bg-black/50 p-6 md:p-10 rounded-lg backdrop-blur-md shadow-2xl w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Los Angeles Custom Embroidery Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 drop-shadow-md">
            We create custom patches, couture apparel, corporate logos, and more.
            Embroidery services are our specialty!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
