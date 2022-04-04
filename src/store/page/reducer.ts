import * as TYPES from '../types';

const defaultState = {
  isShow: false,
  sideContent: null,
  title: 'HOME',
};

interface IAction {
  type: string;
  payload: { isShow: boolean; sideContent: JSX.Element; title: string };
}

export default function SideReducer(state = defaultState, action: IAction): typeof state {
  const { type, payload } = action;
  switch (type) {
    case TYPES.SIDER_STATUS:
    case TYPES.PAGE_TITLE: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
}
