import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://example.com/api', // Replace with actual backend URL
  timeout: 10000,
});

export default apiClient;