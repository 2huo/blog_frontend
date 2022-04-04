import React from 'react';
import { Empty } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSiderStatus, setTitle } from '@/store/page/actions';

function _404(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle({ title: '404' }));
    dispatch(setSiderStatus({ isShow: false }));
  });
  return (
    <div>
      <Empty description="没有找到你想要的内容..." />
    </div>
  );
}

export default _404;
