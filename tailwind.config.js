import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        camploomis: ["var(--font-camploomis"]
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      camploomis: {
        // custom theme
        extend: "dark",
        colors: {
          background:"#E4634A",
          primary: {
            DEFAULT: "#ffe5d9",
            foreground: "#0075bc",
          },
          focus: "#0075bc",
        },
      },
    }
  })],
}
