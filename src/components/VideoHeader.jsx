import React from "react";

export const VideoHeader = () => {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Video Background (Takes Full Width on Mobile, Half on Desktop) */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <iframe
          className="w-full h-full absolute inset-0"
          src="https://www.youtube.com/embed/jJzPBiVfdMI?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=jJzPBiVfdMI"
          title="Background Video"
          allow="autoplay; fullscreen"
          loading="lazy"
        ></iframe>
      </div>

      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Box (Takes Full Width on Mobile, Half on Desktop) */}
      <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center text-center px-6">
        <div className="bg-black/50 p-6 md:p-10 rounded-lg backdrop-blur-md shadow-lg w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Los Angeles Custom Embroidery Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            We create custom patches, couture apparel, corporate logos, and more.
            Embroidery services are our specialty!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
