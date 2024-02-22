import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    /* items defined here erase completely the default tailwind config and replace it */
    /* ... */

    extend: {
      /* items in extend are added or updated from base tailwind config */
      colors: {
        "twitter-blue": "#1DA1F2",
      },
      screens: {
        tablet: "690px" /* add a breakpoint type */,
        /* can also change "md" for example */
      },
    },
  },
  plugins: [],
};
export default config;
