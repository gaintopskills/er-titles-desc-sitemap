import React from "react";

export const VideoHeader = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 🎥 Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="w-full h-full absolute inset-0"
          src="https://www.youtube.com/embed/jJzPBiVfdMI?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=jJzPBiVfdMI"
          title="Background Video"
          allow="autoplay; fullscreen"
          loading="lazy"
        ></iframe>
      </div>

      {/* 🔥 Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* ✨ Content Box */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Smooth animated heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight opacity-90 animate-fade-in">
          Los Angeles Custom Embroidery
        </h1>

        {/* Subtext with light opacity */}
        <p className="text-lg md:text-xl text-gray-300 mt-4 opacity-80 animate-fade-in delay-200">
          Custom patches, couture apparel, corporate logos, and more!
        </p>

        {/* 🌟 CTA Button */}
        <a
          href="/get-quote"
          className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition-transform px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-blue-500/40"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  );
};

export default VideoHeader;
