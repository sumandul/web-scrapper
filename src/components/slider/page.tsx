"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Define the type for Carousel props
interface CarouselProps {
  slides: React.ReactElement[];
  options?: { loop: boolean };
  autoplayOptions?: { delay: number };
}

// Define the type for CarouselSlide props
interface CarouselSlideProps {
  index: number;
  activeIndex: number;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  options = { loop: true },
  autoplayOptions = { delay: 3000 },
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Update the active index when the carousel scrolls
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Set initial index
  }, [emblaApi, onSelect]);

  return (
    <div className="embla overflow-hidden relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div className="embla__slide min-w-full" key={index}>
              {/* Pass the index and activeIndex to the slide */}
              {React.cloneElement(
                slide as React.ReactElement<CarouselSlideProps>,
                { index, activeIndex }
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
