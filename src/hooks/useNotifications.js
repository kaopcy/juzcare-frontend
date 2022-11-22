import { useMemo, useContext } from 'react';
import { NotificationContext } from '@/contexts/NotificationContext';

const useNotifications = () => {
   const { isLoading, error, notifications } = useContext(NotificationContext);
   const isUnRead = useMemo(
      () => (isLoading || !notifications ? false : notifications?.some((e) => !e.isWatched)),
      [notifications, isLoading],
   );

   return {
      notifications: notifications,
      isUnRead,
      isLoading,
      error,
   };
};

export default useNotifications;
