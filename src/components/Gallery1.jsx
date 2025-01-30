import React, { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1566679056462-2075774c8c07?q=80&w=2675&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=2667&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1670414701148-16ac8873a150?q=80&w=2648&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=2856&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2748&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1443632864897-14973fa006cf?q=80&w=2670&auto=format&fit=crop",
];

export const Gallery1 = () => {
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
    <div className="gallery-container relative">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 z-10"
      >
        ❮
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
            className="flex-shrink-0 w-80 h-56 overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default Gallery1;
