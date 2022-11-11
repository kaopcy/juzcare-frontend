import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';

const ReportContext = createContext({
   report: null,
});

export const ReportContextProvider = ({ children, initVal }) => (
   <ReportContext.Provider value={initVal}>{children}</ReportContext.Provider>
);

ReportContextProvider.propTypes = {
   children: PropTypes.node,
   initVal: PropTypes.object,
};

export const useReportContext = () => useContext(ReportContext);
