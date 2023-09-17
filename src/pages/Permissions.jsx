import React from 'react';
import Header from '../components/global/MessageHeader';

// eslint-disable-next-line react/prop-types
const Permissions = ({isDarkMode}) => {
    return (
        <React.Fragment>
            <Header isDarkMode={isDarkMode} title="Role Permissions" subtitle="Managing the User Role Permissions" />
            <div>
                
            </div>
          
        </React.Fragment>
      );
};

export default Permissions;