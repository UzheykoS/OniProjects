import { ProductType } from './products';

export enum Pages {
  Main = 'Главная',
  About = 'О нас',
  // Clients = 'Корпоративным клиентам',
  Delivery = 'Доставка и оплата',
  Contacts = 'Контакты',
  Products = 'Наши десерты',
  Checkout = 'Корзина',
}

type routeType = Partial<
  Record<
    Pages,
    {
      path: string;
      label: string;
      nestedRoutes?: Partial<
        Record<ProductType, { path: string; label: string }>
      >;
    }
  >
>;

export const routes: routeType = {
  [Pages.Main]: {
    path: '/',
    label: 'Главная',
  },
  [Pages.Products]: {
    path: '/products',
    label: 'Наши десерты',
    nestedRoutes: {
      [ProductType.Macaron]: {
        path: '/products/macarons',
        label: 'Макарон',
      },
      [ProductType.Choux]: {
        path: '/products/choux',
        label: 'Шу',
      },
      [ProductType.Zephyr]: {
        path: '/products/zephyr',
        label: 'Зефир',
      },
      [ProductType.Cheesecake]: {
        path: '/products/cheesecakes',
        label: 'Чизкейки',
      },
      [ProductType.Cake]: {
        path: '/products/cakes',
        label: 'Торты',
      },
    },
  },
  // [Pages.Clients]: {
  //   path: '/clients',
  //   label: 'Корпоративным клиентам',
  // },
  [Pages.Delivery]: {
    path: '/delivery',
    label: 'Доставка и оплата',
  },
  [Pages.Contacts]: {
    path: '/contacts',
    label: 'Контакты',
  },
  [Pages.About]: {
    path: '/about',
    label: 'О нас',
  },
  [Pages.Checkout]: {
    path: '/checkout',
    label: 'Корзина',
  },
};
