import { motion } from "framer-motion";
import { ShieldCheck, Headphones, Truck } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Secure Payment",
    description: "Secure on order",
  },
  {
    icon: <Headphones size={32} />,
    title: "24/7 support",
    description: "Contact us 24 hrs a day",
  },
  {
    icon: <Truck size={32} />,
    title: "Fast Delivery",
    description: "Fast delivery on order",
  },
];

export default function Service() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 p-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-4 p-4  bg-red-100 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="p-3  bg-red-500 text-white rounded-lg">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
