/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',   // теплий червоний/корал
        secondary: '#FFD93D', // теплий жовтий
        accent: '#4ECDC4',    // мʼятний/акцентний
        background: '#FFF2E0', // ніжний кремовий фон
        text: '#333333',      // основний текст
        textDark: '#6D4C41',
      },
    },
  },
  plugins: [],
}

