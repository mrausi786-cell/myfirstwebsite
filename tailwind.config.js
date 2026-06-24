/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        genz: {
          pink: "#C2593E", // Terracotta Rust
          acid: "#0F2E25", // Midnight Forest Green
          blue: "#8DA89F", // Soft Sage Green
          purple: "#A04B35", // Muted Copper
          orange: "#D98A2B", // Deep Amber
          black: "#0B100E", // Midnight Obsidian
          charcoal: "#151C19", // Deep Green-Charcoal
          gray: "#768580", // Soft Muted Sage
          light: "#FCFAF7", // Warm Sand/Linen
          white: "#FAF8F5", // Clean Linen
          border: "#E4DCD0" // Linen Outline
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        mono: ["Space Grotesk", "monospace"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        widest: ".25em",
        widers: ".15em",
        tighter: "-.05em",
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        }
      }
    },
  },
  plugins: [],
}
