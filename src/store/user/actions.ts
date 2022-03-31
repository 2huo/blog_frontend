import * as TYPES from '../types';
import query from '@/utils/query';
import { message } from 'antd';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { remove } from '@/utils/storage';

export function login(params: {
  account: string;
  password: string;
}): (dispatch: Dispatch) => Promise<AxiosResponse> {
  remove('role');
  remove('token');
  return (dispatch: Dispatch): Promise<AxiosResponse> =>
    query.post('admin/login', params).then((res) => {
      console.log('admin/login', res);
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
}
