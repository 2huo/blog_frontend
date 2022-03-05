import * as TYPES from '../types';
import query from '@/utils/query';
import { message } from 'antd';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

export const login = (params: { username: string; password: string }) => {
  return (dispatch: Dispatch): Promise<AxiosResponse> =>
    query.post('admin/login', params).then((res) => {
      if (res.data.code === 'ok') {
        dispatch({
          type: TYPES.USER_LOGIN,
          payload: res.data.data,
        });
        message.success(`登录成功`);
      } else {
        message.error('登陆失败');
      }
      return res;
    });
};

export const loginout: () => { type: string } = () => ({
  type: TYPES.USER_LOGIN_OUT,
});
