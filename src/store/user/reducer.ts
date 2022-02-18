import * as TYPES from '../types';
import { save, get, remove } from '@/utils/storage';

let defaultState = {
  role: 0,
};

const userInfo = get('userInfo');

if (userInfo) {
  defaultState = { ...defaultState, role: userInfo.role };
}

interface IAction {
  type: string;
  payload: any;
}

export default function UserReducer(state = defaultState, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case TYPES.USER_LOGIN: {
      const { role, token } = payload;
      save('userInfo', { role, token });
      return { ...state, role };
    }

    case TYPES.USER_LOGIN_OUT: {
      remove('userInfo');
      return { ...state, role: 2 };
    }

    default:
      return state;
  }
}
