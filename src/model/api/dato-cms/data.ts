// lib/datoCms.ts
import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://graphql.datocms.com/', 
  headers: {
    Authorization: `${process.env.DATO_CMS_API_TOKEN}`,
  },
});

export default api;
