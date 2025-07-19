import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// import Link from "next/link";
import { useRef } from "react";

// Define the data for the services
const services = [
  {
    icon: (
      <svg
        className="w-12 h-12 text-[#fffff]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Visa Consultation",
    description:
      "We simplify the visa application process, ensuring compliance and increasing approval chances.",
    buttonText: "Explore More",
    buttonLink: "/services/visa-consultation",
  },
  {
    icon: (
      <svg
       className="w-12 h-12 text-[#fffff]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "University Admission Guidance",
    description:
      "Our experts help you select the best-fit university based on your academic and career goals.",
    buttonText: "Explore More",
    buttonLink: "/services/university-admission",
  },
  {
    icon: (
      <svg
      className="w-12 h-12 text-[#fffff]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 8c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm0 0v4m-8-4h16"
        />
      </svg>
    ),
    title: "Scholarship Assistance",
    description:
      "We guide you in finding and applying for scholarships to support your study abroad journey.",
    buttonText: "Explore More",
    buttonLink: "/services/scholarship-assistance",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-[#fffff]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Documentation Support",
    description:
      "We assist with preparing and organizing all necessary documents for your applications.",
    buttonText: "Explore More",
    buttonLink: "/services/documentation-support",
  },
];

// Define the type for a service
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// Define the type for Card props
interface CardProps {
  service: Service;
  index: number;
}

const Card: React.FC<CardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);
  const shadow = useTransform(
    y,
    [-100, 100],
    ["0px 8px 16px rgba(0, 0, 0, 0.1)", "0px 16px 32px rgba(0, 0, 0, 0.15)"]
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = event.clientX - rect.left - centerX;
      const mouseY = event.clientY - rect.top - centerY;
      x.set(mouseX);
      y.set(mouseY);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      style={{ rotateX, rotateY, perspective: 1000, boxShadow: shadow }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white p-6 rounded-2xl shadow-md w-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 z-10"
    >
      {/* Gradient Icon Background */}
      <motion.div
        className="mb-5 p-3  bg-GenZ-secondary text-white rounded-full w-fit"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {service.icon}
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl md:text-2xl font-bold text-GenZ-secondary mb-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {service.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-700 text-sm md:text-base mb-5 line-clamp-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {service.description}
      </motion.p>

      {/* Button */}
      {/* <Link href={service.buttonLink}>
        <motion.button
          whileHover={{ scale: 1.15, backgroundColor: "#00AEEF" }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-[#D32F2F] to-[#A31717] text-white px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 shadow-md"
        >
          {service.buttonText}
        </motion.button>
      </Link> */}
    </motion.div>
  );
};

const ServicesWeProvide: React.FC = () => {
  // Animation variants for heading and subheading
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Subheading */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headingVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-GenZ-secondary mb-4 relative inline-block"
          >
            Services We Provide
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-[#00AEEF] to-cyan-300 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subheadingVariants}
            className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          >
            We provide comprehensive support for students aspiring to study
            abroad. From choosing the right university to securing scholarships
            and visas, our team ensures a smooth and hassle-free process.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesWeProvide;
