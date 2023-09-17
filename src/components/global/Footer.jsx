/* eslint-disable react/prop-types */
import React from "react";

//const title123 = "TEXT"

const containerStyle={
  minHeight: '100%',//'15vh',
  display: 'flex',
  flexDirection: 'column',
}

const TopFooterbar = (props) => {
  const boxStyle = {
    background: 'linear-gradient(to right, #84C1FF,#035B96 )', // Replace 'blue' with your desired color
    color: '#fff',
    padding: '15px',
    textAlign: 'center',
    marginTop: 'auto',
  };
  

  return (
    <React.Fragment>
        <div style={containerStyle}>
        <div style={boxStyle} >
        <h2 >{props.title}</h2>
        </div>
        </div>
    </React.Fragment>
  );
};

export default TopFooterbar;