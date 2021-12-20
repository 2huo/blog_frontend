import React from 'react';
import { Empty } from 'antd';
import useBus from '@/hooks/useBus';
import { useEffect } from 'react';

function _404(): JSX.Element {
  const bus = useBus();
  useEffect(() => {
    bus.emit('siderShow', { show: false });
    bus.emit('pageTitle', '404');
  });
  return (
    <div>
      <Empty description="没有找到你想要的内容..." />
    </div>
  );
}

export default _404;
