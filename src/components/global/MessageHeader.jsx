import React from 'react'

// eslint-disable-next-line react/prop-types
const Header = ({ title, subtitle,isDarkMode }) => {
  
  return (
    <React.Fragment>
        
        <h1 className={isDarkMode ? 'txt-dark-mode' : 'txt'}>{title}</h1>
      
        <h3 style={{fontSize:"18px", color:"dimgray"}}>{subtitle}</h3>
    </React.Fragment>  
  );
};

export default Header;
