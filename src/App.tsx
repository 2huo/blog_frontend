import './App.css';
import React from 'react';
import { Provider as EventProvider } from '@/hooks/useBus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes, { IRoutes } from '@/routes';
import { BackTop } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  // 根据routes表渲染
  function renderRoutes(routes: IRoutes[], contextPath: string): React.ReactNode {
    const childrens: React.ReactElement[] = [];
    function renderRoute(item: IRoutes, routeContextPath: string) {
      let itemPath = item.path ? `${routeContextPath}/${item.path}` : routeContextPath;
      itemPath = itemPath.replace(/\/+/g, '/');

      const childrenRoutes = item.childRoutes ? renderRoutes(item.childRoutes, itemPath) : null;

      // 没有传递props
      // 目前来看没有传递props的必要
      const children = childrenRoutes ? (
        <Route
          path={`${itemPath}*`}
          key={item.name}
          element={<item.component>{childrenRoutes}</item.component>}
        ></Route>
      ) : (
        <Route path={itemPath} key={item.name} element={<item.component></item.component>}></Route>
      );
      childrens.push(children);
    }
    routes.forEach((item) => renderRoute(item, contextPath));
    return <Routes>{childrens}</Routes>;
  }

  const appRoutes = renderRoutes(routes, '');

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
