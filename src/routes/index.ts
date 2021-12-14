import webRoutes from './web';
import adminRoutes from './admin';
import React from 'react';

const routes: IRoutes[] = [adminRoutes, webRoutes];

export interface IRoutes {
  path: string;
  name: string;
  component: React.FC;
  childRoutes?: IRoutes[];
}

export default routes;
