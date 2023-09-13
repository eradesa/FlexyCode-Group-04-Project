import { Box } from "@mui/material";

//const title123 = "TEXT"

const TopFooterbar = (props) => {
  const boxStyle = {
    backgroundColor: 'blue', // Replace 'blue' with your desired color
    
    
  };
  const divStyle = {
    //backgroundColor: 'blue', // Replace 'blue' with your desired color
    padding:'10px',
    
  };

  return (
    <Box display="flex" style={boxStyle} >
      
    <div >
      <h1 style={divStyle} >{props.title}</h1>
    </div>
      
    </Box>
  );
};

export default TopFooterbar;
