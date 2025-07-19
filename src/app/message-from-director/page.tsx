"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

const DirectorMessage = () => {
  // Animation variants for text and image
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16 sm:py-20 px-6 sm:px-10 lg:px-32 text-gray-900">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image Section */}
        <motion.div
          className="relative w-full h-80 sm:h-96 lg:h-[62rem]  rounded-md overflow-hidden shadow-xl border border-gray-200/50 group"
          variants={childVariants}
        >
          <Image
            src="/ppp.jpg"
            alt="Roshan Ghimire"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        </motion.div>

        {/* Text Section */}
        <motion.div className="" variants={containerVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold  text-GenZ-secondary tracking-tight"
            variants={childVariants}
          >
            Message from the Director
          </motion.h2>
          <motion.p
  className="text-lg sm:text-xl text-gray-600 italic mb-4"
  variants={childVariants}
>
  &quot;Transforming lives through international education is our purpose.&quot;
</motion.p>


          <motion.div className="space-y-4 text-base sm:text-[1.1rem] leading-relaxed text-gray-700">
            <motion.p variants={childVariants}>
              As the Founder and Managing Director of Gen Z Global Education & Visa Services Pvt. Ltd., I’ve dedicated over 15 years to guiding students toward their dreams of studying abroad. Witnessing their success in unlocking global opportunities is what drives us.
            </motion.p>
            <motion.p variants={childVariants}>
              At Gen Z Global, we’re not just consultants—we’re your partners. Our team of ICEF-accredited and internationally certified counselors, led by myself as an Associate Fellow of the International Education Association of Australia, ensures you receive expert guidance.
            </motion.p>
            <motion.p variants={childVariants}>
              Our commitment to care, transparency, and long-term success sets us apart. From initial counseling to pre-departure support, we’re with you every step, delivering honest and professional service.
            </motion.p>
            <motion.p className="italic text-gray-500" variants={childVariants}>
              Thank you for choosing Gen Z Global. Let’s shape a future without borders together.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-8 border-t border-gray-200/50 pt-5"
            variants={childVariants}
          >
            <p className="font-semibold text-lg text-indigo-700">Warm regards,</p>
            <p className="font-medium text-lg text-gray-900">Roshan Ghimire</p>
            <p className="text-sm text-gray-600">Founder & Managing Director</p>
            <p className="text-sm text-gray-600">
              Associate Fellow (IEAA) | ICEF Accredited | ITAC 1316, | QEAC 13868
            </p>
            <p className="text-sm text-gray-600">
              Gen Z Global Education & Visa Services Pvt. Ltd.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DirectorMessage;