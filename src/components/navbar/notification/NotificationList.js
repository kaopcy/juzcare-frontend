import PropTypes from 'prop-types';
import { forwardRef , useState } from 'react';
// icons
import { Icon } from '@iconify/react';
// utils
import { getIconFromType } from '@/utils/notificationUtils';
import Moment from 'react-moment'
import 'moment/locale/th'
// components
import Link from '@/components/Link';

const NotificationList = forwardRef(({ notification }, ref) => (
      <Link href={notification.href}>
         <a ref={ref} className="flex items-center px-4 py-2 border-b last:border-none">
            <div className="mr-3 h-9 w-9 overflow-hidden rounded-full bg-[#FBFBFB] p-2 border-[1.5px]">
               <Icon className="h-full w-full text-primary" icon={getIconFromType(notification.type)} />
            </div>
            <p className="font-normal text-black ellipsis whitespace-nowrap">{notification.detail}</p>
            <Moment fromNow locale='th' className='ml-auto text-xs text-text-light font-light whitespace-nowrap pl-1' >
               {new Date(notification.createdAt)}
            </Moment>
         </a>
      </Link>
   ));

NotificationList.propTypes = {
   notification: PropTypes.object,
};

export default NotificationList;
