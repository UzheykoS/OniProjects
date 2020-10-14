import { ProductType } from '@constants/products';
import { IBasketItem } from '@hooks/useBasket';
import { formatMessage } from '@utils/Helper';

describe('Helper', () => {
  it('should format message correctly', () => {
    const items: IBasketItem[] = [
      {
        quantity: 1,
        product: {
          id: 'Pink',
          fullDescription:
            'Фисташковый бисквит дакуаз, клубничное конфи, кремю с лаймом, легкий грейпфрутовый мусс.',
          shortDescription: 'Легкий торт с ярко выраженной кислинкой',
          imageUrl: '/images/pages/cakes/pink',
          imageCutUrl: '/images/pages/cakes/pink_cut',
          type: ProductType.Cake,
          price: 630,
          weight: 1.2,
          diameter: 16,
          persons: '5-6',
        },
      },
      {
        product: {
          id: '6 шт',
          imageUrl: './images/pages/macarons/box-6-rotated',
          type: ProductType.Macaron,
          price: 180,
        },
        quantity: 1,
      },
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
            id: 'Шоколад',
            fullDescription:
              'Начинка на основе бельгийского чёрного шоколада 60% и моносорта из танзании 75%',
            imageUrl: './images/pages/macarons/chocolate',
            imageCutUrl: './images/pages/macarons/chocolate_cut',
            type: ProductType.Macaron,
            price: 30,
          },
          {
            id: 'Лаванда-Черника',
            fullDescription:
              'Начинка на основе сливок, настоянных на цветках лаванды, с черничным конфи',
            imageUrl: './images/pages/macarons/lavender',
            imageCutUrl: './images/pages/macarons/lavender_cut',
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
            id: 'Пармезан-Инжир',
            fullDescription:
              'Начинка на основе сыра пармезан с конфи из натурального пюре инжира',
            imageUrl: './images/pages/macarons/parmegiano',
            imageCutUrl: './images/pages/macarons/parmegiano_cut',
            type: ProductType.Macaron,
            price: 30,
          },
          {
            id: 'Лаванда-Черника',
            fullDescription:
              'Начинка на основе сливок, настоянных на цветках лаванды, с черничным конфи',
            imageUrl: './images/pages/macarons/lavender',
            imageCutUrl: './images/pages/macarons/lavender_cut',
            type: ProductType.Macaron,
            price: 30,
          },
          {
            id: 'Апельсин-Молочный шоколад',
            fullDescription:
              'Начинка на основе молочного шоколада и апельсинового фреша с апельсиновым конфи',
            imageUrl: './images/pages/macarons/orange',
            imageCutUrl: './images/pages/macarons/orange_cut',
            type: ProductType.Macaron,
            price: 30,
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
          id: 'Ваниль-Карамель',
          fullDescription:
            'Основа из миндального песочного печенья, запечённый чизкейк на основе сыра Филадельфия с ванилью, сливочная карамель, карамелизированные орехи пекан',
          imageUrl: './images/pages/cheesecakes/caramel',
          type: ProductType.Cheesecake,
          price: 80,
        },
        quantity: 1,
      },
      {
        quantity: 2,
        product: {
          id: 'Soul XL',
          fullDescription:
            'Лёгкий шоколадный бисквит без муки, кремю с мадагаскарской ванилью, малиновое конфи, мусс c чёрным шоколадом.',
          shortDescription:
            'Для любителей вечной классики и беспроигрышных сочетаний',
          imageUrl: '/images/pages/cakes/soul',
          imageCutUrl: '/images/pages/cakes/soul_cut',
          type: ProductType.Cake,
          price: 960,
          weight: 1.6,
          diameter: 21,
          persons: '7-8',
        },
      },
    ];

    const result = formatMessage(items);
    expect(result).toMatchInlineSnapshot(`
      "Торт:  Pink - 1 
      Макарон: Набор на 6 шт - 1 (Ассорти)
      Макарон: Набор на 6 шт - 1 (Шоколад, Лаванда-Черника, Дор Блю-Груша, Пармезан-Инжир, Лаванда-Черника, Апельсин-Молочный шоколад)
      Шу: Набор на 2 шт - 1 (Ассорти)
      Зефир: Набор на 16 шт - 1 (Ассорти)
      Чизкейк:  Ваниль-Карамель - 1 
      Торт:  Soul XL - 2 
      "
    `);
  });
});
