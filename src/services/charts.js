import axios from 'axios';

export const getChartData = () => {
  const url = 'http://localhost:1323/analysis/category/all';
  return axios.get(url);
};
