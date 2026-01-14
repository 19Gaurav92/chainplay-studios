import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This connects to the fonts we set in layout.tsx
        heading: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        background: "#050505", // Darker, pure black
        primary: "#EAB308",    // Gold/Yellow like Juego
        surface: "#121212",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;