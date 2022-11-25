import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Top 10 Sales Quota History',
      },
    },
  };

  // console.log('AAA', props.idArray)

  const data = {
    labels: props.labelArray,
    datasets: props.dataArray.map((data, index) => {
      return {
        label: props.idArray[index],
        // Mock data
        // data: props.labelArray.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        data: data,
        borderColor: props.borderColorArray[index],
        backgroundColor: props.backgroundColorArray[index],
      };
    }),
    // datasets: [
    //   {
    //     label: props.labelArray,
    //     data: [1,2,3,4,5,6],
    //     borderColor: props.borderColorArray,
    //     backgroundColor: props.backgroundColorArray,
    //   },
    //   {
    //     label: props.labelArray,
    //     data: [3,4,5,6,7,8],
    //     borderColor: props.borderColorArray,
    //     backgroundColor: props.backgroundColorArray,
    //   }
    // ]
  };

  return <Line options={options} data={data} />;
};

LineChart.defaultProps = {
  dataArray: [12, 19, 3, 5, 2, 3],
  idArray: [12, 19, 3, 5, 2, 3],
  labelArray: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  borderColorArray: [
    'rgb(255, 99, 132)',
    'rgb(53, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(255, 159, 64)',
  ],
  backgroundColorArray: [
    'rgba(255, 99, 132, 0.5)',
    'rgba(53, 162, 235, 0.5)',
    'rgba(255, 205, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)',
  ],
};

export default LineChart;
