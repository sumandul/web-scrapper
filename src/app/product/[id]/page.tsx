"use client";
// import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
// Sample product data (replace with actual data fetching or props)
const product = {
  name: "Air Jordan 6 G × Eastside",
  price: "Rp 3,689,000,000",
  rating: 4.9,
  reviews: 5,
  availableSizes: [
    "EU 34",
    "EU 37",
    "EU 38",
    "EU 40",
    "EU 42",
    "EU 43",
    "EU 44",
  ],
  images: [
    "/b2.jpg", // Replace with your image path in the public folder
    "/b2.jpg",
    "/b2.jpg",
    "/b2.jpg",
  ],
  shippingInfo: "Estimated delivery: 5-10 working days",
  note: "Bargain Prestige Box with the 10-Oct-2023 estimated arrival. Orders are processed and shipped on the same day based on your order confirmation.",
  relatedProducts: [
    {
      name: "Nike Air Max STSYSMT",
      price: "Rp 1,495,000",
      image: "/b2.jpg",
      rating: 4.5,
    },
    {
      name: "Nike Air Rift",
      price: "Rp 1,075,000",
      image: "/b2.jpg",
      rating: 4.4,
    },
    {
      name: "Nike Air Max Plus",
      price: "Rp 1,429,000",
      image: "/b2.jpg",
      rating: 4.7,
    },
    {
      name: "Nike Calm",
      price: "Rp 1,065,000",
      image: "/b2.jpg",
      rating: 4.3,
    },
    {
      name: "Nike Air Max 90",
      price: "Rp 1,799,000",
      image: "/b2.jpg",
      rating: 4.6,
    },
    {
      name: "Nike Air Pulse",
      price: "Rp 2,399,000",
      image: "/b2.jpg",
      rating: 4.8,
    },
    {
      name: "Nike Air Force 1 07",
      price: "Rp 1,729,000",
      image: "/b2.jpg",
      rating: 4.5,
    },
    {
      name: "Nike Air Max 97",
      price: "Rp 2,849,000",
      image: "/b2.jpg",
      rating: 4.9,
    },
  ],
};

export default function ProductDetailPage() {
  //   const params = useParams();
  //   const { id } = params; // Get the dynamic id from the URL

  // Fallback in case product or images are undefined
  if (!product || !product.images || product.images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        Product not found or images unavailable.
      </div>
    );
  }

  // Bubble animation variants for eyecatchy effect
  const bubbleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      y: [0, -20, 0],
      rotate: [0, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated Bubbles (CSS Circles) for eyecatchy effect */}
      <motion.div
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-20 w-12 h-12 bg-white rounded-full opacity-30 blur-sm"
      />
      <motion.div
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        className="absolute top-40 right-20 w-16 h-16 bg-red-300 rounded-full opacity-30 blur-sm"
        transition={{ delay: 0.5 }}
      />
      <motion.div
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-20 left-40 w-14 h-14 bg-yellow-400 rounded-full opacity-30 blur-sm"
        transition={{ delay: 1 }}
      />

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col md:flex-row"
        >
          {/* Product Image and Gallery (Left Column) */}
          <div className=" basis-[50%] space-y-4">
            <div className="relative bg-gray-50 rounded-xl p-4">
              <span className="absolute top-2 left-2 bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-semibold">
                NEW ARRIVAL!
              </span>
              <motion.img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.currentTarget.src = "/fallback-image.jpg"; // Optional fallback image
                }}
              />
              <button className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-20 h-20 object-contain rounded-md cursor-pointer hover:opacity-80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </div>
          </div>

          {/* Product Details (Right Column) */}
          <div className="space-y-6 mt-6 md:mt-0 md:ml-6">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-red-600">
                {product.price}
              </p>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-600">{product.rating}</span>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
                <span className="text-gray-500">All Sold</span>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Available Size
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-red-600 transition-all"
              >
                Buy Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition-all"
              >
                Add to Bag
              </motion.button>
            </div>

            {/* Product Info and Note */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Product Info
              </h3>
              <p className="text-gray-600">{product.shippingInfo}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Note</h3>
              <p className="text-gray-600">{product.note}</p>
            </div>
          </div>
        </motion.div>

        {/* Rating & Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-6 mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Rating & Reviews
          </h2>
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-bold text-red-600">
              {product.rating}
            </div>
            <div className="flex text-yellow-500">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>☆</span>
            </div>
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 italic">
              I’ve always wanted a pair like this, absolutely my favorite shoes
              anytime I put them on. - Alexander Stewart
            </p>
            <p className="text-gray-600 italic mt-2">
              Great quality and fits perfectly, I’m very happy with my purchase
              - Samuel Douglas
            </p>
          </div>
        </motion.div>

        {/* Explore More Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className=" p-6 mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Explore More Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {product.relatedProducts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  width={100}
                  height={100}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain rounded-md"
                />
                <h3 className="text-lg font-medium text-gray-800 mt-2">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.price}</p>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-600">{item.rating}</span>
                </div>
                <button className="mt-2 text-red-500 hover:text-red-700">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
