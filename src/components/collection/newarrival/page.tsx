import React from "react";
import { motion } from "framer-motion";

// NewArrival Component
const NewArrival = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-50">
      {/* Featured Product Card */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl flex-1 border border-gray-200 hover:shadow-3xl transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Trigger animation on scroll
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h4 className="text-red-500 font-semibold text-sm tracking-wide uppercase">
          NEW ARRIVAL
        </h4>
        <h2 className="text-3xl font-bold mt-2 text-gray-900">
          AIR JORDAN 6 G X EASTSIDE
        </h2>
        <p className="text-gray-600 text-base mt-3 leading-relaxed">
          Feel unbeatable from the tee box to the final putt in a design that’s
          pure early MJ: speed, class, and ultimate comfort.
        </p>
        <motion.img
          src="/line.jpeg" // Replace with actual Air Jordan 6 G x Eastside image
          alt="Air Jordan 6 G x Eastside"
          className="mt-6 w-full h-48 object-contain rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <button className="mt-6 w-full py-3 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
          View Product
        </button>
      </motion.div>

      {/* Special Offer/Discount Card */}
      <motion.div
        className="bg-gradient-to-br from-red-500 to-red-700 text-white p-8 rounded-2xl shadow-2xl flex-1 relative overflow-hidden hover:shadow-3xl transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Trigger animation on scroll
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h4 className="font-semibold text-sm tracking-wide uppercase">
          Limited Time Offer
        </h4>
        <h2 className="text-3xl font-bold mt-2">30% Off on New Arrivals</h2>
        <p className="text-lg mt-3">
          Grab your favorite sneakers now at an exclusive discount. Limited
          stock available!
        </p>
        <motion.img
          src="/line.jpeg" // Replace with a discount or sneaker-related image
          alt="Discount Offer"
          className="mt-6 w-32 h-32 "
          whileHover={{ scale: 1.05, opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        />
        <button className="mt-6 w-full py-3 bg-white text-red-500 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
          Shop Now
        </button>
        <motion.div
          className="absolute -bottom-8 -right-8 bg-white opacity-20 w-40 h-40 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default NewArrival;
