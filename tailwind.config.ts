// tailwind.config.js
import {nextui} from "@nextui-org/react";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    layout:{
      fontSize: {
        tiny: "0.75rem",
        small: "0.875rem",
        medium: "1rem",
        large: "1.5rem",
      }
    },
    themes:{
      dark: {
        colors: {
          background: "#000000",
          foreground: "#ECEDEE",
          primary: {
            50: "#e6f1fe",
            100: "#cce3fd",
            200: "#99c7fb",
            300: "#66aaf9",
            400: "#338ef7",
            500: "#006FEE",
            600: "#005bc4",
            700: "#004493",
            800: "#002e62",
            900: "#001731",
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
          success: {
            50: "#052814",
            100: "#095028",
            200: "#0e793c",
            300: "#12a150",
            400: "#17c964",
            500: "#45d483",
            600: "#74dfa2",
            700: "#a2e9c1",
            800: "#d1f4e0",
            900: "#e8faf0",
            foreground: "#FFFFFF",
            DEFAULT: "#17c964",
          },
          focus: "#006FEE",
        },
      },
    }
  }),]
}

export default config;