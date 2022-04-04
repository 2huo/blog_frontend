import './App.css';
import React from 'react';
import routes from '@/routes';
import { BackTop } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
import renderRoutes from './utils/renderRoutes';

const App: React.FC = () => {
  const appRoutes = renderRoutes(routes, '');

  // console.log(appRoutes);
  return (
    <div className="App">
      {appRoutes}
      {/* 回到顶部 */}
      <BackTop style={{ right: '20px' }}>
        <div className="text-4xl">
          <UpCircleOutlined />
        </div>
      </BackTop>
    </div>
  );
};

export default App;
