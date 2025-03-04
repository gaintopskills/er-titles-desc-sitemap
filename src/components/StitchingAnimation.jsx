import React, { useState, useEffect } from "react";

export const StitchingAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true); // Controls visibility of scroll indicator

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay to ensure smooth fade-in

    return () => clearTimeout(timer); // Cleanup
  }, []);

  useEffect(() => {
    // Function to hide the scroll indicator when scrolling down and show when back at the top
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, []);

  // Function to scroll smoothly to the h1 tag
  const scrollToHeading = () => {
    const heading = document.querySelector("h1"); // Selects the first h1 on the page
    if (heading) {
      const yOffset = -150; // Adjust the offset to scroll 200px higher
      const y = heading.getBoundingClientRect().top + window.scrollY + yOffset;
  
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  

  return (
    <div className="image-container relative">
      <img
        src="/e-and-r-unlimited-custom-wholesale-embroidery-services.webp" // Assuming the image is placed in the "public" folder
        alt="Fading Image"
        className={`fade-in-image ${isVisible ? "visible" : ""}`}
        style={{
          width: "70vw", // Full width of the viewport
          height: "70vh", // Full height of the viewport
        }}
      />

      {/* Scroll Down Indicator (Appears After Image Loads) */}
      {showIndicator && (
        <div
          className={`absolute bottom-10 flex justify-end transition-opacity duration-1000 w-full ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={scrollToHeading} // Calls function on click
            className="animate-bounce mr-12 focus:outline-none"
            aria-label="Scroll Down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white opacity-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default StitchingAnimation;
