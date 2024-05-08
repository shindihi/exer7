import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-blue': '#1877f2',
        'bg-color': '#f0f2f5',
        'green-btn': '#42b72a',
        "custom-bg": '#141E46',
        "custom-header" : "#141E46",
        "custom-profile": "#B4D4FF",
        "custom-prof": "#141E46",
        "custom-login" : "#141E46",
        "custom-register" : "#141E46"
      },
    },
  },
  plugins: [],
};
export default config;
