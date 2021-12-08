import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kenzie-habits.herokuapp.com/users/',
});

export default api;
