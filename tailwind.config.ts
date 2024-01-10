import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "4xl": "30px",
      },
      dropShadow: {
        red: "30px 10px 25px rgba(255, 0, 0, 0.25)",
        green: "30px 10px 25px rgba(0, 255, 0, 0.25)",
        yellow: "30px 10px 25px rgba(255, 255, 0, 0.25)",
        stone: "30px 10px 25px rgba(0, 0, 0, 0.25)",
        lime: "30px 10px 25px rgba(50, 205, 50, 0.25)",
        blue: "30px 10px 25px rgba(0, 0,255, 0.25)",
      },
      colors: {
        skyblue: "#E7FAFE",
      },
    },
  },
  plugins: [],
};
export default config;
