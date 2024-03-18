/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          200: "hsl(var(--bg-200))",
          300: "hsl(var(--bg-300))",
          gradient: "hsl(var(--bg-gradient))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          200: "hsl(var(--accent-200))"
        },
        frontGround: {
          DEFAULT: "hsl(var(--text))",
          200: "hsl(var(--text-200))",
          white: "hsl(var(--text-white))"
        },
        titleGradient: {
          DEFAULT: "hsl(var(--text-gradient))",
          bg: "hsl(var(--bg-text-gradient))"
        }
      }
    }
  },
  plugins: []
};
