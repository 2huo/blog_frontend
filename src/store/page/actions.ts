import * as TYPES from '../types';
import { Dispatch } from 'redux';
import { getClientWidth } from '@/utils';

export function setSiderStatus(params: {
  isShow: boolean;
  sideContent?: JSX.Element | null;
}): (Dispatch) => void {
  const SM = 640;
  // 判断是否是手机 宽度大于640
  const width = getClientWidth();
  // console.log(width);
  if (params.isShow && width && width >= SM) {
    // 自由在宽度大于640时才显示sider
    params.isShow = true;
  } else {
    params.isShow = false;
  }
  return (dispatch: Dispatch): void => {
    dispatch({
      type: TYPES.SIDER_STATUS,
      payload: params,
    });
  };
}

export function setTitle(params: { title: string }): (Dispatch) => void {
  return (dispatch: Dispatch) => {
    dispatch({
      type: TYPES.PAGE_TITLE,
      payload: params,
    });
  };
}
