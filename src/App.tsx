import './App.css';
import React, { Suspense } from 'react';
import { Provider as EventProvider } from '@/hooks/useBus';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import routes, { IRoutes } from '@/routes';

const App: React.FC = () => {
  function renderRoutes(routes: IRoutes[], contextPath: string): React.ReactNode {
    const childrens: React.ReactElement[] = [];
    function renderRoute(item: IRoutes, routeContextPath: string) {
      let itemPath = item.path ? `${routeContextPath}/${item.path}` : routeContextPath;
      itemPath = itemPath.replace(/\/+/g, '/');

      const childrenRoutes = item.childRoutes ? renderRoutes(item.childRoutes, itemPath) : null;

      // 没有传递props
      // 目前来看没有传递props的需求
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
        <Suspense fallback="loading...">
          <div className="App">{appRoutes}</div>
        </Suspense>
      </EventProvider>
    </Router>
  );
};

export default App;
