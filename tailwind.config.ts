import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
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
        "sign-mandala-bg": "url('/assets/sign-carousel/sign-mandala-bg.png')",
        "sign-balance-bg": "url('/assets/sign-carousel/sign-balance-bg.png')",
        "sign-birthday-bg": "url('/assets/sign-carousel/sign-birthday-bg.png')",
        "sign-core-bg": "url('/assets/sign-carousel/sign-core-number-bg.png')",
        "sign-personality-bg":
          "url('/assets/sign-carousel/sign-personality-bg.png')",
        "sign-rational-bg": "url('/assets/sign-carousel/sign-rational-bg.png')",
        "sign-soulurge-bg": "url('/assets/sign-carousel/sign-soulurge-bg.png')",
        "lifepath-bg": "url('/assets/images/lifepath-bg.jpg')",
        "block-bg-light": "url('/assets/images/block_bg_light_right.jpg')",
        "mandala-bg": "url('/assets/images/mandala-bg.png')",
        "mandala-object": "url('/assets/images/mandala-object-1.png')",
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
        "sign-pulse": "sign-pulse 2.5s linear infinite",
        "mandala-pulse": "sign-pulse 1s linear infinite",
        "mandala-object": "spin-reverse 30s linear infinite",
      },
      keyframes: {
        "sign-pulse": {
          "0%, 100%": { scale: "1" },
          "50%": { scale: "1.05" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
export default config
