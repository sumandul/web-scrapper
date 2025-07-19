import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";

const BrandLogo = () => {
  // Initialize Embla with Autoplay (1.5-second delay, infinite loop)
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1500 }),
  ]);

  // Sample brand logos (unchanged paths as requested)
  const logos = [
    "/a.png",
    "/p.png",
    "/n.png",
    "/r.png",
    "/x.png",
    "/a.png",
    "/p.png",
    "/n.png",
    "/r.png",
    "/x.png",
    "/p.png",
    "/n.png",
    "/r.png",
    "/x.png",
  ];

  // Advanced Framer Motion animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 30, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      filter: "grayscale(0%) brightness(1.2)",
      boxShadow: "0 8px 20px rgba(255, 0, 0, 0.4)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Container animation for a subtle entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <motion.div
      className="overflow-hidden  "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div ref={emblaRef}>
        <div className="flex items-center h-full">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex-[0_0_150px] p-4 bg-white rounded-xl shadow-md border border-red-100 mx-2 h-[150px] flex items-center justify-center"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Image
                src={logo}
                width={100}
                height={100}
                alt={`Brand ${index + 1}`}
                className="w-full h-full object-contain filter grayscale contrast-125 hover:filter-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BrandLogo;
