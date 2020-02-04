export enum Pages {
  Main = 'Главная',
  About = 'О нас',
  Clients = 'Корпоративным клиентам',
  Delivery = 'Доставка и оплата',
  Contacts = 'Контакты',
  Products = 'Продукция',
}

export enum ProductPages {
  Zephyr = 'Зефир',
  Macarons = 'Макарон',
  Choux = 'Шу',
  Cakes = 'Торты',
}

type routeType = Partial<
  Record<
    Pages,
    {
      path: string;
      label: string;
      nestedRoutes?: Partial<
        Record<ProductPages, { path: string; label: string }>
      >;
    }
  >
>;

export const routes: routeType = {
  [Pages.Main]: {
    path: '/',
    label: 'Главная',
  },
  [Pages.About]: {
    path: '/about',
    label: 'О нас',
  },
  [Pages.Clients]: {
    path: '/clients',
    label: 'Клиентам',
  },
  [Pages.Delivery]: {
    path: '/delivery',
    label: 'Доставка и оплата',
  },
  [Pages.Contacts]: {
    path: '/contacts',
    label: 'Контакты',
  },
  [Pages.Products]: {
    path: '/products',
    label: 'Продукция',
    nestedRoutes: {
      [ProductPages.Zephyr]: {
        path: '/zephyr',
        label: 'Зефир',
      },
      [ProductPages.Choux]: {
        path: '/choux',
        label: 'Шу',
      },
      [ProductPages.Macarons]: {
        path: '/macarons',
        label: 'Макарон',
      },
      [ProductPages.Cakes]: {
        path: '/cakes',
        label: 'Торты',
      },
    },
  },
};
