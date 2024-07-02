
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your backend URL
    timeout: 10000, // Adjust timeout as needed
});

export default instance;
