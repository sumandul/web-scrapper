// components/welcome-section.tsx
"use client";

import Carousel from "@/components/slider/page";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import React from "react";

// Define props for the CarouselSlide component
interface CarouselSlideProps {
  index?: number; // Made optional
  activeIndex?: number; // Made optional
  backgroundImage: string;
  smallImage: string;
}

// Define the type for Carousel props

// Animation variants for the small image in the carousel
const imageAnimationVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -15, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
  hover: {
    scale: 1.15,
    rotate: 3,
    boxShadow: "0 0 25px rgba(255, 255, 255, 0.9)",
    transition: { duration: 0.4 },
  },
};

// Slide component with enhanced design
const CarouselSlide: React.FC<CarouselSlideProps> = ({
  index = 0, // Default value to avoid undefined
  activeIndex = 0, // Default value to avoid undefined
  backgroundImage,
  smallImage,
}) => {
  const isActive = index === activeIndex;
  const slideRef = useRef<HTMLDivElement>(null);
  const x: MotionValue<number> = useMotionValue(0);
  const y: MotionValue<number> = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!slideRef.current) return;
    const rect = slideRef.current.getBoundingClientRect();
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
      ref={slideRef}
      style={{ rotateX, rotateY, perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-72 sm:h-96 md:h-[32rem] rounded-xl overflow-hidden"
    >
      <Image
        src={backgroundImage}
        alt={`Study Destination ${index + 1}`}
        fill
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          whileHover="hover"
          variants={imageAnimationVariants}
          className="w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] md:w-[28rem] md:h-[18rem] relative z-10"
        >
          <Image
            src={smallImage}
            alt="Featured Image"
            width={400}
            height={200}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/20 to-cyan-300/20 opacity-50"></div>
    </motion.div>
  );
};

// Define the carousel slides
const carouselSlides: React.ReactElement[] = [
  <CarouselSlide key={0} backgroundImage="/uk.jpg" smallImage="/w.webp" />,
  <CarouselSlide key={1} backgroundImage="/aus.webp" smallImage="/w.webp" />,
  <CarouselSlide key={2} backgroundImage="/london.jpg" smallImage="/w.webp" />,
];

const WelcomeSection: React.FC = () => {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.1, boxShadow: "0 0 15px rgba(0, 174, 239, 0.5)" },
    tap: { scale: 0.95 },
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-cyan-50 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00AEEF]/10 to-cyan-300/10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="space-y-6 md:space-y-8"
          >
            <motion.p
              className="text-sm md:text-base text-[#D32F2F] uppercase tracking-widest font-semibold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome to Gen Z Global Education Visa
            </motion.p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1A2A44] leading-tight relative">
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#00AEEF] to-cyan-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Best Education Consultancy
              </motion.span>
              <motion.span
                className="block text-xl md:text-2xl lg:text-3xl mt-2 text-[#D32F2F]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                for Australia, UK, New Zealand, and Canada
              </motion.span>
            </h2>
            <motion.p
              className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Gen Z Global Education and Visa Service is a leading consultancy
              in Nepal, located in Baluwatar, Kathmandu. We guide students
              through test preparation, documentation, visa processing, and
              career counseling.
            </motion.p>
            {/* Call-to-Action Button */}
            <motion.div variants={buttonVariants}>
              <Link href="/contact">
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="bg-gradient-to-r from-[#D32F2F] to-[#A31717] flex justify-center items-center gap-3 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold shadow-lg hover:bg-[#00AEEF] transition-all duration-300"
                >
                  Inquiry Now <Send className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <Carousel
              slides={carouselSlides}
              options={{ loop: true }}
              autoplayOptions={{ delay: 4000 }} // 4 seconds delay
            />
            {/* Decorative Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
