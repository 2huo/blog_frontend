import axios from 'axios';
import { message } from 'antd';
import qs from 'qs';
import { get, remove, save } from '@/utils/storage';

// 创建axios实例
const service = axios.create({
  baseURL: 'https://api.2huo.tech/blog',
  // baseURL: 'http://119.91.158.120:9809',
  // baseURL: 'http://localhost:3001',
  timeout: 15000, // 请求超时时间
});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// request 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = get('token');
    if (config.headers && token) {
      // console.log('set authorization', token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    // console.log(config);
    return config;
  },
  (error) => {
    message.error('请检查是否登录或者网络是否正常');
    return Promise.reject(error);
  },
);

// response 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { authorization } = response.headers;
    // 如果token存在则存在sessionStorage
    // 刷新或者新建token
    authorization && save('token', authorization);
    return response;
  },
  (error) => {
    // console.log('error', error.response.status);
    const status = error.response?.status;
    if (status === 401) {
      remove('role');
      remove('token');
      window.location.pathname = '/admin';
    }
    // console.log('response error', error.response.status);
    return Promise.reject(error);
  },
);

export default service;
