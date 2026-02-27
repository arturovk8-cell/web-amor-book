import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        paper: "0 20px 50px rgba(43, 23, 8, 0.25)",
        glow: "0 0 40px rgba(252, 165, 165, 0.35)"
      },
      colors: {
        warm: {
          cream: "#fdf8ee",
          page: "#fff9ef",
          ink: "#2f1a0f",
          burgundy: "#7b1f2b",
          coral: "#f97360"
        }
      },
      backgroundImage: {
        paper:
          "radial-gradient(circle at 1px 1px, rgba(125, 96, 69, 0.07) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
