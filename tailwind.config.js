/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "var(--bg-color)",
        "primary-text": "var(--text-color)",
        "primary-sidebar": "var(--sidebar-color)",
        "primary-border": "var(--border-color)",
        "primary-hover": "var(--primary-hover-color)",
        "secondary-hover": "var(--secondary-hover-color)",
        "primary-border": "var(--border-color)",
      }
    },
  },
  plugins: [],
};
