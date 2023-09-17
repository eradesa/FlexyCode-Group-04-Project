import React from 'react';
import Header from '../components/global/MessageHeader';

// eslint-disable-next-line react/prop-types
const Product = ({isDarkMode}) => {
    return (
        <React.Fragment>
            <Header isDarkMode={isDarkMode} title="Announcements" subtitle="Announcements Page" />
            <div>
                
            </div>
          
        </React.Fragment>
      );
};

export default Product;