"use client";
import React, { useEffect, useState } from "react";

const images = [
    "/slider.jpg",
    "/slider.jpg",
    "/slider.jpg",
    "/slider.jpg",
    "/slider.jpg",
];

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // change slide every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full">
            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}

                {/* Text + Button Overlay */}
                <div className="absolute bottom-6 left-6 z-10 bg-black/50 p-4 rounded-lg text-white max-w-sm">
                    <h2 className="text-lg md:text-xl font-semibold">
                        Discover AI Blogs
                    </h2>
                    <p className="text-sm md:text-base mb-2">
                        Stay updated with the latest in AI and tech.
                    </p>
                    <button className="px-4 py-2 bg-brand hover:bg-brand rounded-md text-sm font-medium">
                        Read More
                    </button>
                </div>
            </div>

            {/* Prev button */}
            <button
                type="button"
                onClick={prevSlide}
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                </span>
            </button>

            {/* Next button */}
            <button
                type="button"
                onClick={nextSlide}
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                </span>
            </button>
        </div>
    );
};

export default ImageSlider;
