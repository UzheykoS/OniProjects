export enum ProductType {
  Macaron,
  Choux,
  Cheesecake,
  Zephyr,
  Cake,
}

export interface ICakeInfo extends IProduct {
  weight: number;
  diameter: number;
  persons: string;
}

export interface IProduct {
  id: string;
  price?: number;
  shortDescription?: string;
  fullDescription?: string;
  imageUrl: string;
  imageCutUrl?: string;
  type: ProductType;
}

enum Macarons {
  GrapefruitRose = 'Грейпфрут-Роза',
  DorBluePear = 'Дор Блю-Груша',
  ParmegianoFig = 'Пармезан-Инжир',
  LavenderBlueberry = 'Лаванда-Черника',
  Raspberry = 'Малина',
  Currant = 'Смородина',
  Pistachio = 'Фисташка',
  Chocolate = 'Шоколад',
  StrawberryCheesecake = 'Клубничный чизкейк',
  CoffeeSoltedCaramel = 'Кофе-Солёная карамель',
  MangoPassionFruit = 'Манго-Маракуйя',
  CherryBrandyChocolate = 'Вишня-Бренди-Шоколад',
  BananaYuzu = 'Банан-Юзу',
  OrangeMilkChocolate = 'Апельсин-Молочный шоколад',
  MacaronsMixSmall = '6 шт',
  MacaronsMixMedium = '12 шт',
  MacaronsMixLarge = '24 шт',
}

enum Choux {
  VanillaPear = 'Ваниль-Персик',
  SaltedCaramel = 'Солёная Карамель',
  Lemon = 'Лимон',
  RaspberryLiciRose = 'Малина-Личи-Роза',
  Apricot = 'Абрикос',
  ChouxMixSmall = '2 шт',
  ChouxMixLarge = '4 шт',
}

enum Zephyr {
  ClassicApple = 'Ваниль-Персик',
  StrawberryCranberry = 'Солёная Карамель',
  ApricotPassionFruit = 'Лимон',
  BlackCurrant = 'Малина-Личи-Роза',
  ZephyrMixSmall = '8 шт',
  ZephyrMixLarge = '16 шт',
}

export enum Cakes {
  SoulSmall = 'Soul',
  SoulLarge = 'Soul XL',
  CarrotSmall = 'Carrot Cake',
  CarrotLarge = 'Carrot Cake XL',
  PinkSmall = 'Pink',
  PinkLarge = 'Pink XL',
  InfinitySmall = 'Infinity',
  InfinityLarge = 'Infinity XL',
  RioSmall = 'Rio',
  RioLarge = 'Rio XL',
}

export const Products = { ...Macarons, ...Choux, ...Zephyr, ...Cakes };
export type Products = typeof Products;

export const macaronMix: IProduct[] = [
  {
    id: Macarons.MacaronsMixSmall,
    imageUrl: './images/pages/macarons/box-6.jpg',
    type: ProductType.Macaron,
    price: 180,
  },
  {
    id: Macarons.MacaronsMixMedium,
    imageUrl: './images/pages/macarons/box-12.jpg',
    type: ProductType.Macaron,
    price: 360,
  },
  {
    id: Macarons.MacaronsMixLarge,
    imageUrl: './images/pages/macarons/box-24.jpg',
    type: ProductType.Macaron,
    price: 720,
  },
];

export const chouxMix: IProduct[] = [
  {
    id: Choux.ChouxMixSmall,
    imageUrl: './images/pages/choux/box-2.jpg',
    type: ProductType.Choux,
    price: 180,
  },
  {
    id: Choux.ChouxMixLarge,
    imageUrl: './images/pages/choux/box-4.jpg',
    type: ProductType.Choux,
    price: 360,
  },
];

export const zephyrMix: IProduct[] = [
  {
    id: Zephyr.ZephyrMixSmall,
    imageUrl: './images/pages/zephyr/box-8.jpg',
    type: ProductType.Zephyr,
    price: 128,
  },
  {
    id: Zephyr.ZephyrMixLarge,
    imageUrl: './images/pages/zephyr/box-16.jpg',
    type: ProductType.Zephyr,
    price: 256,
  },
];

export const macarons: IProduct[] = [
  {
    id: Macarons.GrapefruitRose,
    fullDescription:
      'Начинка на основе грейпфрутового фреша с добавлением лепестков чайной розы и грейпфрутовым конфи',
    imageUrl: './images/pages/macarons/grapefruit.jpg',
    imageCutUrl: './images/pages/macarons/grapefruit_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.DorBluePear,
    fullDescription:
      'Начинка на основе сыра дор блю с конфи из натурального пюре груши',
    imageUrl: './images/pages/macarons/dor_blue.jpg',
    imageCutUrl: './images/pages/macarons/dor_blue_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.ParmegianoFig,
    fullDescription:
      'Начинка на основе сыра пармезан с конфи из натурального пюре инжира',
    imageUrl: './images/pages/macarons/parmegiano.jpg',
    imageCutUrl: './images/pages/macarons/parmegiano_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.LavenderBlueberry,
    fullDescription:
      'Начинка на основе сливок, настоянных на цветках лаванды, с черничным конфи',
    imageUrl: './images/pages/macarons/lavender.jpg',
    imageCutUrl: './images/pages/macarons/lavender_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.Raspberry,
    fullDescription:
      'Начинка на основе натурального пюре малины с малиновым конфи',
    imageUrl: './images/pages/macarons/raspberry.jpg',
    imageCutUrl: './images/pages/macarons/raspberry_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.Currant,
    fullDescription:
      'Начинка на основе натурального пюре чёрной смородины со смородиновым конфи',
    imageUrl: './images/pages/macarons/blackcurrant.jpg',
    imageCutUrl: './images/pages/macarons/blackcurrant_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.Pistachio,
    fullDescription: 'Начинка на основе натуральной 100% фисташковой пасты',
    imageUrl: './images/pages/macarons/pistachio.jpg',
    imageCutUrl: './images/pages/macarons/pistachio_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.Chocolate,
    fullDescription:
      'Начинка на основе бельгийского чёрного шоколада 60% и моносорта из танзании 75%',
    imageUrl: './images/pages/macarons/chocolate.jpg',
    imageCutUrl: './images/pages/macarons/chocolate_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.StrawberryCheesecake,
    fullDescription: 'Начинка на основе сыра филадельфия с клубничным конфи',
    imageUrl: './images/pages/macarons/cheesecake.jpg',
    imageCutUrl: './images/pages/macarons/cheesecake_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.CoffeeSoltedCaramel,
    fullDescription:
      'Начинка с добавлением кофе и центром из мягкой солёной карамели',
    imageUrl: './images/pages/macarons/caramel.jpg',
    imageCutUrl: './images/pages/macarons/caramel_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.MangoPassionFruit,
    fullDescription:
      'Начинка на основе натуральных пюре манго и маракуйи с манго-маракуйевым конфи',
    imageUrl: './images/pages/macarons/mango.jpg',
    imageCutUrl: './images/pages/macarons/mango_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.CherryBrandyChocolate,
    fullDescription:
      'Начинка на основе чёрного шоколада и натурального пюре вишни с добавлением бренди и вишнёвым конфи',
    imageUrl: './images/pages/macarons/cherry.jpg',
    imageCutUrl: './images/pages/macarons/cherry_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.BananaYuzu,
    fullDescription:
      'Начинка на основе натуральных пюре банана и юзу с банановым конфи',
    imageUrl: './images/pages/macarons/banana.jpg',
    imageCutUrl: './images/pages/macarons/banana_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
  {
    id: Macarons.OrangeMilkChocolate,
    fullDescription:
      'Начинка на основе молочного шоколада и апельсинового фреша с апельсиновым конфи',
    imageUrl: './images/pages/macarons/orange.jpg',
    imageCutUrl: './images/pages/macarons/orange_cut.jpg',
    type: ProductType.Macaron,
    price: 30,
  },
];

export const choux: IProduct[] = [
  {
    id: Choux.VanillaPear,
    fullDescription:
      'Крем с добавлением стручков ванили из Мадагаскара в сочетании с конфи из натурального пюре персика',
    imageUrl: './images/pages/choux/vanilla.jpg',
    imageCutUrl: './images/pages/choux/vanilla_cut.jpg',
    type: ProductType.Choux,
    price: 45,
  },
  {
    id: Choux.SaltedCaramel,
    fullDescription:
      'Мягкая солёная карамель в сочетании с нежным карамельным кремом',
    imageUrl: './images/pages/choux/caramel.jpg',
    imageCutUrl: './images/pages/choux/caramel_cut.jpg',
    type: ProductType.Choux,
    price: 45,
  },
  {
    id: Choux.Lemon,
    fullDescription: '',
    imageUrl: './images/pages/choux/lemon.jpg',
    imageCutUrl: './images/pages/choux/lemon_cut.jpg',
    type: ProductType.Choux,
    price: 45,
  },
  {
    id: Choux.RaspberryLiciRose,
    fullDescription:
      'Крем с натуральным пюре личи и лепестками чайной розы в сочетании с конфи из натурального пюре малины',
    imageUrl: './images/pages/choux/raspberry.jpg',
    imageCutUrl: './images/pages/choux/raspberry_cut.jpg',
    type: ProductType.Choux,
    price: 45,
  },
  {
    id: Choux.Apricot,
    fullDescription: '',
    imageUrl: './images/pages/choux/apricot.jpg',
    imageCutUrl: './images/pages/choux/apricot_cut.jpg',
    type: ProductType.Choux,
    price: 45,
  },
];

export const zephyr: IProduct[] = [
  {
    id: Zephyr.ClassicApple,
    fullDescription: 'Сделан на основе натурального пюре запечённого яблока',
    imageUrl: './images/pages/zephyr/apple.jpg',
    type: ProductType.Zephyr,
    price: 16,
  },
  {
    id: Zephyr.StrawberryCranberry,
    fullDescription: 'Сделан на основе натурального пюре клубники и клюквы',
    imageUrl: './images/pages/zephyr/strawberry.jpg',
    type: ProductType.Zephyr,
    price: 16,
  },
  {
    id: Zephyr.ApricotPassionFruit,
    fullDescription: 'Сделан на основе натурального пюре абрикоса и маракуйи',
    imageUrl: './images/pages/zephyr/apricot.jpg',
    type: ProductType.Zephyr,
    price: 16,
  },
  {
    id: Zephyr.BlackCurrant,
    fullDescription: 'Сделан на основе натурального пюре чёрной смородины',
    imageUrl: './images/pages/zephyr/currant.jpg',
    type: ProductType.Zephyr,
    price: 16,
  },
];

export const cakes: [ICakeInfo, ICakeInfo][] = [
  [
    {
      id: Cakes.SoulSmall,
      fullDescription:
        'Лёгкий шоколадный бисквит без муки, кремю с мадагаскарской ванилью, малиновое конфи, мусс c чёрным шоколадом.',
      shortDescription:
        'Для любителей вечной классики и беспроигрышных сочетаний',
      imageUrl: '/images/pages/cakes/soul.jpg',
      imageCutUrl: '/images/pages/cakes/soul_cut.jpg',
      type: ProductType.Cake,
      price: 620,
      weight: 1.2,
      diameter: 16,
      persons: '5-6',
    },
    {
      id: Cakes.SoulLarge,
      fullDescription:
        'Лёгкий шоколадный бисквит без муки, кремю с мадагаскарской ванилью, малиновое конфи, мусс c чёрным шоколадом.',
      shortDescription:
        'Для любителей вечной классики и беспроигрышных сочетаний',
      imageUrl: '/images/pages/cakes/soul.jpg',
      imageCutUrl: '/images/pages/cakes/soul_cut.jpg',
      type: ProductType.Cake,
      price: 960,
      weight: 1.6,
      diameter: 21,
      persons: '7-8',
    },
  ],
  [
    {
      id: Cakes.CarrotSmall,
      fullDescription:
        'Хрустящий миндальный слой с корицей, морковный бисквит с грецким орехом и апельсином, конфи из моркови и мандарина, мусс с филадельфией и мягким козьим сыром.',
      shortDescription: 'Морковный торт, ломающий гастрономические стереотипы',
      imageUrl: '/images/pages/cakes/carrot.jpg',
      imageCutUrl: '/images/pages/cakes/carrot_cut.jpg',
      type: ProductType.Cake,
      price: 650,
      weight: 1.2,
      diameter: 16,
      persons: '5-6',
    },
    {
      id: Cakes.CarrotLarge,
      fullDescription:
        'Хрустящий миндальный слой с корицей, морковный бисквит с грецким орехом и апельсином, конфи из моркови и мандарина, мусс с филадельфией и мягким козьим сыром.',
      shortDescription: 'Морковный торт, ломающий гастрономические стереотипы',
      imageUrl: '/images/pages/cakes/carrot.jpg',
      imageCutUrl: '/images/pages/cakes/carrot_cut.jpg',
      type: ProductType.Cake,
      price: 980,
      weight: 1.6,
      diameter: 21,
      persons: '7-8',
    },
  ],
  [
    {
      id: Cakes.PinkSmall,
      fullDescription:
        'Фисташковый бисквит дакуаз, клубничное конфи, кремю с лаймом, легкий грейпфрутовый мусс.',
      shortDescription: 'Легкий торт с ярко выраженной кислинкой',
      imageUrl: '/images/pages/cakes/pink.jpg',
      imageCutUrl: '/images/pages/cakes/pink_cut.jpg',
      type: ProductType.Cake,
      price: 630,
      weight: 1.2,
      diameter: 16,
      persons: '5-6',
    },
    {
      id: Cakes.PinkLarge,
      fullDescription:
        'Фисташковый бисквит дакуаз, клубничное конфи, кремю с лаймом, легкий грейпфрутовый мусс.',
      shortDescription: 'Легкий торт с ярко выраженной кислинкой',
      imageUrl: '/images/pages/cakes/pink.jpg',
      imageCutUrl: '/images/pages/cakes/pink_cut.jpg',
      type: ProductType.Cake,
      price: 970,
      weight: 1.6,
      diameter: 21,
      persons: '7-8',
    },
  ],
  [
    {
      id: Cakes.InfinitySmall,
      fullDescription:
        'Хрустящий миндально-фундучный слой, бисквит муалё с фундуком, абрикосовое конфи, мусс с молочным шоколадом и домашним пралине.',
      shortDescription: 'Насыщенный ореховый вкус с ярким абрикосовым акцентом',
      imageUrl: '/images/pages/cakes/infinity.jpg',
      imageCutUrl: '/images/pages/cakes/infinity_cut.jpg',
      type: ProductType.Cake,
      price: 640,
      weight: 1.2,
      diameter: 16,
      persons: '5-6',
    },
    {
      id: Cakes.InfinityLarge,
      fullDescription:
        'Хрустящий миндально-фундучный слой, бисквит муалё с фундуком, абрикосовое конфи, мусс с молочным шоколадом и домашним пралине.',
      shortDescription: 'Насыщенный ореховый вкус с ярким абрикосовым акцентом',
      imageUrl: '/images/pages/cakes/infinity.jpg',
      imageCutUrl: '/images/pages/cakes/infinity_cut.jpg',
      type: ProductType.Cake,
      price: 970,
      weight: 1.6,
      diameter: 21,
      persons: '7-8',
    },
  ],
  [
    {
      id: Cakes.RioSmall,
      fullDescription:
        'Хрустящий миндальный слой с кокосом, кокосовый бисквит дакуаз с лаймом, карамелизированные бананы с ананасом, легкий мусс с маракуйей.',
      shortDescription: 'Идеальная комбинация экзотических фруктов',
      imageUrl: '/images/pages/cakes/rio.jpg',
      imageCutUrl: '/images/pages/cakes/rio_cut.jpg',
      type: ProductType.Cake,
      price: 620,
      weight: 1.2,
      diameter: 16,
      persons: '5-6',
    },
    {
      id: Cakes.RioLarge,
      fullDescription:
        'Хрустящий миндальный слой с кокосом, кокосовый бисквит дакуаз с лаймом, карамелизированные бананы с ананасом, легкий мусс с маракуйей.',
      shortDescription: 'Идеальная комбинация экзотических фруктов',
      imageUrl: '/images/pages/cakes/rio.jpg',
      imageCutUrl: '/images/pages/cakes/rio_cut.jpg',
      type: ProductType.Cake,
      price: 960,
      weight: 1.6,
      diameter: 21,
      persons: '7-8',
    },
  ],
];

// type EnumDictionary<T extends string | symbol | number, U> = {
//   [K in T]: U;
// };

// const products: EnumDictionary<ProductType, string> = {
//   [ProductType.Macaron]: 'test',
// };
