import './App.css';
import React from 'react';
import { Provider as EventProvider } from '@/hooks/useBus';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '@/routes';
import { BackTop } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
import renderRoutes from './utils/renderRoutes';
import { Provider } from 'react-redux';
import store from '@/store';

const App: React.FC = () => {
  const appRoutes = renderRoutes(routes, '');
  // console.log(appRoutes);
  return (
    <Provider store={store}>
      <Router>
        <EventProvider>
          <div className="App">
            {appRoutes}
            {/* 回到顶部 */}
            <BackTop style={{ right: '20px' }}>
              <div className="text-4xl">
                <UpCircleOutlined />
              </div>
            </BackTop>
          </div>
        </EventProvider>
      </Router>
    </Provider>
  );
};

export default App;
