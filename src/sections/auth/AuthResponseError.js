import PropTypes from 'prop-types';

import Icon from '@/components/Icon';
import React from 'react';

AuthResponseError.propTypes = {
   error: PropTypes.string,
};

function AuthResponseError({ error }) {
   return (
      <div className="flex w-full min-w-0  items-center gap-x-2 rounded-lg border-2 border-red-500/40 bg-red-500/10 px-2 py-2 ">
         <Icon className="text-red-500 " icon="material-symbols:error-rounded" />
         <div className="ellipsis w-full whitespace-nowrap text-sm text-red-500">{error}</div>
      </div>
   );
}

export default AuthResponseError;
