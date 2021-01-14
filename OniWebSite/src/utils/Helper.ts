import {
  IProduct,
  macarons,
  choux,
  zephyr,
  ProductType,
} from '@constants/products';
import { routes, Pages } from '@constants/routes';
import { ConstructoreMode } from '@components/Constructor/Constructor';
import { IBasketItem } from '@hooks/useBasket';

export function loadMainPageImage(url: string) {
  return new Promise(resolve => {
    let img = new Image();
    img.onload = () => {
      resolve(true);
    };
    img.src = url;

    //ie fix
    // setTimeout(() => {
    //     if (img.complete) {
    //         resolve();
    //     }
    // }, 500);
  });
}

export function preloadImages(urls: string[]) {
  return new Promise(resolve => {
    urls.forEach(url => {
      let img = new Image();
      img.src = url;
    });
    resolve(true);
  });
}

export const SEPARATORS = {
  SPACE_DASH_SPACE: '\u2007\u2014\u2007',
  DASH: '\u2014',
  RIGHT_SINGLE_QUOTE: '\u2019',
};

export const px2vw = (size: number, width = 1440) =>
  `${(size / width) * 100}vw`;

export function getDessertRouteKey(product: IProduct) {
  const productRoutes = routes[Pages.Products]!.nestedRoutes!;
  return productRoutes[product.type]?.path;
}

export function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = (Object.keys(anEnum)
    .map(n => Number.parseInt(n))
    .filter(n => !Number.isNaN(n)) as unknown) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  const randomEnumValue = enumValues[randomIndex];
  return randomEnumValue;
}

export function getRandomDessert(mode: ConstructoreMode) {
  switch (mode) {
    case ConstructoreMode.ChouxSmall:
    case ConstructoreMode.ChouxMedium:
      return choux[Math.floor(Math.random() * choux.length)];
    case ConstructoreMode.ZephyrSmall:
    case ConstructoreMode.ZephyrMedium:
      return zephyr[Math.floor(Math.random() * zephyr.length)];
    case ConstructoreMode.MacaronSmall:
    case ConstructoreMode.MacaronMedium:
    case ConstructoreMode.MacaronLarge:
    default:
      return macarons[Math.floor(Math.random() * macarons.length)];
  }
}

export function formatMessage(items: IBasketItem[]) {
  const itemsMessage = items.reduce((acc, item) => {
    acc += `${item.product.type}: ${
      [ProductType.Macaron, ProductType.Zephyr, ProductType.Choux].indexOf(
        item.product.type
      ) > -1
        ? 'Набор на'
        : ''
    } ${item.product.id} - ${item.quantity} шт. ${
      item.contents?.length
        ? `(${item.contents.reduce((contentsAcc, contentItem, index) => {
            contentsAcc +=
              index === item.contents!.length - 1
                ? `${contentItem.id}`
                : `${contentItem.id}, `;
            return contentsAcc;
          }, '')})`
        : [ProductType.Macaron, ProductType.Zephyr, ProductType.Choux].indexOf(
            item.product.type
          ) > -1
        ? '(Ассорти)'
        : ''
    }\n`;
    return acc;
  }, '');
  return itemsMessage;
}
