import { Box } from "@mui/material";
import React from "react";

//const title123 = "TEXT"

const containerStyle={
  minHeight: '15vh',
  display: 'flex',
  flexDirection: 'column',
}

const TopFooterbar = (props) => {
  const boxStyle = {
    background: 'linear-gradient(to right, #84C1FF,#035B96 )', // Replace 'blue' with your desired color
    color: '#fff',
    padding: '5px',
    textAlign: 'center',
    marginTop: 'auto',
  };
  

  return (
    <Box style={containerStyle}>
    <Box style={boxStyle} >
      <h2 >{props.title}</h2>
    </Box>
    </Box>
  );
};

export default TopFooterbar;
