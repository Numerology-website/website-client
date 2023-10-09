import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "auth-input-gray": "rgba(243, 246, 249, 0.36)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "galaxy-pattern": "url('/assets/images/bg.jpg')",
        "footer-bg": "url('/assets/images/footer-bg.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
export default config
