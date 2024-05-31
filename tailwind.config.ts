import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "1980px",
    },
    extend: {
      textShadow: {
        outline:
          "0.5px 0.5px 0px #555555, -0.5px -0.5px 0px #555555, 0.5px -0.5px 0px #555555, -0.5px 0.5px 0px #555555",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".text-shadow-outline": {
          textShadow:
            "0.5px 0.5px 0px #555555, -0.5px -0.5px 0px #555555, 0.5px -0.5px 0px #555555, -0.5px 0.5px 0px #555555",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
