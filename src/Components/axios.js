import axios from 'axios';

// Base URL to make requests to the API
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// Example => instance.get('/movie/popular?api_key=<YOUR_API_KEY>&language=en-US&page=1')

export default instance;
