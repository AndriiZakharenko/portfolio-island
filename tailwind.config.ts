import type { Config } from "tailwindcss";
import { colors } from "./constants/styles/colors";
import { fontFamily } from "./constants/styles/fontFamily";
import { boxShadow } from "./constants/styles/boxShadow";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily,
      boxShadow,
    },
  },
  plugins: [],
} satisfies Config;
