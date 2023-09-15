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
      colors: ['#00E396']
    }
  };

  return (
    <div id="chart">
     <Chart 
        options={options}
        series={series}
        type="bar"
        height={350} 
        width={519}
      />
    </div>
  );
}