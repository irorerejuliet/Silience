"use client";

import Image from "next/image";
import { useState } from "react";
import { paragraphs } from "../constant/paragraphs";

const images = [
  { src: "/images/about-img-1.jpg", alt: "about-img-1" },
  { src: "/images/about-img-2.jpg", alt: "about-img-2" },
  { src: "/images/about-img-3.jpg", alt: "about-img-3" },
  { src: "/images/about-img-3.jpg", alt: "about-img-3" },
];

const AboutDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white text-black pt-20">
      {/* Paragraphs */}
      <div className="mx-auto max-w-3xl space-y-4 p-4">
        {paragraphs.map((text, index) => (
          <p key={index} className="text-base">
            {text}
          </p>
        ))}
        <div className="flex-col flex text-base font-semibold pt-8">
          <span>SILENCE PLEASE,</span>
          <span>For those who listen.</span>
        </div>
      </div>

      {/* Image Slider */}
      <div className="p-4 overflow-hidden">
        
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <div key={index} className="min-w-full flex justify-center">
              <div className="w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800} 
                  height={500} 
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-4">
          {/* Indicators */}
          <div className="flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  currentIndex === index ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button onClick={handlePrev}>
              <Image
                src="/images/arrow-left.svg"
                alt="arrow left"
                width={28}
                height={28}
              />
            </button>

            <button onClick={handleNext}>
              <Image
                src="/images/arrowright.svg"
                alt="arrow right"
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
