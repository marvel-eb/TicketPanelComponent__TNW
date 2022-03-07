import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://next.tnw-staging.com/next-api/tickets.json'
});
export default instance;