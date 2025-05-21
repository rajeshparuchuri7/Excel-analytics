/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c7deff',
          300: '#a2c5fe',
          400: '#76a4fc',
          500: '#4f81f7',
          600: '#3b65ef',
          700: '#2f4edb',
          800: '#2942b2',
          900: '#243b8c',
          950: '#1E293B',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f4fe',
          200: '#bae8fd',
          300: '#7dd4fc',
          400: '#37bbf8',
          500: '#0ca4e9',
          600: '#0283c6',
          700: '#0369a0',
          800: '#075784',
          900: '#0a496e',
          950: '#072e46',
        },
        accent: {
          50: '#fff1f0',
          100: '#ffe0dd',
          200: '#ffc6c0',
          300: '#ff9f94',
          400: '#ff6a5a',
          500: '#ff402b',
          600: '#ee2009',
          700: '#c81807',
          800: '#a0170d',
          900: '#83190f',
          950: '#470a06',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

