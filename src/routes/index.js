const joinPath = (root, sublink) => `${root}${sublink}`;

const RootPath = '';
const RootAuthpath = '/auth';
const RootReportPath = '/report';
const RootUserPath = '/user';

export const PATH = {
   home: joinPath(RootPath, '/'),
   reports: joinPath(RootPath, '/reports'),
   auth: {
      login: joinPath(RootAuthpath, '/login'),
      register: joinPath(RootAuthpath, '/register'),
   },
   rickandmorty: {
      normal: joinPath(RootPath, '/rickandmorty'),
      ssr: joinPath(RootPath, '/rickandmorty-serverside'),
   },
   aboutus: joinPath(RootPath, '/about-us'),
   
   user:{
      edituser: joinPath(RootUserPath, '/edituser'),
      history: joinPath(RootUserPath, '/history'),

   },
   
        
   createReport: joinPath(RootReportPath, '/createReport'),
};
