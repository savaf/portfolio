import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      container: {
        padding: {
          'DEFAULT': '1rem',
          'sm': '2rem',
          'lg': '5rem',
          'xl': '6rem',
          '2xl': '8rem',
        },
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: ['1rem', '30px'],
        body2: ['15px', '30px'],
      },
      boxShadow: {
        dropShadow: '0px 2px 100px var(--tw-shadow-color)',
        innerShadow: 'inset 0px 2px 100px var(--tw-shadow-color)',
      },
      dropShadow: {
        DEFAULT: '0px 2px 100px var(--tw-shadow-color)',
      },

      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary.grayishDarkBlue'),
            fontSize: theme('fontSize.base'),
            fontWeight: theme('fontWeight.medium'),
            lineHeight: '30px',
            h1: {
              color: theme('colors.primary.grayishDarkBlue'),
              fontSize: '50px',
              fontWeight: theme('fontWeight.bold'),
              lineHeight: '50px',
            },
            h2: {
              color: theme('colors.primary.grayishDarkBlue'),
              fontSize: '40px',
              fontWeight: theme('fontWeight.bold'),
              lineHeight: '42px',
            },
            h3: {
              color: theme('colors.primary.grayishDarkBlue'),
              fontSize: '32px',
              fontWeight: theme('fontWeight.medium'),
              lineHeight: '36px',
            },
          },
        },
      }),
    },
  },
  plugins: [],
}
