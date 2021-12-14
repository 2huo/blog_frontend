import React from 'react';
import { useListener } from '@/hooks/useBus';

const Sider = (): JSX.Element => {
  useListener('click', (e) => {
    console.log(e);
  });

  return <div>Sider</div>;
};

export default Sider;
