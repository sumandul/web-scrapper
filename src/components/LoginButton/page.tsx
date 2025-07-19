import React, { useState } from "react";
import { motion } from "framer-motion";

const RegistrationComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreement, setAgreement] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreement) {
      alert("Please accept the Terms and Conditions");
      return;
    }
    // Add your registration logic here
    console.log("Registration attempted with:", { email, password });
  };

  // Bubble animation variants
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
    <div className=" bg-white w-full rounded-md">
      {/* Animated Bubbles (CSS Circles instead of images) */}
      <motion.div
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-20 w-12 h-12    rounded-full opacity-30 blur-sm"
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

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" p-8 rounded-xl shadow-2xl w-full max-w-md z-10"
      >
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-red-600 mb-2">
            Join Shoes Store
          </h1>
          <p className="text-gray-600">
            Ignite Your Red Passion - Sign Up for Bold Style!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Registration Tabs */}
          {/* <div className="flex justify-center mb-6">
            <button className="bg-red-500 text-white px-6 py-3 rounded-tl-2xl rounded-bl-2xl font-semibold shadow-md hover:bg-red-600 transition-all">
              Register Now
            </button>
            <button className="text-gray-500 px-6 py-3 border-t border-l border-r border-gray-200 hover:text-gray-700">
              Already a member?
            </button>
          </div> */}

          {/* Email Input */}
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-red-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400 transition-all"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 block mb-2"
            >
              Password *
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 border border-red-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400 transition-all"
              placeholder="Create a password"
              required
            />
          </motion.div>

          {/* Agreement Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreement"
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
              className="mr-2 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <label htmlFor="agreement" className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-red-500 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Error Message for Agreement */}
          {!agreement && (
            <p className="text-red-500 text-sm">Please agree to the terms.</p>
          )}

          {/* Registration Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ef4444" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-red-600 transition-all"
          >
            SIGN UP NOW
          </motion.button>

          {/* Google Sign-up Option */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="w-full bg-white text-gray-800 py-3 px-6 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-all"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.78h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.78c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign up with Google
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegistrationComponent;
