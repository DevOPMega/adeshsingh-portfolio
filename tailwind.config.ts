import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        textAnime: {
          '0%, 100%': {background:'linear-gradient(to right, #cffafe, #7dd3fc, #0d9488)', backgroundClip: 'text'},
          '50%': {background:'linear-gradient(to right, #7dd3fc, #0d9488, #cffafe)',backgroundClip: 'text'}
        },
        tilt: {
          "0% 50% 100%": {
            transform: "rotate(0deg)"
          },
          "25%": {
            transform: "rotate(-1deg)"
          },
          "75%": {
            transform: "rotate(1deg)"
          }
        }
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        textAnime: 'textAnime 1s infinite linear'
      }
    },
  },
  plugins: [],
}
export default config
