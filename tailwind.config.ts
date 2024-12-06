import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      backgroundImage: {
        'icon-work': "url('/images/icon-work.svg')",
        'icon-play': "url('/images/icon-play.svg')",
        'icon-study': "url('/images/icon-study.svg')",
        'icon-exercise': "url('/images/icon-exercise.svg')",
        'icon-social': "url('/images/icon-social.svg')",
        'icon-self-care': "url('/images/icon-self-care.svg')",
      },
      colors: {
        "blue": "hsl(246, 80%, 60%)",
        "light-red-work": "hsl(15, 100%, 70%)",
        "soft-blue-play": "hsl(195, 74%, 62%)",
        "light-red-study": "hsl(348, 100%, 68%)",
        "lime-green-exercise": "hsl(145, 58%, 55%)",
        "violet-social": "hsl(264, 64%, 52%)",
        "soft-orange-self-care": "hsl(43, 84%, 65%)",
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(236, 45%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "dark-desaturated-blue": "hsl(236, 41%, 34%)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        custom: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
