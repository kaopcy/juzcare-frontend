import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useNotifications = () => {
   const notifications = useSelector((state) => state.notifications);
   const isUnRead = useMemo(
      () => (!notifications ? false : notifications.notifications.some((e) => !e.isWatched)),
      [notifications],
   );
   return {
      notifications: notifications.notifications,
      isUnRead,
   };
};

export default useNotifications;
