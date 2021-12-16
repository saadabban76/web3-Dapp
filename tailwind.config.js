module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 6s linear infinite',
        spinOpposite: 'spin 6s linear infinite',
      },
      keyframes: {
        'from': { transform: 'rotate(360deg)' },
        'to': { transform: 'rotate(0deg)' },
      }
    },
  },
  plugins: [],
}
