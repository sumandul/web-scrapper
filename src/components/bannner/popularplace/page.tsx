import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

// Define the data for the popular study destinations
const destinations = [
  {
    flag: "/aus.webp",
    title: "Study in Australia",
    description:
      "Australia is renowned for its top-ranking universities, vibrant student cities, and welcoming multicultural environment. With globally recognized degrees, post-study work opportunities, and a high standard of living, it's an ideal destination for Nepalese students seeking both academic excellence and lifestyle.",
    buttonText: "Explore More",
    buttonLink: "/study/aus",
  },
  {
    flag: "/can.jpg",
    title: "Study in Canada",
    description:
      "Canada stands out for its quality education, safe environment, and affordable tuition compared to other Western countries. With a strong focus on research and immigration-friendly policies, students from Nepal find Canada a top choice for building their academic and career path.",
    buttonText: "Explore More",
    buttonLink: "/study/canada",
  },
  {
    flag: "/new.jpg",
    title: "Study in New Zealand",
    description:
      "New Zealand offers an innovative, student-centered education system, picturesque landscapes, and a supportive atmosphere for international students. It is especially appealing to Nepalese students looking for a peaceful yet progressive learning environment with work-rights during and after studies.",
    buttonText: "Explore More",
    buttonLink: "/destinations/new-zealand",
  },
  {
    flag: "/uk.jpg",
    title: "Study in the UK",
    description:
      "The UK is home to some of the world’s most prestigious universities with centuries of academic excellence. With a wide variety of courses, flexible programs, and rich cultural experiences, it remains a top destination for students from Nepal aiming to broaden their global horizons.",
    buttonText: "Know More",
    buttonLink: "/destinations/uk",
  },
  {
    flag: "/ir.jpg",
    title: "Study in Ireland",
    description:
      "Ireland is a rising star in international education, offering globally recognized universities and a strong emphasis on research and innovation. Known for its warm hospitality and English-speaking environment, it's an attractive destination for Nepalese students, especially in fields like IT, pharma, and business.",
    buttonText: "Know More",
    buttonLink: "/destinations/ireland",
  },
  {
    flag: "/us.jpg",
    title: "Study in the USA",
    description:
      "The USA remains a dream destination for many due to its unparalleled diversity in academic programs, world-class universities, and endless career possibilities. Nepalese students benefit from a dynamic campus culture, innovative research opportunities, and strong support networks.",
    buttonText: "Know More",
    buttonLink: "/destinations/usa",
  },
];


// Define the type for a destination
interface Destination {
  flag: string;
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
}

// Define the type for Card props
interface CardProps {
  destination: Destination;
  index: number;
}

const Card: React.FC<CardProps> = ({ destination }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);


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
     
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg w-full border border-gray-100 hover:bg-opacity-100 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-xl z-10"
    >
      {/* Gradient Border Accent */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00AEEF] to-cyan-300 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

      {/* Flag */}
      <motion.div
        className="w-full mb-5 overflow-hidden rounded-lg"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={destination.flag}
          alt={`${destination.title} Flag`}
          layout="responsive"
          width={300}
          height={180}
          className="object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl md:text-2xl font-bold text-GenZ-secondary   mb-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {destination.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-700 text-sm md:text-base mb-5 line-clamp-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {destination.description}
      </motion.p>

      {/* Button */}
      <Link href={destination.buttonLink}>
        <motion.button
          whileHover={{ scale: 1.15, backgroundColor: "#00AEEF" }}
          whileTap={{ scale: 0.9 }}
          className="  bg-GenZ-secondary text-white px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 shadow-md"
        >
          {destination.buttonText}
        </motion.button>
      </Link>
    </motion.div>
  );
};

const PopularDestinations: React.FC = () => {
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
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Subheading */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headingVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold  text-GenZ-secondary mb-4 relative inline-block"
          >
            Popular Study Destinations
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-[#00AEEF] to-cyan-300 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subheadingVariants}
            className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          >
            Explore top global study destinations with world-class education,
            career opportunities, and cultural diversity. Choose the right
            country for your academic and professional growth.
          </motion.p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={destination.title}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
