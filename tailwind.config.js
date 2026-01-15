// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Deep blue-black
        surface: '#1e293b',     // Slightly lighter for cards
        primary: '#3b82f6',     // Bright Blue
        accent: '#8b5cf6',      // Violet/Purple for gradients
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0%, #a853ba 50%, #e92a67 100%)',
      },
    },
  },
  plugins: [],
}
