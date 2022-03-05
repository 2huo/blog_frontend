import axios from 'axios';
import { message } from 'antd';
import qs from 'qs';
import { get } from '@/utils/storage';

// 创建axios实例
const service = axios.create({
  // baseURL: 'https://api.2huo.tech',
  baseURL: 'http://localhost:3001',
  timeout: 15000, // 请求超时时间
});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// request 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (config.method === 'post') {
      // 携带token
      const userInfo = get('userInfo');
      if (userInfo && userInfo.token) {
        config.data = { ...config.data, token: userInfo.token };
      }

      config.data = qs.stringify(config.data);
    }
    // 格式化 get 请求
    return config;
  },
  (error) => {
    message.error('request error');
    return Promise.reject(error);
  },
);

// response 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    message.error('response error');
    return Promise.reject(error);
  },
);

export default service;
