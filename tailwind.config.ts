import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abhaya: "var(--font-abhaya-libre)",
        beau: "var(--font-beau-rivage)",
        ephesis: "var(--font-ephesis)",
        cinzel: "var(--font-cinzel)"

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        musgo: '#142601AB'
      },
    },
  },
  plugins: [],
} satisfies Config;
