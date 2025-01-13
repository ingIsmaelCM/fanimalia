/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F1F1F1",
        secondary: "#1E3E62",
        accent: "#FF6500",
        light: "#F1F1F1",
        gray: "#808080",
        dark: "#1C1C1C",
        "gray-50": "#F9FAFB",
        "gray-100":"#f3f4f6",
        "gray-200": "#E5E7EB",
        "gray-300": "#D1D5DB",
        "gray-400": "#9CA3AF",
        "gray-500": "#6B7280",
        "gray-600": "#4B5563",
        "gray-700": "#374151",
        "gray-800": "#1F2937",
        "gray-900":"#111827"
        
      },
      screens:{
        "md": "840px",
      }
    },
  },
  darkMode: "selector",
  plugins: [],
}