/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#07090E',
          900: '#0B0F19',
          850: '#101626',
          800: '#161F36',
          700: '#233052',
          600: '#344773',
          500: '#4F689E',
        },
        cyanGlow: {
          DEFAULT: '#00F0FF',
          muted: '#06B6D4',
          dark: '#0891B2',
          glow: 'rgba(0, 240, 255, 0.25)',
        },
        emeraldSLA: {
          DEFAULT: '#10B981',
          glow: 'rgba(16, 185, 129, 0.25)',
          dark: '#059669',
        },
        amberAlert: {
          DEFAULT: '#F59E0B',
          glow: 'rgba(245, 158, 11, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(0, 240, 255, 0.08) 1px, transparent 1px)",
        'radial-vignette': "radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.12) 0%, rgba(11, 15, 25, 0) 70%)",
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
