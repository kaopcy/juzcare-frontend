import { produce } from 'immer';
import PropTypes from 'prop-types';
import { createContext, useReducer } from 'react';

export const ReportContext = createContext({
   state: null,
   dispatch: () => {},
});

export const ACTION = {
   UPDATE_PROGRESS: 'UPDATE_PROGRESS',
   LOADING: 'LOADING',
   UPDATE_COMMENT: "UPDATE_COMMENT"
};

export const ReportContextProvider = ({ children, initReport }) => {
   const initValue = {
      report: initReport,
      isLoading: false,
   };

   const reducer = (state, action) => {
      switch (action.type) {
         case ACTION.LOADING: {
            return produce(state, (draft) => {
               draft.isLoading = false;
            });
         }
         case ACTION.UPDATE_PROGRESS: {
            return produce(state, (draft) => {
               draft.report.progresses = action.payload.progresses;
            });
         }

         case ACTION.UPDATE_COMMENT: {
            return produce(state, (draft) => {
               draft.report.comments = action.payload.comments;
            });
         }
      }
   };

   const [state, dispatch] = useReducer(reducer, initValue);
   return <ReportContext.Provider value={{ state, dispatch }}>{children}</ReportContext.Provider>;
};

ReportContextProvider.propTypes = {
   children: PropTypes.node,
   initReport: PropTypes.object,
};
