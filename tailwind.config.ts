import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: "var(--font-jetbrains-mono)",
        lateef: "var(--font-lateef)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        highlight: "var(--highlight)",
        offwhite: "var(--offwhite)",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
