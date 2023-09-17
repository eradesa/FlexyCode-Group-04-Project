import React from 'react';
import Header from '../components/global/MessageHeader';
import DashbordCard from '../components/DashbordCard';
import IncomeChart from '../components/IncomeChart';
import Notification from '../components/Notification';



// eslint-disable-next-line react/prop-types
const Dashboard = ({isDarkMode}) => {
  const hrStyle = {
    
    height: '85vh', // Set the desired height
    fontSize:"16px",
    marginTop:"5px",
    marginLeft:"30px"
}

const flexContainerStyle = {
  display: 'flex',
  //justifyContent: 'space-between', // This adds space between items
  //alignItems: 'center', // This centers items vertically
};

  return (
    <React.Fragment>
      <Header isDarkMode={isDarkMode} title="Well Come Back, John Doe Anderson" subtitle="Hear's your Dashboard" />
      <DashbordCard/>
      <div style={hrStyle}>
        
        <div style={flexContainerStyle}>
          <div style={{marginTop:"40px",marginRight:"20px"}}>
           
            <IncomeChart/>
          </div>
          <div>
            <Notification />
          </div>
        </div>
      </div>
       
      
    
  </React.Fragment>
  );
};

export default Dashboard;
