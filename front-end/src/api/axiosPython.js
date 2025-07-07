import axios from 'axios';

const apiDolar = axios.create({
  baseURL: process.env.REACT_APP_API_URL_DOLAR,
});

export default apiDolar;
