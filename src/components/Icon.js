import PropTypes from 'prop-types'

import { Icon as ClientSideIcon } from '@iconify/react';
import { Icon as ServerSideIcon } from '@iconify/react/dist/offline';

import offlineIcons from '@/configs/offlineIcon.config';

Icon.propTypes = {
   icon: PropTypes.string
}

function Icon({ icon, ...other }) {
   return offlineIcons.includes(icon) ? (
      <ServerSideIcon icon={icon} {...other} />
   ) : (
      <ClientSideIcon icon={icon} {...other} />
   );
}

export default Icon;
