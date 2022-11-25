import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './styles.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {
  const data = {
    labels: props.labelArray,
    datasets: [
      {
        label: '# of Votes',
        data: props.dataArray,
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(53, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(0, 0, 0)',
          'rgb(10, 79, 21)',
          'rgb(228, 142, 17)',
          'rgb(156, 151, 143)',
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(53, 162, 235, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(0, 0, 0, 0.5)',
          'rgba(10, 79, 21, 0.5)',
          'rgba(228, 142, 17, 0.5)',
          'rgba(156, 151, 143, 0.5',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} className="pieChart" />;
};

PieChart.defaultProps = {
  dataArray: [12, 19, 3, 5, 2, 3],
  labelArray: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
};

export default PieChart;
