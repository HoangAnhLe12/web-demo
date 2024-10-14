//Layout
import DefaultLayout from '../layouts/defaultLayout/defaultLayout';

import config from '../config';
//Pages
import HomePage from '../pages/Home';
import DashboardPage from '../pages/Dashboard';
import ShowcasePage from '../pages/Showcase';

//Public Routes
const publicRoutes = [
   {
      path: config.routes.home,
      component: HomePage,
   },
   {
      path: config.routes.dashboard,
      component: DashboardPage,
      layout: DefaultLayout,
   },
   {
      path: config.routes.showcase,
      component: ShowcasePage,
      layout: DefaultLayout,
   },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
