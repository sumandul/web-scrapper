'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Define the data for the footer links
const studentServices = [
  {
    title: "Our Service",
    link: "/our-service",
  },

];
const aboutLinks = [
  { title: "About Us", link: "/about" },
  { title: "Message from Director", link: "/message-from-director" },
];

const quickLinks = [
  { title: "Contact us", link: "/contact" },
];

const socialLinks = [
  { icon: "f", link: "https://www.facebook.com/GenZGlobalEducation", label: "Facebook" },
  { icon: "instagram", link: "https://www.instagram.com/genzglobaledu/", label: "Instagram" },
  { icon: "tiktok", link: "https://www.tiktok.com/@genzglobal", label: "tiktok" },
  { icon: "linkedin", link: "https://www.linkedin.com/company/genzglobal/", label: "linkedin" },

];

const policyLinks = [
  { title: "Privacy Policy", link: "/policy" },
  { title: "Code of Conduct", link: "/code-of-conduct" },
  { title: "Modern Slavery Statement ", link: "/modern-salvery" },
];

const Footer = () => {
  // Animation variants for the footer sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1, // Staggered delay for each link
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <footer
        className="py-12 text-white relative"
        style={{
          backgroundImage: "url('/ft.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 opacity-80"></div> */}

   

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Student Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h3 className="text-xl font-semibold mb-4">Student Services</h3>
              <ul className="space-y-2">
                {studentServices.map((service, index) => (
                  <motion.li
                    key={service.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={linkVariants}
                    custom={index}
                  >
                   <Link href={service.link}>{service.title}</Link>
                      {/* href={service.link} */}
                    
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* About */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                {aboutLinks.map((link, index) => (
                  <motion.li
                    key={link.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={linkVariants}
                    custom={index}
                  >
                    {/* <Link
                      href={link.link}
                      className="text-gray-300 hover:text-[#00AEEF] transition-colors duration-300"
                    > */}
                    <Link href={link.link}>{link.title}</Link>
                 
                    {/* </Link> */}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.length > 0 && quickLinks.map((link, index) => (
                  <motion.li
                    key={link.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={linkVariants}
                    custom={index}
                  >
                    <Link
                      href={link.link}
                      className="text-gray-300 hover:text-[#00AEEF] transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Logo and Social Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="flex flex-col items-start md:items-end"
            >
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="Expert Education & Visa Services"
                  width={200}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
  <motion.a
    key={social.label}
    href={social.link}
    target="_blank"
    rel="noopener noreferrer"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={linkVariants}
    custom={index}
    className="text-gray-300 hover:text-[#00AEEF] transition-colors duration-300"
  >
    {social.icon === "f" ? (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ) : social.icon === "instagram" ? (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ) : social.icon === "tiktok" ? (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M16.5 1.5c0 2.425 1.925 4.4 4.3 4.5v3.125a7.75 7.75 0 01-4.8-1.625V15.4c0 4.4-3.625 7.9-8.025 7.6C4.65 22.7 1.5 19.325 1.5 15.4c0-3.85 2.9-7.025 6.675-7.4V11C6.425 11.35 5.5 12.7 5.5 14.25c0 1.85 1.5 3.375 3.375 3.4 1.95.025 3.625-1.6 3.625-3.55V1.5h4z" />
      </svg>
    ) : social.icon === "linkedin" ? (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.8S5 4.1 6 4.1s1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13 11.3h-3v-5.6c0-1.4-.5-2.3-1.8-2.3-1 0-1.5.7-1.8 1.3-.1.3-.1.7-.1 1.1v5.5h-3v-10h3v1.3c.4-.6 1.2-1.5 2.9-1.5 2.1 0 3.7 1.4 3.7 4.4v5.8z" />
      </svg>
    ) : null}
  </motion.a>
))}

              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          >
            <p>
              Copyright © 2025, GenZ Global Education and visa services.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {policyLinks.map((policy, index) => (
                <motion.div
                  key={policy.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={linkVariants}
                  custom={index}
                >
                  <Link href={policy.link}>{policy.title}</Link>
                  
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
