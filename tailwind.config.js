/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./consultation-confirmation/**/*.html",
    "./lookbook/**/*.html",
    "./lookbook-delivery/**/*.html",
    "./schedule-consultation/**/*.html"
  ],
  safelist: [
    "rotate-45",
    "opacity-0",
    "opacity-100",
    "translate-y-6",
    "translate-y-4",
    "translate-y-0",
    "scale-95",
    "scale-100",
    "pointer-events-none"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Inter", "sans-serif"]
      },
      colors: {
        "brand-teal": "#0e7490",
        "brand-dark": "#1e293b",
        "action-gold": "#d97706",
        "canvas-light": "#f8fafc"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    }
  }
};
