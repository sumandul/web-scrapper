import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        GenZ: {
          primary: "#1E3A8A",
          secondary: "#0F8F96",
          accent: "#2563EB",
          light: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Montserrat"],
        heading: ["'Poppins'", "Montserrat"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
