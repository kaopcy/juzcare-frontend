import PropTypes from 'prop-types';

import { useQuery } from '@apollo/client';
import { createContext, useContext, useState } from 'react';

import { getHomePage } from '@/services/reports.service';
import { useEffect } from 'react';

const initialValue = {
   reports: null,
};

const ReportsContext = createContext(initialValue);

export const ReportsProvider = ({ children }) => {
   const [reports, setReports] = useState(null);

   useEffect(() => {
      (async () => {
         const data = await getHomePage();
         console.log(data);
         setReports(data);
      })();
   }, []);

   return <ReportsContext.Provider value={{ reports }}>{children}</ReportsContext.Provider>;
};

ReportsProvider.propTypes = {
   children: PropTypes.node,
};

export const useReports = () => useContext(ReportsContext);
