import * as TYPES from '../types';
import { Dispatch } from 'redux';

export function setSiderStatus(params: { isShow: boolean; sideContent?: JSX.Element | null }) {
  return (dispatch: Dispatch): void => {
    dispatch({
      type: TYPES.SIDER_STATUS,
      payload: params,
    });
  };
}

export function setTitle(params: { title: string }) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: TYPES.PAGE_TITLE,
      payload: params,
    });
  };
}
