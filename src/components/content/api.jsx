import axios from 'axios';

const api = axios.create({
    baseURL: 'https://run.mocky.io/v3/d49e9fc0-786a-4d5b-812b-441cd4c3ad59'
});
 
export default api;