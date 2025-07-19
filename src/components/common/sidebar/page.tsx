"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState("Profile");

  const menuItems = ["Profile", "Booking", "Settings", "Logout"];

  return (
    <motion.div
      className="h-screen w-64 bg-gray-800 text-white p-4"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <ul>
        {menuItems.map((item) => (
          <motion.li
            key={item}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              selected === item ? "bg-blue-600 text-white" : "hover:bg-gray-700"
            }`}
            onClick={() => setSelected(item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
