import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
        mono: ['"Share Tech Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        green: { DEFAULT: '#00d4aa', dim: '#007a63', bright: '#00ffcc' },
        amber: { DEFAULT: '#ffb800', dim: '#996e00' },
        retro: {
          bg: '#0a0e17',
          surface: '#0f1923',
          card: '#131f2e',
          border: '#1e3347',
          text: '#d4e8f0',
          muted: '#5a7a8a',
          red: '#ff4757',
          blue: '#58a6ff',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,212,170,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(0,212,170,0.6)' },
        },
      },
      boxShadow: {
        'green-glow': '0 0 20px rgba(0,212,170,0.25)',
        'amber-glow': '0 0 20px rgba(255,184,0,0.25)',
        'pixel': '0 0 0 2px #1e3347, 0 0 0 4px #0a0e17, 0 0 0 5px #1e3347',
        'pixel-green': '0 0 0 2px #007a63, 0 0 0 4px #0a0e17, 0 0 0 5px #007a63',
      },
    },
  },
  plugins: [],
} satisfies Config
