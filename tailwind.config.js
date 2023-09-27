/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#f9f9f9",
        "neutral-100": "#f4f4f4",
        "neutral-200": "#e4e4e4",
        "neutral-300": "#d3d3d3",
        "neutral-400": "#a2a2a2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0a0a0a",
        "neutral-1000": "#000",
        "gray": "rgba(255, 255, 255, 0.12)",
        "red-error": "#8b141a",
        "green-success": "#00be74",
        "blue-wash": "rgba(117, 190, 239, 0.2)",
        "twitter-blue": "#1d9bf0",
        "card-fill": "#16181c",
        "searchbar-fill": "#212327",
      },
      spacing: {},
      fontfamily: {
        "px-regular": "Inter",
      },
    },
    fontSize: {
      base: "1rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};