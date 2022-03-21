import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { Configuration, DefaultApi } from './rest-api';
const localBasePath = 'http://' + location.hostname + ':3000';
class SsgApiService extends DefaultApi {
  constructor() {
    super(new Configuration(), localBasePath, getAxiosInstance());
  }
  async loginUser(userName: string, password: string) {
    const response = await ssgApiService.login(userName, password);
    if (response.status == 201) {
      console.log(response);
      sessionStorage.setItem('access-token', response.data.accessToken || '');
      sessionStorage.setItem(
        'refresh-token',
        String(response.data.refreshToken)
      );
      const user = await this.getUserProfile();
      return user.data;
    }
  }

  async logoutUser() {
    const response = await ssgApiService.logout();
    localStorage.removeItem('access-token');
    return response;
  }

  async getUserProfile() {
    const response = await ssgApiService.getProfile();
    return response;
  }
}

interface AxiosRequestConfig2 extends AxiosRequestConfig {
  _retry?: boolean;
}
interface AxiosError2 {
  config: AxiosRequestConfig2;
  response: AxiosResponse;
}
// const liveBasePath = 'https://';
const sessionStorage: Storage = localStorage;
function getAxiosInstance() {
  const axiosInstance = axios.create();
  axiosInstance.interceptors.request.use(
    (config) => {
      const access_token = sessionStorage.getItem('access-token') || 'none';
      const headers = config.headers as { Authorization?: string };
      headers['Authorization'] = `Bearer ${access_token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // Response interceptor for API calls
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: AxiosError2) => {
      const originalRequest = error.config;
      if (error.response?.status === 402 && !originalRequest._retry) {
        originalRequest._retry = true;
        const response = await ssgApiService.refreshToken({
          refresh_token: sessionStorage.getItem('refresh-token') || 'none',
        });
        const access_token = (response?.data).accessToken || 'none';
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + String(access_token);
        sessionStorage.setItem('access-token', access_token);
        return axiosInstance(originalRequest);
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;


}

export const ssgApiService = new SsgApiService();
