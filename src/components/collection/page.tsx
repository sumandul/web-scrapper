import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Shoe {
  name: string;
  price: string;
  rating: number;
  sold: number;
  image: string;
  tag?: string;
}

const Card: FC<{ shoe: Shoe }> = ({ shoe }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-white shadow-lg rounded-2xl p-4"
    >
      {shoe.tag && (
        <span
          className={`absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg`}
        >
          {shoe.tag}
        </span>
      )}
      <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
        <Heart size={20} />
      </button>
      <Image
        width={100}
        height={100}
        src={shoe.image}
        alt={shoe.name}
        className="w-full h-40 object-contain"
      />
      <div className="mt-4">
        <h3 className="font-semibold text-lg">{shoe.name}</h3>
        <div className="flex items-center mt-1">
          <Star size={16} className="text-yellow-500" />
          <span className="ml-1 text-sm">
            {shoe.rating} • {shoe.sold} items sold
          </span>
        </div>
        <p className="text-xl font-bold mt-2">{shoe.price}</p>
      </div>
    </motion.div>
  );
};

const shoes = [
  {
    name: "Nike Air Max 90",
    price: "Rp 1,799,000",
    rating: 4.9,
    sold: 112,
    image: "/line.jpeg",
    tag: "Just in",
  },
  {
    name: "Nike Air Max Pulse",
    price: "Rp 2,379,000",
    rating: 4.9,
    sold: 313,
    image: "/line.jpeg",
    tag: "Just in",
  },
  {
    name: "Nike Air Force 1 '07",
    price: "Rp 1,729,000",
    rating: 4.8,
    sold: 321,
    image: "/line.jpeg",
  },
  {
    name: "Nike Air Max 97",
    price: "Rp 2,849,000",
    rating: 4.9,
    sold: 110,
    image: "/line.jpeg",
    tag: "Just in",
  },
  {
    name: "Nike Gamma Force",
    price: "Rp 1,399,000",
    rating: 4.8,
    sold: 81,
    image: "/line.jpeg",
  },
  {
    name: "Nike Cortez",
    price: "Rp 1,299,000",
    rating: 4.9,
    sold: 19,
    image: "/line.jpeg",
    tag: "Just in",
  },
  {
    name: "Nike Alphafly 2",
    price: "Rp 4,089,000",
    rating: 4.9,
    sold: 10,
    image: "/line.jpeg",
    tag: "Sold out",
  },
  {
    name: "Nike Air Max 1 Premium",
    price: "Rp 2,489,000",
    rating: 4.9,
    sold: 87,
    image: "/line.jpeg",
  },
];

export default function ShoesGrid() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Shop Now, Goodlook Later
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Find your dream shoes, make it happen.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shoes.map((shoe, index) => (
          <Link key={index} href={"/product/3"}>
            <Card shoe={shoe} />
          </Link>
        ))}
      </div>
    </div>
  );
}
