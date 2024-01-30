/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-dark-7": "#d1d5db",
        "default-white": "#fff",
        gray: "rgba(255, 255, 255, 0.12)",
        "dark-dark": "#111928",
        "blue-blue-dark": "#1c3fb7",
        midnightblue: {
          "100": "#17369f",
          "200": "#142d7f",
        },
        "dark-dark-8": "#e5e7eb",
        "dark-dark-2": "#1f2a37",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "#d9d9d9",
        },
        "blue-blue": "#2d68f8",
        "gray-gray-2": "#f3f4f6",
        black: "#000",
        "dark-dark-3": "#374151",
        "dark-dark-4": "#4b5563",
        royalblue: "#2a50ce",
        lightsteelblue: "#aec5f2",
        whitesmoke: "#f9f9f9",
        lightgray: {
          "100": "#d5d5d5",
          "200": "#cecece",
        },
        darkgray: "#adadad",
        "gray-gray-4": "#dee2e6",
      },
      spacing: {},
      fontFamily: {
        "body-medium-medium": "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "357xl": "376px",
        "47xl": "66px",
        "21xl": "40px",
        "51xl": "70px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "9xl": "28px",
      sm: "14px",
      "11xl": "30px",
      "21xl": "40px",
      "29xl": "48px",
      "23xl": "42px",
      "41xl": "60px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
