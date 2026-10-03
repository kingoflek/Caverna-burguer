/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        caverna: {
          950: '#070709', // preto absoluto de fundo
          900: '#0d0d11', // preto profundo
          850: '#131318', // preto carvão
          800: '#1a1a22', // grafite escuro
          750: '#23232c', // grafite médio / card background
          700: '#2d2d38', // borda sutil
          600: '#414150', // cinza de divisão
          500: '#68687a', // texto secundário
          400: '#9b9ba8', // texto suave
          300: '#c5c5d0', // texto legível
          100: '#f0f0f4', // off-white
          50: '#fafafd',  // branco sutil
        },
        redaccent: {
          900: '#3d0a0d', // vinho profundo
          800: '#5e1014', // bordô
          700: '#85171d', // vermelho queimado escuro
          600: '#b31e26', // vermelho queimado padrão
          500: '#d92932', // destaque sutil / hover
          400: '#ea4a52', // glow sutil
        },
        amberaccent: {
          500: '#d97706', // iluminação quente sutil
          400: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'caverna-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'caverna-glow': '0 0 25px -5px rgba(179, 30, 38, 0.25)',
        'caverna-modal': '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'caverna-radial': 'radial-gradient(circle at 50% 0%, rgba(133, 23, 29, 0.15) 0%, rgba(13, 13, 17, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(35, 35, 44, 0.8) 0%, rgba(26, 26, 34, 0.95) 100%)',
      }
    },
  },
  plugins: [],
}
