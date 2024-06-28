/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.5)",
      },
      borderColor: {
        gradient: "linear-gradient(to right, #ff7e5f, #feb47b)",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
