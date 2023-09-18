// eslint-disable-next-line no-unused-vars
import React from 'react';
import Chart from 'react-apexcharts';

export default function MyChart() {

  const series = [{
    name: "Income",
    data: [25, 66, 41, 89, 66, 41, 89] 
  }];

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    title: {
      text: 'Income/Expense Report',
      align: 'left' 
    },
    fill: {
      colors: ['#798afd']
    }
  };


  return (
    <div id="chart1" style={{border:"3px solid #84C1FF", borderRadius: '16px'}}>
     <Chart 
        options={options}
        series={series}
        type="bar"
        height={380} 
        width={590}
      />
    </div>
  );
}