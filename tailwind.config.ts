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
        background: "#0B1120", // Deep Midnight Blue
        surface: "#1E293B",    // Lighter Slate for cards
        primary: "#FCD34D",    // Electric Gold (Accent)
        secondary: "#64748B",  // Slate Grey (Text)
        success: "#14F195",    // Solana Green (Crypto hints)
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-space)'], // You can add fonts later
      },
    },
  },
  plugins: [],
};
export default config;