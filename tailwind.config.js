/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/{pages,layouts,guards,components,sections}/**/*.{js,ts,jsx,tsx}'],
    theme: {
        zIndex: {
            navbar: 100,
            sidebar: 102,
            'sidebar-overlay': 101,
        },
        fontFamily: {
            main: ['IBM Plex Sans Thai', 'sans-serif'],
        },
        screens: {
            xs: '360px',
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            spacing: {
                navbar: '70px',
            },
            textColor: {
                DEFAULT: '#383838',
                light: '#3838386b',
                lighter: '#0000001a',
            },
            boxShadow: {
                card: '0px 7px 29px 0px rgba(100, 100, 111, 0.2) ',
            },
            fontWeight: {
                black: 700,
            },
            colors: {
                error: '#EF4444',
                text: {
                    darkest: '#000',
                    darker: '#100000',
                    dark: '#202020',
                    DEFAULT: '#383838',
                    light: '#D1D0D0',
                    lighter: '#D1D0D0',
                    lightest: '#D1D0D010',
                },
                paper: {
                    DEFAULT: '#fff',
                    neutral: '#fff',
                },
                primary: {
                    darkest: '#000',
                    darker: '#100000',
                    dark: '#F24E1E',
                    DEFAULT: '#F7931E',
                    light: '#FFBB6B',
                    lighter: '#FFDCB2',
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
