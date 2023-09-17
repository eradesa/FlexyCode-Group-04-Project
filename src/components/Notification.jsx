import { Box, Typography} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { mockNotifications } from "../data/mockData";
import { blue } from "@mui/material/colors";


const commonStyles = {
  bgcolor: 'background.paper',
  
  m: 1,
  border: 3,
  width: '19rem',
  height: '25rem',
};

const Dashboard = () => {
  return (
    <Box m="20px">
      
      <Box
        m="40px 0 0 0"
        height="60vh"
       
      >
        <Box overflow="auto" sx={{ ...commonStyles, borderRadius: '16px', borderColor: '#84C1FF' }}>
          <Typography fontSize="17px" color="grey" fontWeight="600" mt="10px" ml="20px" mb="10px">
            Notifications
          </Typography>

          {mockNotifications.map((transaction, i)=>(
                // eslint-disable-next-line react/jsx-key
                <Box
                  
                  display="flex"
                  alignItems="center"
                  borderBottom={`4px solid ${blue}`}
                  p="9px"
                >
                <Box cursor="pointer" display="flex" justifyContent="center" alignItems="center">
                  <div style={{cursor:"pointer"}}>
                  <img
                    alt="profile-user"
                    width="50px"
                    height="50px"
                    src={transaction.imageUrl}
                    style={{ borderRadius: "50%" }}                    
                  /></div>
                </Box>

                  <Box ml="20px">
                    <Typography
                      color="black"
                      variant="h5"
                      fontWeight="600"
                      fontSize="15px"
                      cursor="pointer"
                    >
                      <div style={{cursor:"pointer"}}>
                      {transaction.txId}</div>
                    </Typography>
                    <Typography
                      color="grey"
                      fontSize="14px"
                    >
                      {transaction.timestamp}
                    </Typography>
                  </Box>
                  
                  
                </Box>
              ))}


        </Box>       
      </Box>
    </Box>
  );
};

export default Dashboard;
