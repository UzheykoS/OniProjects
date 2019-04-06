import { RouteConfig } from 'react-router-config';
import MainPage from '../pages/MainPage';
import CheckPage from '../pages/CheckPage';
import CheckoutPage from '../pages/CheckoutPage';
import NotFoundPage from '../pages/NotFoundPage';
import PartnersPage from '../pages/PartnersPage';
import OtherPage from '../pages/OtherPage';
import CashboxPage from '../pages/CashboxPage';
import RootComponent from '../pages';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: RootComponent,
    routes: [
      {
        path: '/',
        exact: true,
        component: MainPage,
      },
      {
        path: '/login',
        component: MainPage,
      },
      {
        path: '/check',
        component: CheckPage,
      },
      {
        path: '/checkOut',
        component: CheckoutPage,
      },
      {
        path: '/partners',
        component: PartnersPage,
      },
      {
        path: '/other',
        component: OtherPage,
      },
      {
        path: '/cashbox',
        component: CashboxPage,
      },
    ],
  },
];

export default routes;
