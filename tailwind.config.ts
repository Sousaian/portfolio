import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0e1a",
        foreground: "#e2e8f0",
        primary: "#0ea5e9",
        "primary-dark": "#0284c7",
        secondary: "#0f1420",
        muted: "#94a3b8",
        accent: "#38bdf8",
        card: "#0f1420",
        border: "#1a2332",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;