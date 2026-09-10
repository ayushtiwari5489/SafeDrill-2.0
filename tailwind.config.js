/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0f12",
        surface: {
          DEFAULT: "#15181e",
          raised: "#1c2129",
          border: "#29313d",
          hover: "#252b36",
        },
        charcoal: {
          900: "#090b0e",
          800: "#12151b",
          700: "#1a1f27",
          600: "#272e3a",
          500: "#3d4757",
        },
        emergency: {
          red: "#ef4444",
          redMuted: "#b91c1c",
          redDark: "#7f1d1d",
          redGlow: "rgba(239, 68, 68, 0.2)",
          amber: "#f59e0b",
          amberMuted: "#b45309",
          amberGlow: "rgba(245, 158, 11, 0.2)",
          green: "#10b981",
          greenMuted: "#047857",
          greenGlow: "rgba(16, 185, 129, 0.2)",
          blue: "#3b82f6",
        },
        text: {
          primary: "#f3f4f6",
          secondary: "#9ca3af",
          muted: "#6b7280",
          dim: "#4b5563",
        },
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'glow-red': '0 0 25px rgba(239, 68, 68, 0.25)',
        'glow-amber': '0 0 25px rgba(245, 158, 11, 0.25)',
        'glow-green': '0 0 25px rgba(16, 185, 129, 0.25)',
        'tactile': '0 8px 24px -4px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'beacon': 'beacon 2s ease-in-out infinite',
        'radar': 'radar 3s linear infinite',
      },
      keyframes: {
        beacon: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.05)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
