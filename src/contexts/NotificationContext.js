import { GetNotificationGQL } from '@/graphql/auth.gql';
import { useQuery } from '@apollo/client';
import { createContext, useEffect } from 'react';

export const NotificationContext = createContext({ notifications: null, isLoading: false, error: null });

export const NotificationContextProvider = ({ children }) => {
   const {
      data,
      loading: isLoading,
      error,
      startPolling,
      stopPolling,
   } = useQuery(GetNotificationGQL, {
      pollInterval: 5000,
      fetchPolicy: 'no-cache',
   });
   useEffect(() => {
      startPolling(5000);
      return () => {
         stopPolling();
      };
   }, [startPolling, stopPolling]);

   return (
      <NotificationContext.Provider value={{ notifications: data?.getNotifications, error, isLoading }}>
         {children}
      </NotificationContext.Provider>
   );
};
