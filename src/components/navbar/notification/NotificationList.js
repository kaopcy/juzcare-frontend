import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
// icons
import { Icon } from '@iconify/react';
// utils
import { getIconFromType } from '@/utils/notificationUtils';
import Moment from 'react-moment';
import 'moment/locale/th';
// components
import Link from '@/components/Link';

const NotificationList = forwardRef(({ notification }, ref) => (
   <Link href={`/reports/${notification.reportId}`}>
      <a ref={ref} className="flex items-center border-b px-4 py-2 last:border-none">
         <div className="mr-3 h-9 w-9 shrink-0 overflow-hidden rounded-full border-[1.5px] bg-[#FBFBFB] p-2">
            <Icon className="h-full w-full text-primary" icon={getIconFromType(notification.type)} />
         </div>
         <span className="ellipsis  font-normal text-black">{notification.detail}</span>
         <Moment fromNow locale="th" className="ml-auto whitespace-nowrap pl-1 text-xs font-light text-text-light">
            {new Date(notification.createdAt)}
         </Moment>
      </a>
   </Link>
));

NotificationList.propTypes = {
   notification: PropTypes.object,
};

export default NotificationList;
