import { Box} from "@mui/material";
import Header from "../components/global/MessageHeader";
import IncomeChart from "../components/global/IncomeChart";



const Dashboard = () => {
  return (
    <Box m="20px">
      <Header title="Well Come Back, Student ....." subtitle="Hear's your Dashboard" />
      <Box
        m="40px 0 0 0"
        height="60vh"
       
      > 
      <IncomeChart />      
      </Box>
    </Box>
    
  );
};

export default Dashboard;
