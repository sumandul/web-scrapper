import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const whatWeDoSteps = [
  {
    number: 1,
    title: "Free Consultation",
    description:
      "We assess your academic background and career aspirations to provide personalized guidance.",
  },
  {
    number: 2,
    title: "University Selection",
    description:
      "We help you choose the right university based on your preferences and eligibility.",
  },
  {
    number: 3,
    title: "Application Assistance",
    description:
      "Our experts ensure a flawless application process with proper documentation.",
  },
  {
    number: 4,
    title: "Visa Processing",
    description:
      "We guide you through the visa process, ensuring a high success rate.",
  },
  {
    number: 5,
    title: "Pre-Departure Support",
    description:
      "We provide essential pre-departure guidance, including travel and accommodation advice.",
  },
  {
    number: 6,
    title: "Post-Departure Support",
    description:
      "We provide essential post-departure guidance, including travel and accommodation advice.",
  },
];

const WhatWeDo = () => {
  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  const stepVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      scale: 0.95,
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5,
        delay: i * 0.15,
      },
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 0.5,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.15 + 0.2,
        ease: "easeOut",
      },
    }),
  };

  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, 1]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  return (
    <section
      className="py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.6) 50%,
          rgba(0, 0, 0, 0.9) 100%
        ), url('/au.jpg')`, // Corrected URL
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Subheading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={headingVariants}
            className="text-2xl sm:text-3xl md:text-4xl  font-extrabold bg-clip-text   text-GenZ-secondary mb-3 sm:mb-4"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={subheadingVariants}
            className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl mx-auto"
          >
            Our step-by-step process ensures a smooth transition from
            application to admission, making your study abroad journey
            hassle-free.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Timeline Line - Hidden below md breakpoint */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M2,0 Q2,150 2,300 Q2,450 2,600 Q2,750 2,900"
                fill="none"
                stroke="#0f8f96"
                strokeWidth="2"
                strokeDasharray="6 6"
                opacity="0.3"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {whatWeDoSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: false, amount: 0.3 }}
              variants={stepVariants}
              custom={index}
              className={`relative bg-white bg-opacity-10 backdrop-blur-lg p-4 sm:p-5 md:p-6 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg text-center z-10 border border-white border-opacity-20 ${
                index % 2 === 0
                  ? "self-start md:mr-8 lg:mr-16"
                  : "self-end md:ml-8 lg:ml-16"
              }`}
            >
              {/* Step Number */}
              <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full  bg-GenZ-secondary text-white flex items-center justify-center text-base sm:text-lg md:text-xl font-bold">
                {step.number}
              </div>

              {/* Step Title and Description */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold  text-GenZ-secondary mt-5 sm:mt-6 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg">
                {step.description}
              </p>

              {/* Decorative Dot */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={dotVariants}
                custom={index}
                className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6  bg-GenZ-secondary rounded-full opacity-50"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
