 
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#ff4dc4",
          blue: "#6ae0ff",
          gray: "#6b7280",
        },
      },
      boxShadow: {
        glow: "0 0 0 6px rgb(255 77 196 / 15%)",
      },
    },
  },
  plugins: [],
};

