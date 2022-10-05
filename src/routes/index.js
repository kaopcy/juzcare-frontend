const joinPath = (root, sublink) => `${root}${sublink}`;

const RootPath = '';
const RootAuthpath = '/auth';

export const PATH = {
    home: joinPath(RootPath, '/'),
    auth: {
        login: joinPath(RootAuthpath, '/login'),
        register: joinPath(RootAuthpath, '/register'),
    },
    rickandmorty: {
        normal: joinPath(RootPath, '/rickandmorty'),
        ssr: joinPath(RootPath, '/rickandmorty-serverside'),
    },
    aboutus: joinPath(RootPath , '/about-us')
};
