const config = require('@ng-bike/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: config.theme,
  daisyui: {
    themes: [
      {
        lofi: {
          ...require('daisyui/src/theming/themes')['[data-theme=lofi]'],
          // Secondary color
          secondary: '#fff',
          'secondary-focus': '#fff',
          'secondary-content': '#0D0D0D',
          // Accent color
          accent: config.theme.colors.primary['500'],
          'accent-focus': config.theme.colors.primary['700'],
          'accent-content': '#0D0D0D',
          // Border radius
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '0.5rem',
          '--rounded-box': '0rem',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
