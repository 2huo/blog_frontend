import React from 'react';
import { Route, Routes } from 'react-router-dom'; // v6

// 路由接口
export interface IRoutes {
  path: string;
  name: string;
  component: React.FC;
  childRoutes?: IRoutes[];
}

// 渲染路由
// TODO:太过冗余，日后尝试改一下，使用v6版本的react-router-dom的renderRoutes应该会简便很多
function renderRoutes(routes: IRoutes[], contextPath: string): React.ReactElement {
  const childrens: React.ReactElement[] = [];
  function renderRoute(item: IRoutes, routeContextPath: string) {
    let itemPath = item.path ? `${routeContextPath}/${item.path}` : routeContextPath;
    itemPath = itemPath.replace(/\/+/g, '/');

    const childrenRoutes = item.childRoutes ? renderRoutes(item.childRoutes, itemPath) : null;
    // react-router-dom v6 无法传递props
    const children = childrenRoutes ? (
      <Route path={`${itemPath}`} key={item.name} element={<item.component></item.component>}>
        {childrenRoutes}
      </Route>
    ) : (
      <Route path={itemPath} key={item.name} element={<item.component></item.component>}></Route>
    );
    childrens.push(children);
  }
  routes.forEach((item) => renderRoute(item, contextPath));
  return <Route>{childrens}</Route>;
}

export default function render(routes: IRoutes[], contextPath: string): React.ReactElement {
  return <Routes>{renderRoutes(routes, contextPath)}</Routes>;
}
