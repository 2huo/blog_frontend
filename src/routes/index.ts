import webRoutes from './web';
import adminRoutes from './admin';
import { IRoutes } from '@/utils/renderRoutes';

const routes: IRoutes[] = [adminRoutes, webRoutes];

export default routes;
