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
      },
   ]);
   return <ReportsContext.Provider value={{ reports }}>{children}</ReportsContext.Provider>;
};

export const useReports = () => useContext(ReportsContext);
