"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { slides } from "@/lib/slides";
import { SlideContent } from "./slide-content";

export function PresentationCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen minimal-hero-bg overflow-hidden">
      {/* Slide Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto">
          <div key={currentSlide} className="slide-enter">
            <SlideContent slide={slide} slideIndex={currentSlide} />
          </div>
        </div>
      </div>

      {/* Left Navigation Arrow - Added glassmorphism effect */}
      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full backdrop-blur-md bg-[rgba(246,246,246,0.35)] shadow-lg transition-all duration-200 group hover:shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform" />
      </button>

      {/* Right Navigation Arrow - Added glassmorphism effect */}
      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full backdrop-blur-md bg-[rgba(246,246,246,0.35)] shadow-lgs transition-all duration-200 group hover:shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators - Added glassmorphism container */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3 px-6 py-3 rounded-full backdrop-blur-md bg-[rgba(246,246,246,0.15)] shadow-lg">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-primary w-8 h-2.5 shadow-md shadow-primary/40"
                : "bg-primary/25 w-2.5 h-2.5 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter - Added glassmorphism effect */}
      <div className="absolute top-8 right-8 z-20">
        <div className="px-4 py-2 rounded-full backdrop-blur-md bg-[rgba(246,246,246,0.35)] shadow-lg">
          <p className="text-sm font-semibold text-primary tracking-wider">
            {String(currentSlide + 1).padStart(2, "0")}{" "}
            <span className="text-foreground/40">
              / {String(slides.length).padStart(2, "0")}
            </span>
          </p>
        </div>
      </div>

      {/* Auto-play Toggle - Added glassmorphism effect */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute bottom-8 right-8 z-20 px-4 py-2 text-sm font-medium rounded-full backdrop-blur-md bg-[rgba(246,246,246,0.35)] shadow-lg transition-all duration-200 text-primary hover:shadow-lg flex items-center gap-2"
        aria-label={isAutoPlay ? "Pause auto-play" : "Resume auto-play"}
      >
        {isAutoPlay ? (
          <>
            <Pause className="w-4 h-4" />
            <span>Pause</span>
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            <span>Play</span>
          </>
        )}
      </button>
    </div>
  );
}
