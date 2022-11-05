import { createContext, useContext, useState } from 'react';

const initialValue = {
   reports: null,
};

const ReportsContext = createContext(initialValue);

export const ReportsProvider = ({ children }) => {
   const [reports] = useState([
      {
         id: '1234',
         detail: 'น้ำในห้องน้ำตึกโหลไม่ไหลเลยอะ เป็นแบบนี้มาหลายอาทิตย์แล้วอะ อารมณ์เสียเลย ปวดขี้ก็ปวด ทำไรไม่ได้',
         likes: 12,
         comments: 3,
         user: {
            avatar: {
               id: 555542,
               avatarUrl: 'https://source.unsplash.com/Mv9hjnEUHR4',
            },
         },
      },
      {
         id: '12341231',
         detail:
            'พี่โดกินกล้วยๆๆๆๆ พี่โดกินกล้วยๆๆๆๆ พี่โดกินกล้วยๆๆๆๆ พี่โดกินกล้วยๆๆๆๆ พี่โดกินกล้วยๆๆๆๆ พี่โดกินกล้วยๆๆๆๆ ',
         likes: 12,
         comments: 3,
         user: {
            avatar: {
               id: 555542,
               avatarUrl: 'https://source.unsplash.com/N04FIfHhv_k',
            },
         },
      },
      {
         id: '123455',
         detail: 'น้ำในห้องน้ำตึกโหลไม่ไหลเลยอะ เป็นแบบนี้มาหลายอาทิตย์แล้วอะ อารมณ์เสียเลย ปวดขี้ก็ปวด ทำไรไม่ได้',
         likes: 12,
         comments: 3,
         user: {
            avatar: {
               id: 555542,
               avatarUrl: 'https://source.unsplash.com/U3aF7hgUSrk',
            },
         },
      },
      {
         id: '1234522',
         detail: 'น้ำในห้องน้ำตึกโหลไม่ไหลเลยอะ เป็นแบบนี้มาหลายอาทิตย์แล้วอะ อารมณ์เสียเลย ปวดขี้ก็ปวด ทำไรไม่ได้',
         likes: 12,
         comments: 3,
         user: {
            avatar: {
               id: 555542,
               avatarUrl: 'https://source.unsplash.com/gySMaocSdqs/600x300',
            },
         },
      },
   ]);
   return <ReportsContext.Provider value={{ reports }}>{children}</ReportsContext.Provider>;
};

export const useReports = () => useContext(ReportsContext);
