import React from "react";

const images = [
  "https://images.unsplash.com/photo-1566679056462-2075774c8c07?q=80&w=2675&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=2667&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1670414701148-16ac8873a150?q=80&w=2648&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=2856&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2748&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1443632864897-14973fa006cf?q=80&w=2670&auto=format&fit=crop",
];

export const Carousel = () => {
  return (
    <div className="gallery-container">
      <div className="overflow-x-auto whitespace-nowrap scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thin">
        <div className="flex gap-4 py-4">
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
      </div>
    </div>
  );
};

export default Carousel;
