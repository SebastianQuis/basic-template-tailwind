
/** @type {import('tailwindcss').Config} */ 

export default {
  content: ["./src/**/*.{html,jsx,js,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lochmara': {
          DEFAULT: '#0084CA',
          50: '#83D4FF',
          100: '#6ECDFF',
          200: '#45BFFF',
          300: '#1DB1FF',
          400: '#009FF3',
          500: '#0084CA',
          600: '#005F92',
          700: '#003B5A',
          800: '#001622',
          900: '#000000',
          950: '#000000'
        },
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",  // Asegúrate de incluir todos los archivos necesarios
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }