/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Oswald', 'sans-serif'],
                display: ['Oswald', 'sans-serif'],
            },
            colors: {
                brand: {
                    orange: '#FF5A1F',
                    green: '#00D084',
                    dark: '#111827',
                    card: '#FFFFFF',
                }
            },
            animation: {
                'float-slow': 'float 6s ease-in-out infinite',
                'bounce-slow': 'bounce 3s infinite',
                'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scroll': 'scroll 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        }
    },
    plugins: [],
}
