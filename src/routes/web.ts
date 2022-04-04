import { lazy } from 'react';
import WebLayout from '@/layout/web';

export default {
  path: '/',
  name: 'web',
  component: WebLayout,
  childRoutes: [
    { path: '', name: 'home', component: lazy(() => import('@/components/web/Home')) },
    {
      path: '/article/:id',
      name: 'article',
      component: lazy(() => import('@/components/web/Article')),
    },
    {
      path: '/article_list',
      name: 'article_list',
      component: lazy(() => import('@/components/web/ArticleList')),
    },
    { path: '/topic/:id', name: 'topic', component: lazy(() => import('@/components/web/Topic')) },
    {
      path: '/topic_list',
      name: 'topic_list',
      component: lazy(() => import('@/components/web/TopicList')),
    },
    { path: '/about', name: 'about', component: lazy(() => import('@/components/web/About')) },
    { path: '/*', name: '404', component: lazy(() => import('@/components/404')) },
  ],
};
