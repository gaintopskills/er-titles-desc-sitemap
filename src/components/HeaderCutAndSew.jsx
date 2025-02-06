import React, { useState } from "react";

export const HeaderCutAndSew = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden">
      {/* 🎥 Video Background */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full md:ml-5 overflow-hidden">
        {!isPlaying ? (
          // Thumbnail Before Playing
          <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
            <img
              src="/your-thumbnail-image.jpg"
              alt="Play Video"
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-white bg-black bg-opacity-50 rounded-full p-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </button>
          </div>
        ) : (
          // Video Player After Click
          <iframe
            className="w-full h-full absolute inset-0 rounded-lg shadow-[0px_0px_15px_rgba(255,255,255,0.2)]"
            src="https://www.youtube.com/embed/KYSIemzxIU4?autoplay=1&mute=1&loop=1&controls=1&modestbranding=1&rel=0&playsinline=1"
            title="Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
            style={{ borderRadius: "12px" }}
          ></iframe>
        )}
      </div>
      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ✨ Text Box */}
      <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center text-center px-6">
        <div className="bg-black/50 p-6 md:p-10 rounded-lg backdrop-blur-md shadow-[0px_0px_15px_rgba(255,255,255,0.3)] w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]">
            Custom Cut and Sew
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 drop-shadow-[0px_0px_10px_rgba(255,255,255,0.3)]">
            At E&R Unlimited, we specialize in high-volume, custom cut and sew services, offering full-package production for both small and big brands. Whether you're an emerging designer or an established company, we provide the expertise and resources to bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderCutAndSew;
