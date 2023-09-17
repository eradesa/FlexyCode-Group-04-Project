import React from 'react';
import Header from '../components/global/MessageHeader';

// eslint-disable-next-line react/prop-types
const ProductList = ({isDarkMode}) => {
    return (
        <React.Fragment>
            <Header isDarkMode={isDarkMode} title="Users" subtitle="Managing the Users Details" />
            <div>
                
            </div>
          
        </React.Fragment>
      );
};

export default ProductList;