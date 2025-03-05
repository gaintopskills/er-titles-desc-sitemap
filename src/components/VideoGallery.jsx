import React, { useState } from "react";

const videoData = [
  {
    id: "1",
    title: "Altos Tequila",
    thumbnail: "/events-gallery/embroidery/on-site-embroidery-events-at-my-venue.webp",
    url: "https://www.youtube.com/embed/fDrvZsqlJ78",
  },
  {
    id: "2",
    title: "Altos Tequila",
    thumbnail: "/events-gallery/custom-embroidery-on-hats-event-los-angeles.webp",
    url: "https://www.youtube.com/embed/YX7RrMCnVfw",
  },
  {
    id: "3",
    title: "Altos Tequila",
    thumbnail: "/events-gallery/custom-embroidery-on-hats-event-los-angeles.webp",
    url: "https://www.youtube.com/embed/YX7RrMCnVfw",
  },
  {
    id: "4",
    title: "Altos Tequila",
    thumbnail: "/events-gallery/custom-embroidery-on-hats-event-los-angeles.webp",
    url: "https://www.youtube.com/embed/YX7RrMCnVfw",
  },
  {
    id: "5",
    title: "Altos Tequila",
    thumbnail: "/events-gallery/custom-embroidery-on-hats-event-los-angeles.webp",
    url: "https://www.youtube.com/embed/YX7RrMCnVfw",
  },
  {
    id: "6",
    title: "Cotton On",
    thumbnail: "/events-gallery/custom-on-site-embroidery-custom-clothes-los-angeles.webp",
    url: "https://www.youtube.com/embed/1Q1Du_Uq-hI",
  },
  {
    id: "7",
    title: "Heidi Klum",
    thumbnail: "/events-gallery/on-site-custom-embroidery-events-los-angeles.webp",
    url: "https://www.youtube.com/embed/TM6i_FIgLfM",
  },
  {
    id: "8",
    title: "A Bikini a Day",
    thumbnail: "/events-gallery/custom-on-site-embroidery-los-angeles.webp",
    url: "https://www.youtube.com/embed/6M5u69c5HJw",
  },
];

export const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0].url);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-center mb-8">🎬 Video Gallery</h2>

      {/* Video Player */}
      <div className="w-full max-w-4xl h-64 sm:h-96 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src={selectedVideo}
          title="YouTube Video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Thumbnails */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {videoData.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video.url)}
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className={`w-40 sm:w-52 h-24 sm:h-32 rounded-lg shadow-md transition-opacity ${
                selectedVideo === video.url ? "opacity-50" : "opacity-100"
              }`}
            />
            <p className="text-sm text-center mt-2">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
