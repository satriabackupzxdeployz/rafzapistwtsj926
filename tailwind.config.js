/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        cyan: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63"
        },
        flame: {
          50: "#FFF4ED",
          100: "#FFE6D5",
          300: "#FCAD7A",
          500: "#FB7B25",
          600: "#EA5C0B",
          700: "#C2440A"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      boxShadow: {
        clay: "8px 8px 20px rgba(11, 18, 32, 0.08), -6px -6px 16px rgba(255, 255, 255, 0.9)",
        "clay-sm": "4px 4px 10px rgba(11, 18, 32, 0.07), -3px -3px 8px rgba(255, 255, 255, 0.85)",
        "clay-pressed": "inset 4px 4px 10px rgba(11, 18, 32, 0.10), inset -3px -3px 8px rgba(255, 255, 255, 0.7)",
        glow: "0 0 0 1px rgba(6, 182, 212, 0.15), 0 18px 40px -12px rgba(6, 182, 212, 0.35)",
        "glow-flame": "0 16px 32px -10px rgba(251, 123, 37, 0.45)"
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tilt, 0deg))" },
          "50%": { transform: "translateY(-10px) rotate(var(--tilt, 0deg))" }
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -25px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.97)" }
        },
        typeline: {
          "0%": { width: "0%" },
          "70%": { width: "100%" },
          "100%": { width: "100%" }
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
        typeline: "typeline 3.5s steps(40, end) infinite",
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out both"
      }
    }
  },
  plugins: []
};
