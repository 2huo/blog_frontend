import { lazy } from 'react';
import WebLayout from '@/layout/web';

export default {
  path: '/',
  name: 'web',
  component: WebLayout,
  childRoutes: [
    { path: '', name: 'home', component: lazy(() => import('@/views/Home')) },
    { path: '/article/:id', name: 'article', component: lazy(() => import('@/views/Article')) },
    { path: '/article_list', name: 'article_list', component: lazy(() => import('@/views/ArticleList')) },
    { path: '/topic/:id', name: 'topic', component: lazy(() => import('@/views/Topic')) },
    { path: '/topic_list', name: 'topic_list', component: lazy(() => import('@/views/TopicList')) },
    { path: '/about', name: 'about', component: lazy(() => import('@/views/About')) },
    { path: '/*', name: '404', component: lazy(() => import('@/views/404')) },
  ],
};
