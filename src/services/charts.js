import axios from 'axios';

export const getChartData = () => {
  const url = 'http://localhost:1323/analysis/category/all';
  return axios.get(url);
};

export const getCusChartData = () => {
  const url = 'http://localhost:1323/analysis/rank/cus/';
  return axios.get(url);
};

export const getOrdChartData = () => {
  const url = 'http://localhost:1323/analysis/rank/ord/';
  return axios.get(url);
};

