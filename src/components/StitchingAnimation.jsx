import React, { useState, useEffect } from "react";

export const StitchingAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay to ensure smooth fade-in

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div className="image-container">
      <img
        src="/e-and-r-unlimited-custom-wholesale-embroidery-services.webp" // Assuming the image is placed in the "public" folder
        alt="Fading Image"
        className={`fade-in-image ${isVisible ? "visible" : ""}`}
        style={{
          width: "90vw", // Full width of the viewport
          height: "90vh", // Full height of the viewport
        
        }}
      />
    </div>
  );
};