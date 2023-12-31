/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors";
import tailwindTypography from "@tailwindcss/typography";
import tailwindForms from "@tailwindcss/forms";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
// import daisyUI from "daisyui";
// import daisyTheme from "daisyui/src/theming/themes";
import flowbitePlugin from "flowbite/plugin";

const srcDir = "./";
export default <Partial<Config>>{
  darkMode: ["class"],
  content: [`${srcDir}/components/**/*.{vue,js,ts,jsx,tsx}`, `${srcDir}/layouts/**/*.vue`, `${srcDir}/pages/**/*.vue`, `${srcDir}/composables/**/*.{js,ts}`, `${srcDir}/plugins/**/*.{js,ts}`, `${srcDir}/utils/**/*.{js,ts}`, `${srcDir}/App.{js,ts,vue}`, `${srcDir}/app.{js,ts,vue}`, `${srcDir}/Error.{js,ts,vue}`, `${srcDir}/error.{js,ts,vue}`, `${srcDir}/app.config.{js,ts}`],
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",

        primary: "#51ECF3",
        "primary-content": "#175255",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Montserrat", ...defaultTheme.fontFamily.sans],
        loading: ["Flow Circular", "cursive"],
      },
      // fontSize: {
      //   base: [
      //     "16px",
      //     {
      //       fontWeight: "400",
      //       lineHeight: "24px",
      //     },
      //   ],
      //   xs: "12px",
      //   sm: "14px",
      //   md: "16px",
      //   lg: "18px",
      //   xl: "20px",
      //   "display-xs": [
      //     "24px",
      //     {
      //       lineHeight: "32px",
      //     },
      //   ],
      //   "display-sm": [
      //     "30px",
      //     {
      //       lineHeight: "38px",
      //     },
      //   ],
      //   "display-md": [
      //     "36px",
      //     {
      //       lineHeight: "44px",
      //       letterSpacing: "-0.72px",
      //     },
      //   ],
      //   "display-lg": [
      //     "48px",
      //     {
      //       lineHeight: "60px",
      //       letterSpacing: "-0.96px",
      //     },
      //   ],
      //   "display-xl": [
      //     "60px",
      //     {
      //       lineHeight: "72px",
      //       letterSpacing: "-1.2px",
      //     },
      //   ],
      //   "display-2xl": [
      //     "72px",
      //     {
      //       lineHeight: "90px",
      //       letterSpacing: "-1.44px",
      //     },
      //   ],
      // },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [tailwindForms, tailwindTypography, tailwindAspectRatio, flowbitePlugin],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    // themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    themes: ["aqua"],
    // themes: [
    //   {
    //     light: {
    //       ...daisyTheme["[data-theme=aqua]"],
    //       "secondary-content": "#fff",
    //       "accent-content": "#fff",
    //     },
    //   },
    // ],
    darkTheme: "aqua", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
