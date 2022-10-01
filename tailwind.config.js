/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/{pages,layouts,guards,components,sections}/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            spacing: {
                navbar: '70px',
            },
            textColor: {},
            boxShadow: {
                card: '0px 7px 29px 0px rgba(100, 100, 111, 0.2) ',
            },
            colors: {
                text: {
                    darkest: '#000',
                    darker: '#100000',
                    dark: '#202020',
                    DEFAULT: '#404040',
                    light: '#606060',
                    lighter: '#707070',
                },
                paper: {
                    DEFAULT: '#fff',
                    neutral: '#F8EDE3',
                },
                primary: {
                    darkest: '#000',
                    darker: '#100000',
                    dark: '#202020',
                    DEFAULT: '#404040',
                    light: '#606060',
                    lighter: '#707070',
                },
                secondary: {
                    darkest: '#000',
                    darker: '#100000',
                    dark: '#202020',
                    DEFAULT: '#404040',
                    light: '#606060',
                    lighter: '#707070',
                },
            },
        },
    },
    plugins: [],
};
