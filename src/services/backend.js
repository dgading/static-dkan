import axios from 'axios';

const backend = axios.create({
  // baseURL: process.env.REACT_APP_INTERRA_API_URL,
  baseURL: "http://admin.d8.dkandemo.nuamsdev.com/api/v1",
});

export default backend;
