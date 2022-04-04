import * as TYPES from '../types';
import { save, get, remove } from '@/utils/storage';

let defaultState = {
  role: '0',
};

const role = get('role');

if (role !== '') {
  defaultState = { ...defaultState, role: role };
}

interface IAction {
  type: string;
  payload: { role: string };
}

export default function UserReducer(state = defaultState, action: IAction): typeof state {
  const { type, payload } = action;
  switch (type) {
    case TYPES.USER_LOGIN: {
      const { role } = payload;
      save('role', role);
      // TODO 不应该将role保存在session中，只保存token，如果读取到有token记录，则重新登陆并根据服务端返回的信息重新判断
      return { ...state, role };
    }

    case TYPES.USER_LOGIN_OUT: {
      remove('role');
      remove('token');
      return { ...state, role: '2' };
    }

    default:
      return state;
  }
}
