const joinPath = (root, sublink) => `${root}${sublink}`;

const RootPath = '';
const RootAuthpath = '/auth';
const RootReportPath = '/report';
const RootUserPath = '/user';
const RootAdminPath = '/admin';

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

   user: {
      edituser: joinPath(RootUserPath, '/edituser'),
      history: joinPath(RootUserPath, '/history'),
      review: joinPath(RootUserPath, '/review'),
   },

   admin: {
      manage: joinPath(RootAdminPath, '/admin-manage'),
      reports: joinPath(RootAdminPath, '/admin-reports'),
      reviews: joinPath(RootAdminPath, '/admin-reviews'),
      tags: joinPath(RootAdminPath, '/admin-tags'),
   },

   createReport: joinPath(RootReportPath, '/createReport'),
};
