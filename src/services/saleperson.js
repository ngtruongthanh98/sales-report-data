import axios from 'axios';

export const getSalePerson = (personId) => {
  const url = `http://localhost:1323/salesperson/${personId}`;
  return axios.get(url);
};
