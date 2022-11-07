const joinPath = (root, sublink) => `${root}${sublink}`;

const RootPath = '';
const RootAuthpath = '/auth';

export const PATH = {
   home: joinPath(RootPath, '/'),
   thread: joinPath(RootPath, '/thread'),
   report: joinPath(RootPath, '/report'),
   auth: {
      login: joinPath(RootAuthpath, '/login'),
      register: joinPath(RootAuthpath, '/register'),
   },
   rickandmorty: {
      normal: joinPath(RootPath, '/rickandmorty'),
      ssr: joinPath(RootPath, '/rickandmorty-serverside'),
   },
   aboutus: joinPath(RootPath, '/about-us'),
};
