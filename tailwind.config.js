/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "#ff5fa8",
        ink: "#0b0b10",
        panel: "#17161f",
        "panel-raised": "#1f1e28",
        line: "#2a2834",
        divider: "#1f1e28",
        fg: "#f1eef6",
        "fg-soft": "#c9c4d3",
        muted: "#aaa5b5",
        subtle: "#8f8a9b",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
