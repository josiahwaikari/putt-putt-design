/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'evergreen-deep': '#143D34',
        'signal-blue': '#2962FF',
        
        // Secondary
        'sage-mist': '#E8F1EF',
        'mint-surface': '#F0F7F5',
        
        // Accent
        'birdie-gold': '#F9A825',
        'focus-ring': '#90CAF9',
        
        // Functional
        'scorecard-white': '#FFFFFF',
        'error-crimson': '#D32F2F',
        'success-emerald': '#2E7D32',
        'stroke-gray': '#ECEFF1',
        
        // Text
        'ink-black': '#101828',
        'slate-neutral': '#667085',
        'disabled': '#98A2B3',
        
        // Dark Mode
        'charcoal': '#121212',
        'dark-surface': '#1E1E1E',
        'light-mint': '#69F0AE',
        'dark-stroke': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Text', 'Roboto', 'sans-serif'],
        mono: ['Roboto Mono', 'SF Mono', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'active-hole': '0 8px 16px rgba(41, 98, 255, 0.08)',
      },
      spacing: {
        '4.5': '1.125rem', // 18px
        '13': '3.25rem',   // 52px (Button height)
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      }
    },
  },
  plugins: [],
}
