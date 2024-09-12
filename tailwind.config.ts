import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      'white': '#fff',
      'orange': {
        50: '#ffefe6',
        100: '#ffcfb0',
        200: '#ffb78a',
        300: '#ff9654',
        400: '#ff8233',
        500: '#ff6300',
        600: '#e85a00',
        700: '#b54600',
        800: '#8c3600',
        900: '#6b2a00',
      },
      'black': {
        50: '#e6e6e6',
        100: '#b0b0b0',
        200: '#8a8a8a',
        300: '#545454',
        400: '#333333',
        500: '#000000',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000',
      },
    }
  },
  plugins: [],
};
export default config;
