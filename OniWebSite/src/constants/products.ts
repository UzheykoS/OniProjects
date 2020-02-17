import { ProductPages } from './routes';

export interface IProduct {
  name: string;
  description?: string;
  imageUrl: string;
  imageCutUrl?: string;
}

export const pages = {
  [ProductPages.Macarons]:
    'Макарон – это маленькое пирожное, которое состоит из двух миндальных половинок, пропитанных начинкой. Яркий вкус, нежная текстура внутри и хрустящая корочка снаружи. Выберите любые вкусы из меню и сформируйте свой набор на 6, 12 или 24 макарон.',
  [ProductPages.Zephyr]:
    'Мы разработали рецептуру с пониженным содержанием сахара и готовим наш зефир исключительно на основе натуральных фруктовых пюре без ароматизаторов и консервантов. Выберите любые вкусы из меню и сформируйте свой набор на 8 или 16 шт.',
  [ProductPages.Choux]:
    'Основа пирожного шу – заварное тесто, покрытое тонким хрустящим слоем. Внутри – много начинки и лёгкого крема. Шу украшены кружочками из марципана. Выберите любые вкусы из меню и сформируйте свой набор на 2 или 4 шу.',
};

export const macaronMix: IProduct[] = [
  {
    name: '6 шт',
    imageUrl: './images/pages/macarons/box-6.jpg',
  },
  {
    name: '12 шт',
    imageUrl: './images/pages/macarons/box-12.jpg',
  },
  {
    name: '24 шт',
    imageUrl: './images/pages/macarons/box-24.jpg',
  },
];

export const chouxMix: IProduct[] = [
  {
    name: '2 шт',
    imageUrl: './images/pages/choux/box-2.jpg',
  },
  {
    name: '4 шт',
    imageUrl: './images/pages/choux/box-4.jpg',
  },
];

export const zephyrMix: IProduct[] = [
  {
    name: '8 шт',
    imageUrl: './images/pages/zephyr/box-8.jpg',
  },
  {
    name: '16 шт',
    imageUrl: './images/pages/zephyr/box-16.jpg',
  },
];

export const macarons: IProduct[] = [
  {
    name: 'Грейпфрут-Роза',
    description:
      'Начинка на основе грейпфрутового фреша с добавлением лепестков чайной розы и грейпфрутовым конфи',
    imageUrl: './images/pages/macarons/grapefruit.jpg',
    imageCutUrl: './images/pages/macarons/grapefruit_cut.jpg',
  },
  {
    name: 'Дор Блю-Груша',
    description:
      'Начинка на основе сыра дор блю с конфи из натурального пюре груши',
    imageUrl: './images/pages/macarons/dor_blue.jpg',
    imageCutUrl: './images/pages/macarons/dor_blue_cut.jpg',
  },
  {
    name: 'Пармезан-Инжир',
    description:
      'Начинка на основе сыра пармезан с конфи из натурального пюре инжира',
    imageUrl: './images/pages/macarons/parmegiano.jpg',
    imageCutUrl: './images/pages/macarons/parmegiano_cut.jpg',
  },
  {
    name: 'Лаванда-Черника',
    description:
      'Начинка на основе сливок, настоянных на цветках лаванды, с черничным конфи',
    imageUrl: './images/pages/macarons/lavender.jpg',
    imageCutUrl: './images/pages/macarons/lavender_cut.jpg',
  },
  {
    name: 'Малина',
    description: 'Начинка на основе натурального пюре малины с малиновым конфи',
    imageUrl: './images/pages/macarons/raspberry.jpg',
    imageCutUrl: './images/pages/macarons/raspberry_cut.jpg',
  },
  {
    name: 'Смородина',
    description:
      'Начинка на основе натурального пюре чёрной смородины со смородиновым конфи',
    imageUrl: './images/pages/macarons/blackcurrant.jpg',
    imageCutUrl: './images/pages/macarons/blackcurrant_cut.jpg',
  },
  {
    name: 'Фисташка',
    description: 'Начинка на основе натуральной 100% фисташковой пасты',
    imageUrl: './images/pages/macarons/pistachio.jpg',
    imageCutUrl: './images/pages/macarons/pistachio_cut.jpg',
  },
  {
    name: 'Шоколад',
    description:
      'Начинка на основе бельгийского чёрного шоколада 60% и моносорта из танзании 75%',
    imageUrl: './images/pages/macarons/chocolate.jpg',
    imageCutUrl: './images/pages/macarons/chocolate_cut.jpg',
  },
  {
    name: 'Клубничный чизкейк',
    description: 'Начинка на основе сыра филадельфия с клубничным конфи',
    imageUrl: './images/pages/macarons/cheesecake.jpg',
    imageCutUrl: './images/pages/macarons/cheesecake_cut.jpg',
  },
  {
    name: 'Кофе-Солёная карамель',
    description:
      'Начинка с добавлением кофе и центром из мягкой солёной карамели',
    imageUrl: './images/pages/macarons/caramel.jpg',
    imageCutUrl: './images/pages/macarons/caramel_cut.jpg',
  },
  {
    name: 'Манго-Маракуйя',
    description:
      'Начинка на основе натуральных пюре манго и маракуйи с манго-маракуйевым конфи',
    imageUrl: './images/pages/macarons/mango.jpg',
    imageCutUrl: './images/pages/macarons/mango_cut.jpg',
  },
  {
    name: 'Вишня-Бренди-Шоколад',
    description:
      'Начинка на основе чёрного шоколада и натурального пюре вишни с добавлением бренди и вишнёвым конфи',
    imageUrl: './images/pages/macarons/cherry.jpg',
    imageCutUrl: './images/pages/macarons/cherry_cut.jpg',
  },
  {
    name: 'Банан-Юзу',
    description:
      'Начинка на основе натуральных пюре банана и юзу с банановым конфи',
    imageUrl: './images/pages/macarons/banana.jpg',
    imageCutUrl: './images/pages/macarons/banana_cut.jpg',
  },
  {
    name: 'Апельсин-Молочный шоколад',
    description:
      'Начинка на основе молочного шоколада и апельсинового фреша с апельсиновым конфи',
    imageUrl: './images/pages/macarons/orange.jpg',
    imageCutUrl: './images/pages/macarons/orange_cut.jpg',
  },
];

export const choux: IProduct[] = [
  {
    name: 'Ваниль-Персик',
    description:
      'Крем с добавлением стручков ванили из Мадагаскара в сочетании с конфи из натурального пюре персика',
    imageUrl: './images/pages/choux/vanilla.jpg',
    imageCutUrl: './images/pages/choux/vanilla_cut.jpg',
  },
  {
    name: 'Солёная Карамель',
    description:
      'Мягкая солёная карамель в сочетании с нежным карамельным кремом',
    imageUrl: './images/pages/choux/caramel.jpg',
    imageCutUrl: './images/pages/choux/caramel_cut.jpg',
  },
  {
    name: 'Лимон',
    description: '',
    imageUrl: './images/pages/choux/lemon.jpg',
    imageCutUrl: './images/pages/choux/lemon_cut.jpg',
  },
  {
    name: 'Малина-Личи-Роза',
    description:
      'Крем с натуральным пюре личи и лепестками чайной розы в сочетании с конфи из натурального пюре малины',
    imageUrl: './images/pages/choux/raspberry.jpg',
    imageCutUrl: './images/pages/choux/raspberry_cut.jpg',
  },
  {
    name: 'Абрикос',
    description: '',
    imageUrl: './images/pages/choux/apricot.jpg',
    imageCutUrl: './images/pages/choux/apricot_cut.jpg',
  },
];

export const zephyr: IProduct[] = [
  {
    name: 'Классический Яблочный',
    description: 'Сделан на основе натурального пюре запечённого яблока',
    imageUrl: './images/pages/zephyr/apple.jpg',
  },
  {
    name: 'Клубника-Клюква',
    description: 'Сделан на основе натурального пюре клубники и клюквы',
    imageUrl: './images/pages/zephyr/strawberry.jpg',
  },
  {
    name: 'Абрикос-Маракуйя',
    description: 'Сделан на основе натурального пюре абрикоса и маракуйи',
    imageUrl: './images/pages/zephyr/apricot.jpg',
  },
  {
    name: 'Смородина',
    description: 'Сделан на основе натурального пюре чёрной смородины',
    imageUrl: './images/pages/zephyr/currant.jpg',
  },
];
