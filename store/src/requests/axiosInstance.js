import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',  
//   withCredentials: true, // Include cookies in cross-origin requests
});

export default axiosInstance;
