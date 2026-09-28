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
        space: {
          base: '#05060a',
          surface1: '#0b0d14',
          surface2: '#11141d',
          surface3: '#181d2a',
          border: 'rgba(255, 255, 255, 0.07)',
          'border-hover': 'rgba(255, 255, 255, 0.16)',
          text: {
            primary: '#f4f6fb',
            secondary: '#9aa3b5',
            muted: '#636c7e',
          },
        },
        sem: {
          1: {
            DEFAULT: '#06b6d4', // Cyan
            glow: 'rgba(6, 182, 212, 0.35)',
            light: '#67e8f9',
            badge: 'rgba(6, 182, 212, 0.12)',
            border: 'rgba(6, 182, 212, 0.3)',
          },
          2: {
            DEFAULT: '#0ea5e9', // Sky
            glow: 'rgba(14, 165, 233, 0.35)',
            light: '#7dd3fc',
            badge: 'rgba(14, 165, 233, 0.12)',
            border: 'rgba(14, 165, 233, 0.3)',
          },
          3: {
            DEFAULT: '#6366f1', // Indigo
            glow: 'rgba(99, 102, 241, 0.35)',
            light: '#a5b4fc',
            badge: 'rgba(99, 102, 241, 0.12)',
            border: 'rgba(99, 102, 241, 0.3)',
          },
          4: {
            DEFAULT: '#8b5cf6', // Violet
            glow: 'rgba(139, 92, 246, 0.35)',
            light: '#c4b5fd',
            badge: 'rgba(139, 92, 246, 0.12)',
            border: 'rgba(139, 92, 246, 0.3)',
          },
          5: {
            DEFAULT: '#d946ef', // Fuchsia / Magenta
            glow: 'rgba(217, 70, 239, 0.35)',
            light: '#f0abfc',
            badge: 'rgba(217, 70, 239, 0.12)',
            border: 'rgba(217, 70, 239, 0.3)',
          },
          6: {
            DEFAULT: '#f43f5e', // Rose / Coral
            glow: 'rgba(244, 63, 94, 0.35)',
            light: '#fda4af',
            badge: 'rgba(244, 63, 94, 0.12)',
            border: 'rgba(244, 63, 94, 0.3)',
          },
          7: {
            DEFAULT: '#f59e0b', // Amber
            glow: 'rgba(245, 158, 11, 0.35)',
            light: '#fcd34d',
            badge: 'rgba(245, 158, 11, 0.12)',
            border: 'rgba(245, 158, 11, 0.3)',
          },
          8: {
            DEFAULT: '#10b981', // Emerald / Mint
            glow: 'rgba(16, 185, 129, 0.35)',
            light: '#6ee7b7',
            badge: 'rgba(16, 185, 129, 0.12)',
            border: 'rgba(16, 185, 129, 0.3)',
          },
        },
        filetype: {
          pdf: {
            DEFAULT: '#f43f5e',
            bg: 'rgba(244, 63, 94, 0.12)',
            border: 'rgba(244, 63, 94, 0.25)',
          },
          ppt: {
            DEFAULT: '#f59e0b',
            bg: 'rgba(245, 158, 11, 0.12)',
            border: 'rgba(245, 158, 11, 0.25)',
          },
          notes: {
            DEFAULT: '#10b981',
            bg: 'rgba(16, 185, 129, 0.12)',
            border: 'rgba(16, 185, 129, 0.25)',
          },
          pyq: {
            DEFAULT: '#8b5cf6',
            bg: 'rgba(139, 92, 246, 0.12)',
            border: 'rgba(139, 92, 246, 0.25)',
          }
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'card-sm': '12px',
        'card': '16px',
        'card-lg': '24px',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #8b5cf6 100%)',
        'accent-gradient-glow': 'linear-gradient(135deg, rgba(34,211,238,0.2) 0%, rgba(59,130,246,0.2) 50%, rgba(139,92,246,0.2) 100%)',
        'radial-universe': 'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.12) 0%, rgba(5, 6, 10, 0) 70%)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
