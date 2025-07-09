/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'serif': ['Crimson Text', 'serif'],
        'african': ['Ubuntu', 'system-ui', 'sans-serif'], // African-inspired font
      },
      colors: {
        // Traditional African Color Palette
        primary: {
          50: '#FEF7F0',
          100: '#FEEEE0',
          200: '#FDD5B3',
          300: '#FCBC85',
          400: '#FA8A30',
          500: '#D2691E', // Saddle Brown - Earth tones
          600: '#B8541F',
          700: '#9A451A',
          800: '#7C3714',
          900: '#5E2910',
        },
        secondary: {
          50: '#F0F8F0',
          100: '#E0F2E0',
          200: '#C2E5C2',
          300: '#A3D8A3',
          400: '#85CB85',
          500: '#228B22', // Forest Green - Nature connection
          600: '#1B5E20',
          700: '#1A5E1F',
          800: '#155815',
          900: '#104610',
        },
        accent: {
          50: '#FFF8DC',
          100: '#FFEBCD',
          200: '#DEB887',
          300: '#D2B48C',
          400: '#BC9A6A',
          500: '#CD853F', // Peru - Traditional clay/pottery
          600: '#A0522D',
          700: '#8B4513',
          800: '#654321',
          900: '#3E2723',
        },
        tribal: {
          gold: '#FFD700', // African gold
          copper: '#B87333', // Traditional copper
          earth: '#8B4513', // Rich earth
          sunset: '#FF6347', // African sunset
          kente: '#DC143C', // Kente red
          baobab: '#DEB887', // Baobab tree
          savanna: '#F4A460', // Savanna grass
          ubuntu: '#4B0082', // Ubuntu purple
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'scale-up': 'scale-up 0.6s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'kente-wave': 'kente-wave 3s ease-in-out infinite',
        'drum-beat': 'drum-beat 1.5s ease-in-out infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'scale-up': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(210, 105, 30, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(210, 105, 30, 0.6)'
          },
        },
        'rotate-slow': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          },
        },
        'kente-wave': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)'
          },
          '50%': {
            transform: 'translateY(-10px) rotate(2deg)'
          },
        },
        'drum-beat': {
          '0%, 100%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.05)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'african-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23D2691E\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M30 30m-15 0a15 15 0 1 1 30 0a15 15 0 1 1 -30 0M15 15l30 30M45 15l-30 30\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'kente-pattern': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23FFD700\" fill-opacity=\"0.1\"%3E%3Crect x=\"0\" y=\"0\" width=\"20\" height=\"20\"/%3E%3Crect x=\"20\" y=\"20\" width=\"20\" height=\"20\"/%3E%3C/g%3E%3Cg fill=\"%23DC143C\" fill-opacity=\"0.1\"%3E%3Crect x=\"20\" y=\"0\" width=\"20\" height=\"20\"/%3E%3Crect x=\"0\" y=\"20\" width=\"20\" height=\"20\"/%3E%3C/g%3E%3C/svg%3E')",
        'adinkra-pattern': "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23CD853F\" fill-opacity=\"0.08\"%3E%3Ccircle cx=\"40\" cy=\"40\" r=\"20\"/%3E%3Cpath d=\"M40 20v40M20 40h40M30 30l20 20M50 30l-20 20\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'african': '1.5rem',
        'tribal': '2rem',
      },
    },
  },
  plugins: [],
};