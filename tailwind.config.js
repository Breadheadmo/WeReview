/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Backgrounds
        'dark-slate': '#0d1117',
        'dark-gray': '#161b22',
        'light-gray': '#f6f8fa',
        
        // Text Colors
        'primary-text': '#24292f',
        'secondary-gray': '#57606a',
        'muted-gray': '#8b949e',
        
        // Brand & Accents
        'brand-green': '#2da44e',
        'brand-blue': '#0969da',
        'brand-purple': '#8250df',
        'brand-red': '#cf222e',
        'brand-orange': '#bf8700',
        
        // Borders & Lines
        'light-border': '#d0d7de',
        'dark-border': '#30363d',
      }
    },
  },
  plugins: [],
};