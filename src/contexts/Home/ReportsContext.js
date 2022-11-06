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
         medias: [
            {
               imageUrl: 'https://source.unsplash.com/0v_1TPz1uXw',
               id: 'image-1234-1',
            },
            {
               imageUrl: 'https://source.unsplash.com/OlXUUQedQyM',
               id: 'image-1234-2',
            },
            {
               imageUrl: 'https://source.unsplash.com/9002s2VnOAY',
               id: 'image-1234-3',
            },
         ],
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
         medias: [
            {
               imageUrl: 'https://source.unsplash.com/0v_1TPz1uXw',
               id: 'image-12341231-detail-1',
            },
            {
               imageUrl: 'https://source.unsplash.com/OlXUUQedQyM',
               id: 'image-12341231-detail-2',
            },
            {
               imageUrl: 'https://source.unsplash.com/9002s2VnOAY',
               id: 'image-12341231-detail-3',
            },
         ],
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
         medias: [
            {
               imageUrl: 'https://source.unsplash.com/0v_1TPz1uXw',
               id: 'image-123455-1',
            },
            {
               imageUrl: 'https://source.unsplash.com/OlXUUQedQyM',
               id: 'image-123455-2',
            },
            {
               imageUrl: 'https://source.unsplash.com/9002s2VnOAY',
               id: 'image-123455-3',
            },
         ],
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
         medias: [
            {
               imageUrl: 'https://source.unsplash.com/0v_1TPz1uXw',
               id: 'image-1234522-1',
            },
            {
               imageUrl: 'https://source.unsplash.com/OlXUUQedQyM',
               id: 'image-1234522-2',
            },
            {
               imageUrl: 'https://source.unsplash.com/9002s2VnOAY',
               id: 'image-1234522-3',
            },
         ],
      },
   ]);
   return <ReportsContext.Provider value={{ reports }}>{children}</ReportsContext.Provider>;
};

export const useReports = () => useContext(ReportsContext);
