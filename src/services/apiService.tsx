import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_BASE_URL = 'http://localhost:9099'; 
const AUTH_TOKEN = 'eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxMjI4NTEiLCJpYXQiOjE3MDg5MjczOTksImlzcyI6IkVOR0FHRV9TRVJWRVJfREVWIiwiZXhwIjoxNzM0ODQ3Mzk5LCJ1c2VyIjoiMTIyODUxIn0.Dr0bO4j9zhyeqiNXAlqgJss1pYpiH4z0tN1Y5RQlnll6agI4Na8aV4T-q4JX-tmGVifqkOJYgXU5KekDB-oWjfwFZfN-3iuk64HxIeA72LTIKcoKCDCtz-6oQLhP4IX_04WQUBx6xM4Tfzz7mkvgF1UlQ-jsLHhOiDSwYua5s8cggpuQPVRyfNAYchKJ5Pj_Efjy--ijLn0jDkIvyo_VC1bUO6DwMdM0ox1CChlKCd9OmTQgSYYHOngdGWjS6zt9B-t-jjYGYww27KbDmPheVkYQqSK7OlXURk4zzsezbdCDb6we3_Ad8NS6N6rhanZobnk45ccTtu9wfn6I5bbjdA'; // replace with your actual token

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AUTH_TOKEN}`,
  },
});

export const apiRequest = async (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD',
  data?: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await apiClient.request({
      url: endpoint,
      method,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error making ${method} request to ${endpoint}`, error);
    throw error;
  }
};
