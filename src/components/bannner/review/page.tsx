// pages/reviews.tsx
"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Define types for the review data
interface Review {
  text: string;
  name: string;
  role: string;
  image?: string;
}

// Define props for the Carousel component
interface CarouselProps {
  slides: React.ReactElement[];
  options?: { loop: boolean };
  autoplayOptions?: { delay: number };
}

// Define props for the ReviewSlide component
interface ReviewSlideProps {
  index: number;
  activeIndex: number;
  review: Review;
}

// Carousel Component
const Carousel: React.FC<CarouselProps> = ({
  slides,
  options = { loop: true },
  autoplayOptions = { delay: 3000 },
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="embla overflow-hidden relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div className="embla__slide min-w-full" key={index}>
              {React.cloneElement(
                slide as React.ReactElement<ReviewSlideProps>,
                { index, activeIndex }
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-gradient-to-r from-[#00AEEF] to-cyan-300 scale-125"
                : "bg-gray-400 opacity-50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Review Slide Component
const ReviewSlide: React.FC<ReviewSlideProps> = ({
  index,
  activeIndex,
  review,
}) => {
  const isActive = index === activeIndex;
  const cardRef = React.useRef<HTMLDivElement>(null);
  const x: MotionValue<number> = useMotionValue(0);
  const y: MotionValue<number> = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = event.clientX - rect.left - centerX;
    const mouseY = event.clientY - rect.top - centerY;
    x.set(mouseX * 0.1);
    y.set(mouseY * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={
        isActive ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 0.95 }
      }
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white bg-opacity-90 p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto border border-gray-100 hover:bg-opacity-100 transition-all duration-500"
    >
      {/* Gradient Border Accent */}
      <div className="absolute inset-0 rounded-2xl  opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

      {/* Stars */}
      {/* <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div> */}

      {/* Review Text */}
      <motion.p
        className="text-gray-700 text-base md:text-lg text-center mb-6 line-clamp-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 10 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        &quot;{review.text}&quot;
      </motion.p>

      {/* Reviewer Info */}
      <motion.div
        className="flex items-center justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 10 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* {review.image && (
          <Image
            src={review.image}
            alt={review.name}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        )} */}
        <div>
          <p className="text-[#1A2A44] font-semibold text-sm md:text-base">
            {review.name}
          </p>
          <p className="text-gray-500 text-xs md:text-sm">{review.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Define review data
const reviews: Review[] = [
  {
    text: "Gen Z Global made my dream of studying in Australia come true. Their counselling was honest, clear, and extremely helpful throughout the application and visa process.",
    name: "Aayush Sharma",
    role: "Student, Australia",
    image: "/student-aayush.png",
  },
  {
    text: "The team at Gen Z Global was with me every step of the way. From choosing the right course to securing my UK visa—they truly care about student success!",
    name: "Suman Dulal",
    role: "Student, UK",
    image: "/student-suman.png",
  },
  {
    text: "I’m so grateful to Gen Z Global for helping me receive a scholarship in Canada. Their guidance and professionalism were top-notch. Highly recommended!",
    name: "Manisha Thapa",
    role: "Student, Canada",
    image: "/student-manisha.png",
  },
  {
    text: "Choosing Gen Z Global was the best decision. Their certified counsellors helped me find the perfect university in the USA, and I felt supported at every stage.",
    name: "Bikash Tamang",
    role: "Student, USA",
    image: "/student-bikash.png",
  },
];


// Reviews Page Component
const Reviews: React.FC = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const carouselSlides = reviews.map((review, index) => (
    <ReviewSlide key={index} review={review} index={index} activeIndex={0} />
  ));

  return (
    <section className="py-16 md:py-20 lg:py-24  relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full  pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-[#1A2A44] mb-12 md:mb-16 lg:mb-20 relative"
        >
          <span className="bg-clip-text text-GenZ-secondary bg-gradient-to-r from-[#00AEEF] to-cyan-300">
            What Our Students Say
          </span>
          <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#00AEEF] to-cyan-300 rounded-full"></span>
        </motion.h2>

        {/* Carousel */}
        <div>
          <Carousel
            slides={carouselSlides}
            options={{ loop: true }}
            autoplayOptions={{ delay: 4000 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
