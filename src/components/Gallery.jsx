import React, { useState, useEffect, useRef } from 'react';

export const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1566679056462-2075774c8c07?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1670414701148-16ac8873a150?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const calculateHeight = () => {
            if (carouselRef.current) {
                const slides = carouselRef.current.querySelectorAll('.carousel-slide');
                if (slides.length > 0) {
                    const width = slides[0].getBoundingClientRect().width;
                    const height = Math.round(width / (16 / 9));
                    slides.forEach((slide) => {
                        slide.style.height = `${height}px`;
                    });
                }
            }
        };

        calculateHeight();
        window.addEventListener('resize', calculateHeight);

        return () => {
            window.removeEventListener('resize', calculateHeight);
        };
    }, []);

    return (
        <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
            <div className="overflow-hidden w-full" ref={carouselRef}>
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="carousel-slide flex-shrink-0 w-full flex items-center justify-center"
                        >
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="rounded-md object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 bg-orange-500 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 bg-orange-500 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center"
            >
                &#8594;
            </button>
        </div>
    );
};

export default Gallery;
