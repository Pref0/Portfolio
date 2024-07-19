import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF", // white text for highlights
        secondary: "#D4D4D8", // grey for secondary text
        background: "#121212", // dark background
        card: "#1E1E1E", // card background
        accent: "#BB86FC", // accent color
      },
    },
  },
  plugins: [],
};
export default config;
