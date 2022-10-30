import { notificationIcon } from '@/configs/notification.config';

const getIconFromType = (type) => (type && notificationIcon[type]) ?? 'ri:file-unknow-fill';

export { getIconFromType };
