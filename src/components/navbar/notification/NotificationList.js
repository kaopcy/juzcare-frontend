import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// icons
import { Icon } from '@iconify/react';
// utils
import { getIconFromType } from '@/utils/notificationUtils';
// components
import Link from '@/components/Link';

const NotificationList = forwardRef(({ notification }, ref) => (
   <Link href={notification.href}>
      <a ref={ref} className="flex items-center px-4 py-2">
         <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-[#FBFBFB] p-2 border-[1.5px]">
            <Icon className="h-full w-full text-primary" icon={getIconFromType(notification.type)} />
         </div>
         <h4 className="font-medium text-black">{notification.label}</h4>
      </a>
   </Link>
));

NotificationList.propTypes = {
   notification: PropTypes.object,
};

export default NotificationList;
