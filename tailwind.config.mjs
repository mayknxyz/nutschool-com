/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C75B5B",
          teal: "#2FC7B5",
          "teal-dark": "#28a396",
        },
      },
      fontFamily: {
        brand: ["Vollkorn", "serif"],
        sans: ["Vollkorn", "serif"],
      },
    },
  },
  plugins: [],
};
