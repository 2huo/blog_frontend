import AdminLayout from '@/layout/admin';
import { lazy } from 'react';

export default {
  path: '/admin',
  name: 'admin',
  component: AdminLayout,
  childRoutes: [
    { path: '/', name: 'adminLogin', component: lazy(() => import('@/layout/admin/Login')) },
    { path: '/content', name: 'adminContent', component: lazy(() => import('@/layout/admin/AdminContent')) },
  ],
};
