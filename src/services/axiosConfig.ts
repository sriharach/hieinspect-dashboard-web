import axios from 'axios';

const endpoint = process.env.NEXT_PUBLIC_SERVICE_HOST as string;

export default axios.create({
  baseURL: endpoint,
  headers: {
    'Content-Type': 'application/json',
  },
});
