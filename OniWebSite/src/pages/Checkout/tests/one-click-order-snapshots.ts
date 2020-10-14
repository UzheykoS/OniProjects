import { ProductType } from "@constants/products";
import { IBasketItem } from "@hooks/useBasket";

export const oneClickOrderItems: IBasketItem[] = [
    {
      product: {
        id: '6 шт',
        imageUrl: './images/pages/macarons/box-6-rotated',
        type: ProductType.Macaron,
        price: 180,
      },
      quantity: 1,
      contents: [
        {
          id: 'Лайм - Базилик',
          fullDescription:
            'Начинка на основе натурального пюре чёрной смородины со смородиновым конфи',
          imageUrl: './images/pages/macarons/lime',
          imageCutUrl: './images/pages/macarons/lime_cut',
          type: ProductType.Macaron,
          price: 30,
        },
        {
          id: 'Лайм - Базилик',
          fullDescription:
            'Начинка на основе натурального пюре чёрной смородины со смородиновым конфи',
          imageUrl: './images/pages/macarons/lime',
          imageCutUrl: './images/pages/macarons/lime_cut',
          type: ProductType.Macaron,
          price: 30,
        },
        {
          id: 'Грейпфрут-Роза',
          fullDescription:
            'Начинка на основе грейпфрутового фреша с добавлением лепестков чайной розы и грейпфрутовым конфи',
          imageUrl: './images/pages/macarons/grapefruit',
          imageCutUrl: './images/pages/macarons/grapefruit_cut',
          type: ProductType.Macaron,
          price: 30,
        },
        {
          id: 'Дор Блю-Груша',
          fullDescription:
            'Начинка на основе сыра дор блю с конфи из натурального пюре груши',
          imageUrl: './images/pages/macarons/dor_blue',
          imageCutUrl: './images/pages/macarons/dor_blue_cut',
          type: ProductType.Macaron,
          price: 30,
        },
        {
          id: 'Банан-Юзу',
          fullDescription:
            'Начинка на основе натуральных пюре банана и юзу с банановым конфи',
          imageUrl: './images/pages/macarons/banana',
          imageCutUrl: './images/pages/macarons/banana_cut',
          type: ProductType.Macaron,
          price: 30,
        },
        {
          id: 'Фисташка',
          fullDescription:
            'Начинка на основе натуральной 100% фисташковой пасты',
          imageUrl: './images/pages/macarons/pistachio',
          imageCutUrl: './images/pages/macarons/pistachio_cut',
          type: ProductType.Macaron,
          price: 30,
        },
      ],
    },
    {
      product: {
        id: '12 шт',
        imageUrl: './images/pages/macarons/box-12-rotated',
        type: ProductType.Macaron,
        price: 360,
      },
      quantity: 1,
    },
    {
      product: {
        id: '4 шт',
        imageUrl: './images/pages/choux/box-4',
        type: ProductType.Choux,
        price: 360,
      },
      quantity: 1,
      contents: [
        {
          id: 'Лимон-Клубника',
          fullDescription:
            'Крем с лимонным фрешем в сочетании с конфи из натурального пюре клубники',
          imageUrl: './images/pages/choux/lemon',
          imageCutUrl: './images/pages/choux/lemon_cut',
          type: ProductType.Choux,
          price: 45,
        },
        {
          id: 'Фундук-Абрикос',
          fullDescription:
            'Крем с молочным шоколадом и фундуком в сочетании с конфи из натурального пюре абрикоса',
          imageUrl: './images/pages/choux/apricot',
          imageCutUrl: './images/pages/choux/apricot_cut',
          type: ProductType.Choux,
          price: 45,
        },
        {
          id: 'Ваниль-Персик',
          fullDescription:
            'Крем с ванилью и Маскарпоне в сочетании с конфи из натурального пюре персика',
          imageUrl: './images/pages/choux/vanilla',
          imageCutUrl: './images/pages/choux/vanilla_cut',
          type: ProductType.Choux,
          price: 45,
        },
        {
          id: 'Солёная карамель',
          fullDescription:
            'Карамельный крем с Маскарпоне и мягкая солёная карамель',
          imageUrl: './images/pages/choux/caramel',
          imageCutUrl: './images/pages/choux/caramel_cut',
          type: ProductType.Choux,
          price: 45,
        },
      ],
    },
    {
      product: {
        id: '2 шт',
        imageUrl: './images/pages/choux/box-2',
        type: ProductType.Choux,
        price: 180,
      },
      quantity: 1,
    },
    {
      product: {
        id: '16 шт',
        imageUrl: './images/pages/zephyr/box-16',
        type: ProductType.Zephyr,
        price: 256,
      },
      quantity: 1,
    },
    {
      product: {
        id: '8 шт',
        imageUrl: './images/pages/zephyr/box-8',
        type: ProductType.Zephyr,
        price: 128,
      },
      quantity: 1,
      contents: [
        {
          id: 'Смородина',
          fullDescription:
            'Сделан на основе натурального пюре чёрной смородины',
          imageUrl: './images/pages/zephyr/currant',
          type: ProductType.Zephyr,
          price: 16,
        },
        {
          id: 'Клубника-Клюква',
          fullDescription:
            'Сделан на основе натурального пюре клубники и клюквы',
          imageUrl: './images/pages/zephyr/strawberry',
          type: ProductType.Zephyr,
          price: 16,
        },
        {
          id: 'Клубника-Клюква',
          fullDescription:
            'Сделан на основе натурального пюре клубники и клюквы',
          imageUrl: './images/pages/zephyr/strawberry',
          type: ProductType.Zephyr,
          price: 16,
        },
        {
          id: 'Клубника-Клюква',
          fullDescription:
            'Сделан на основе натурального пюре клубники и клюквы',
          imageUrl: './images/pages/zephyr/strawberry',
          type: ProductType.Zephyr,
          price: 16,
        },
        {
          id: 'Абрикос-Маракуйя',
          fullDescription:
            'Сделан на основе натурального пюре абрикоса и маракуйи',
          imageUrl: './images/pages/zephyr/apricot',
          type: ProductType.Zephyr,
          price: 16,
        },
        {
          id: 'Клубника-Клюква',
          fullDescription:
            'Сделан на основе натурального пюре клубники и клюквы',
          imageUrl: './images/pages/zephyr/strawberry',
          type: ProductType.Zephyr,
          price: 16,
        },
        {
          id: 'Абрикос-Маракуйя',
          fullDescription:
            'Сделан на основе натурального пюре абрикоса и маракуйи',
          imageUrl: './images/pages/zephyr/apricot',
          type: ProductType.Zephyr,
          price: 16,
        },
        {
          id: 'Смородина',
          fullDescription:
            'Сделан на основе натурального пюре чёрной смородины',
          imageUrl: './images/pages/zephyr/currant',
          type: ProductType.Zephyr,
          price: 16,
        },
      ],
    },
    {
      product: {
        id: 'Горгонзола-Айва',
        fullDescription:
          'Основа из миндального песочного печенья, запечённый чизкейк с сыром Горгонзола, конфи из натурального пюре айвы, запечённые кусочки айвы',
        imageUrl: './images/pages/cheesecakes/gorgonzola',
        type: ProductType.Cheesecake,
        price: 80,
      },
      quantity: 1,
    },
    {
      quantity: 1,
      product: {
        id: 'Soul',
        fullDescription:
          'Лёгкий шоколадный бисквит без муки, кремю с мадагаскарской ванилью, малиновое конфи, мусс c чёрным шоколадом.',
        shortDescription:
          'Для любителей вечной классики и беспроигрышных сочетаний',
        imageUrl: '/images/pages/cakes/soul',
        imageCutUrl: '/images/pages/cakes/soul_cut',
        type: ProductType.Cake,
        price: 620,
        weight: 1.2,
        diameter: 16,
        persons: '5-6',
      },
    },
    {
      quantity: 2,
      product: {
        id: 'Carrot Cake XL',
        fullDescription:
          'Хрустящий миндальный слой с корицей, морковный бисквит с грецким орехом и апельсином, конфи из моркови и мандарина, мусс с филадельфией и мягким козьим сыром.',
        shortDescription:
          'Морковный торт, ломающий гастрономические стереотипы',
        imageUrl: '/images/pages/cakes/carrot',
        imageCutUrl: '/images/pages/cakes/carrot_cut',
        type: ProductType.Cake,
        price: 980,
        weight: 1.6,
        diameter: 21,
        persons: '7-8',
      },
    },
  ];