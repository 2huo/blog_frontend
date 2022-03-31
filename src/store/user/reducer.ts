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
