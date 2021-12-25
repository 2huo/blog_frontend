import './App.css';
import React from 'react';
import { Provider as EventProvider } from '@/hooks/useBus';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '@/routes';
import { BackTop } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
import renderRoutes from './utils/renderRoutes';

const App: React.FC = () => {
  const appRoutes = renderRoutes(routes, '');
  console.log(appRoutes);
  return (
    <Router>
      <EventProvider>
        <div className="App">
          {appRoutes}
          {/* 回到顶部 */}
          <BackTop>
            <div className="text-4xl">
              <UpCircleOutlined />
            </div>
          </BackTop>
        </div>
      </EventProvider>
    </Router>
  );
};

export default App;
