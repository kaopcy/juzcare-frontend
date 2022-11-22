import PropTypes from 'prop-types';
import { useContext, createContext } from 'react';

export const ReportContext = createContext({
   report: null,
});

export const ReportContextProvider = ({ children, initReport }) => (
   <ReportContext.Provider value={{ report: initReport }}>{children}</ReportContext.Provider>
);

ReportContextProvider.propTypes = {
   children: PropTypes.node,
   initReport: PropTypes.object,
};

