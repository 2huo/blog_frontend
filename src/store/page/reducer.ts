import * as TYPES from '../types';
import { getClientWidth } from '@/utils';

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
    case TYPES.SIDER_STATUS: {
      const SM = 640;
      // 判断是否是手机 宽度大于640
      const width = getClientWidth();
      // console.log(width);
      if (payload.isShow && width && width >= SM) {
        // 自由在宽度大于640时才显示sider
        payload.isShow = true;
      } else {
        payload.isShow = false;
      }
      return { ...state, ...payload };
    }
    case TYPES.PAGE_TITLE: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
}
