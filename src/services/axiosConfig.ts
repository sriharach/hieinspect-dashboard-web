import axios from 'axios';

const endpoint = process.env.API_URL as string;

export default axios.create({
  baseURL: endpoint,
  headers: {
    'Content-Type': 'application/json',
  },
});
