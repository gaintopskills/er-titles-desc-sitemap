import React from "react";

export const VideoHeader = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
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

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="bg-black/50 p-6 rounded-lg backdrop-blur-md shadow-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Los Angeles Custom Embroidery Services - Unlimited Potential
          </h1>
          <img
            src="/embroidery/high-end-fashion-product-development-services.jpg"
            alt="E&R Unlimited Logo"
            className="w-32 md:w-48 mx-auto my-4"
          />
          <p className="text-lg md:text-xl text-gray-300">
          We create custom patches, couture apparel, corporate logos, and more. Embroidery services are our specialty!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
