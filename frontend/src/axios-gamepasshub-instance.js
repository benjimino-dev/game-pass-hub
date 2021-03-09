import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://game-pass-hub-api.herokuapp.com/api/v1/',
});

export default instance;
