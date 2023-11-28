/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors";
import tailwindTypography from "@tailwindcss/typography";
import tailwindForms from "@tailwindcss/forms";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";

const srcDir = "./";
export default <Partial<Config>>{
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
      fontSize: {
        base: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "24px",
          },
        ],
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "display-xs": [
          "24px",
          {
            lineHeight: "32px",
          },
        ],
        "display-sm": [
          "30px",
          {
            lineHeight: "38px",
          },
        ],
        "display-md": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.72px",
          },
        ],
        "display-lg": [
          "48px",
          {
            lineHeight: "60px",
            letterSpacing: "-0.96px",
          },
        ],
        "display-xl": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-1.2px",
          },
        ],
        "display-2xl": [
          "72px",
          {
            lineHeight: "90px",
            letterSpacing: "-1.44px",
          },
        ],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [tailwindForms, tailwindTypography, tailwindAspectRatio],
};
