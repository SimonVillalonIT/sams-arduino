/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                backgroundColor: "#F1F6F9",
                "primary": "#394867",
                "secondary": "#212A3E",
                "terciary": "#9BA4B5",
                "white": "#F1F6F9",
                "black": "000"
            }
        },
    },
    plugins: [],
}