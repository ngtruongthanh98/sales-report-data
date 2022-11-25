import axios from 'axios';

export const getSalePerson = (personId) => {
  const url = `http://localhost:1323/salesperson/rec/${personId}`;
  return axios.get(url);
};
