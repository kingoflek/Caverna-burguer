/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secret: {
          bg: '#08090B',         // Fundo principal
          surface: '#111317',    // Fundo secundário
          card: '#15171B',       // Superfície dos cards
          cardHover: '#1B1E24',  // Card hover
          border: '#303239',     // Bordas discretas
          borderLight: '#444852',// Bordas de destaque sutil
          text: '#FFFFFF',       // Texto principal
          muted: '#B8BBC2',      // Texto secundário
          subtle: '#7E838F',     // Texto terciário / labels
          dark: '#050607',       // Preto ultra profundo
        },
        redaccent: {
          950: '#2A0306',
          900: '#4D050B',
          800: '#7B0711',
          700: '#A60917',
          600: '#D60A1D',
          500: '#F20D25',        // Vermelho vivo de destaque
          400: '#F53D50',        // Hover / glow
          300: '#FA7A88',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'secret-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'secret-glow': '0 0 25px -4px rgba(242, 13, 37, 0.35)',
        'secret-glow-strong': '0 0 35px 0px rgba(242, 13, 37, 0.5)',
        'secret-modal': '0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'secret-radial': 'radial-gradient(circle at 50% 0%, rgba(242, 13, 37, 0.12) 0%, rgba(17, 19, 23, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(21, 23, 27, 0.95) 0%, rgba(14, 16, 20, 0.98) 100%)',
        'hero-gradient': 'linear-gradient(90deg, rgba(8, 9, 11, 0.98) 0%, rgba(8, 9, 11, 0.85) 45%, rgba(8, 9, 11, 0.2) 100%)',
      }
    },
  },
  plugins: [],
}
