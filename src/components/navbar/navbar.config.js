// path
import { PATH } from '@/routes/index';

export const navItems = [
    {
        id: 1,
        name: 'Home',
        href: PATH.home,
        icon: 'ic:twotone-home',
    },
    // {
    //     id: 1,
    //     name: 'Rick',
    //     href: PATH.rickandmorty.normal,
    //     icon: 'ic:twotone-computer',
    // },
    {
        id: 1,
        name: 'Rick-SSR',
        href: PATH.rickandmorty.ssr,
        icon: 'ic:twotone-cell-wifi',
    },
    {
        id: 1,
        name: 'About us',
        href: PATH.aboutus,
        icon: 'ic:twotone-people-alt',
    },
];