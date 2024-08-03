import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
      mono: ['Noe Display', 'Georgia', 'Times', 'serif'],
    },
    extend: {
      colors: {
        "second": 'rgb(173 143 255)',
        'offset-second': '#e068fd',
        "button": '#29293e',
        'offset-button': '#374151',
        "bg": '#16161a',
        'second-light': 'rgb(83 29 241)',
        'offset-second-light': '#6d00e6',
        'button-light': '#eceeef',
        'offset-button-light': '#f2f3f5',
        'bg-light': 'rgb(255, 255, 255)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none' /* Safari and Chrome */,
        },
      });
    }),
  ],
};

export default config;
