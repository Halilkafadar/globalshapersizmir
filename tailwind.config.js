/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gs-blue': '#0052CC',
        'gs-navy': '#172B4D',
        'gs-orange': '#FF5630',
        'gs-green': '#36B37E',
        'gs-purple': '#6554C0',
        // Mindcraft colors
        'mindcraft-blue': '#3B82F6',
        'mindcraft-purple': '#A855F7',
        'mindcraft-green': '#10B981',
        'mindcraft-dark': '#1E293B',
        'mindcraft-light': '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
