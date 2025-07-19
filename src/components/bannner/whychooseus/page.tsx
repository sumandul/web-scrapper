import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Define the data for the "Why Choose Us" cards with descriptions
const whyChooseUsItems = [
  {
    icon: (
      <svg
        className="w-12 h-12 text-[#00AEEF]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V9m-2-4a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2V5"
        />
      </svg>
    ),
    title: "Expert Guidance",
    description:
      "Personalized advice from industry professionals to shape your future.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-[#00AEEF]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4"
        />
      </svg>
    ),
    title: "100+ Partner Universities",
    description:
      "Access to top-tier institutions worldwide for your education.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-[#00AEEF]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "High Visa Success Rate",
    description: "Proven track record in securing student visas effortlessly.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-[#00AEEF]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2zM3 8h2a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2v-6a2 2 0 012-2zm7-4h4M9 16h6"
        />
      </svg>
    ),
    title: "Personalized Counseling",
    description: "Tailored support to meet your unique goals and aspirations.",
  },
];

// Define the type for a WhyChooseUs item
interface WhyChooseUsItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Define the type for Card props
interface CardProps {
  item: WhyChooseUsItem;
  index: number;
}

const Card: React.FC<CardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);


  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = event.clientX - rect.left - centerX;
      const mouseY = event.clientY - rect.top - centerY;
      x.set(mouseX * 0.1);
      y.set(mouseY * 0.1);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -3 : 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      style={{ rotateX, rotateY, perspective: 1000, }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white bg-opacity-90 p-6 rounded-2xl  w-full hover:bg-opacity-100 transition-all duration-500 transform hover:-translate-y-4 z-10 border border-gray-100"
    >
      {/* Gradient Border Accent */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00AEEF] to-cyan-300 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

      {/* Icon */}
      <motion.div
        className="mb-5 p-3  text-GenZ-secondary  rounded-full w-fit mx-auto"
        whileHover={{ scale: 1.15, rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        {item.icon}
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl md:text-2xl font-bold  text-GenZ-secondary mb-3 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {item.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-700 text-sm md:text-base text-center line-clamp-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {item.description}
      </motion.p>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24   relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full  pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          className="text-4xl sm:text-5xl md:text-4xl font-extrabold text-center text-[#1A2A44] mb-12 md:mb-16 lg:mb-20 relative"
        >
          <span className="bg-clip-text  text-GenZ-secondary">
            Why Choose Us
          </span>
          <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#00AEEF] to-cyan-300 rounded-full"></span>
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyChooseUsItems.map((item, index) => (
            <Card key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
