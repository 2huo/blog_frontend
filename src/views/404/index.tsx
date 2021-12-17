import React from 'react';
import { Empty } from 'antd';

function _404(): JSX.Element {
  return (
    <div>
      <Empty description="没有找到你想要的内容..." />
    </div>
  );
}

export default _404;
