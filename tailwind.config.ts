import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#B87A7A",
        accent: {
          1: "#F7C6CE",
          2: "#F2E58C",
          3: "#9DD7D5",
          4: "#E7A5DD",
          5: "#FBD078",
        },
        background: "#FDE9E5",
      },
    },
  },
  plugins: [],
};

export default config; 