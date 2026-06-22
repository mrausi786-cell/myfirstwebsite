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
        luxury: {
          black: "#111111",
          charcoal: "#1A1A1A",
          gray: "#767676",
          lightGray: "#F5F5F5",
          border: "#E5E5E5",
          beige: {
            DEFAULT: "#D7D2CB",
            light: "#F7F6F4",
            dark: "#A39B92",
            accent: "#EAE6DF"
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        widest: ".25em",
        widers: ".15em"
      }
    },
  },
  plugins: [],
}
