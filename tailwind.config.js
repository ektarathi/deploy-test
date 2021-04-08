// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '768px', //768px
      md: '1024px', //1024px
      lg: '1400px', //1400px
      xl: '1600px', //1600px
      betterhover: { raw: '(hover: hover)' },
    },
    extend: {
      colors: {
        red: {
          '600': '#DD003B',
          '700': '#E6224F'
        },
        orange: {
          '700': '#E95428'
        }
      },
      backgroundImage: theme => ({
        'technology-image': "url('/images/Technology.jpg')",
        'landing-image': "url('/images/landing_image.jpg')",
        'skyline-image': "url('/images/Skyline.jpg')",
        'team-image': "url('/images/Team.jpg')",
        'tech-image': "url('/images/Tech.jpg')",
      })
    },
    rotate: {
      ...defaultTheme.rotate,
      '-30': '-30deg',
    },
    container: {
      padding: '1rem',
    },
    customForms: theme => ({
      sm: {
        'input, textarea, multiselect, select': {
          fontSize: theme('fontSize.sm'),
          padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
        },
        select: {
          paddingRight: `${theme('spacing.4')}`,
        },
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
