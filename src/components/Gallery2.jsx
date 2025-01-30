import React, { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1566679056462-2075774c8c07?q=80&w=2675&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=2667&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1670414701148-16ac8873a150?q=80&w=2648&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=2856&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2748&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1443632864897-14973fa006cf?q=80&w=2670&auto=format&fit=crop",
];

export const Gallery2 = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 rounded-lg shadow-lg">
      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-900 p-3 rounded-full shadow-md hover:bg-white hover:scale-110 transition-all z-10"
      >
        ❮
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-900 p-3 rounded-full shadow-md hover:bg-white hover:scale-110 transition-all z-10"
      >
        ❯
      </button>

      {/* Image Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-hidden w-full"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 h-56 overflow-hidden rounded-lg shadow-lg relative group"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-bold">Image {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
