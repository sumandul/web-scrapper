import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Define the data for the blog posts
const blogPosts = [
  {
    image: "/w.webp",
    title: "Post-Study Work Visa in Australia: Best Guide 2025",
    date: "February 6, 2025",
    author: "megha_e...",
    excerpt:
      "Australia has consistently ranked as a preferred choice for international students, providing high-quality education and great job opportunities. A key benefit of studying in Australia is the [...]",
    link: "/blogs/post-study-work-visa-australia",
  },
  {
    image: "/w.webp",
    title:
      "Masters by Research in Australia from Nepal: Start Your Research Journey Today",
    date: "February 6, 2025",
    author: "megha_e...",
    excerpt:
      "Have you ever wanted to explore a subject you love, add new knowledge, and become an expert in your field? A Masters by Research in Australia gives [...]",
    link: "/blogs/masters-by-research-australia",
  },
  {
    image: "/w.webp",
    title: "Intakes in Australia 2025: A Guide for International Students",
    date: "January 14, 2025",
    author: "megha_e...",
    excerpt:
      "Do you know the intake to study in Australia from Nepal in 2025? The first thing you'll need to understand is the concept of intakes. Intakes are [...]",
    link: "/blogs/intakes-in-australia-2025",
  },
  {
    image: "/w.webp",
    title: "Top In-demand Courses in Australia for Nepalese Students",
    date: "January 13, 2025",
    author: "megha_e...",
    excerpt:
      "If you are ready to elevate your education and career, Australia is your perfect destination with a range of world-class degrees—from MBA programs to engineering and [...]",
    link: "/blogs/top-courses-australia",
  },
];

const LatestBlogs = () => {
  // Animation variants for the heading and subheading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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

  // Animation variants for the blog cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2, // Staggered delay for each card
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading and Subheading */}
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headingVariants}
            className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-4 relative inline-block"
          >
            Latest Blogs
            {/* Underline Effect */}
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#00AEEF]"></span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subheadingVariants}
            className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
          >
            Stay updated with our latest blogs, events, and university meetups.
          </motion.p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index} // Pass the index for staggered animation
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-semibold text-[#1A2A44] mb-2">
                  {post.title}
                </h3>

                {/* Date and Author */}
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm md:text-base mb-4 flex-grow">
                  {post.excerpt}
                </p>

                {/* Button */}
                <Link href={post.link}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=" bg-GenZ-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#0F1A2A] transition-colors duration-300"
                  >
                    Read More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
