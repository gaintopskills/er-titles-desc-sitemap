import React, { useState } from "react";

export const HeaderCutAndSew = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden">
      {/* 🎥 Video Background */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full md:ml-5 overflow-hidden">
        {!isPlaying ? (
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
          <iframe
            className="w-full h-full absolute inset-0 rounded-lg shadow-[0px_0px_15px_rgba(255,255,255,0.2)]"
            src="https://www.youtube.com/embed/KYSIemzxIU4?autoplay=1&mute=1&loop=1&controls=1&modestbranding=1&rel=0&playsinline=1"
            title="Background Video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
            style={{ borderRadius: '12px' }}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default HeaderCutAndSew;
