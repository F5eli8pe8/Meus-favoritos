import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
    },
  },
  animation: {
    fade: "fade 2s ease-in-out",
    },
  },
},
//Esse codigo acima apartir dos "Keyframes" foi colocado para que eu pudesse dar um efeito de fade usando o tailwind css
  plugins: [],
} satisfies Config;
