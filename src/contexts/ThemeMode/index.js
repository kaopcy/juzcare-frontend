import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';
const defaultValue = {
    theme: 'dark',
    toggleTheme: () => {},
    setTheme: () => {},
};

const ThemeModeContext = createContext(defaultValue);

export const ThemeModeProvider = ({ children }) => {
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        setTheme(localStorage.theme);
    }, []);

    useEffect(() => {
        if (!theme) return;
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.theme = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((e) => (e === 'dark' ? 'light' : 'dark'));
    };

    return <ThemeModeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeModeContext.Provider>;
};

ThemeModeProvider.proptypes = {
    children: PropTypes.node,
};

export const useTheme = () => useContext(ThemeModeContext);
