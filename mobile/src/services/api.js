import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://192.168.0.105:3333'
});

export default api;