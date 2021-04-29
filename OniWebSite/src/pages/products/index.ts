import { IBasketItem } from '@hooks/useBasket';
import { IProduct, Macarons, Choux, Zephyr } from '@constants/products';
import {
  ConstructoreMode,
  IConstructoreMode,
} from '@components/Constructor/Constructor';

export interface ILocationStateProps {
  editItem?: IBasketItem;
  productItem?: IProduct;
}

export function getConstructorMode(
  product: IProduct,
  defaultMode: IConstructoreMode
): IConstructoreMode {
  switch (product.id) {
    case Macarons.MacaronsMixSmall:
      return {
        type: ConstructoreMode.MacaronSmall,
        count: 6,
      };
    case Macarons.MacaronsMixMedium:
      return {
        type: ConstructoreMode.MacaronMedium,
        count: 12,
      };
    case Macarons.MacaronsMixLarge:
      return {
        type: ConstructoreMode.MacaronLarge,
        count: 24,
      };
    case Choux.ChouxMixSmall:
      return {
        type: ConstructoreMode.ChouxSmall,
        count: 2,
      };
    case Choux.ChouxMixMedium:
      return {
        type: ConstructoreMode.ChouxMedium,
        count: 4,
      };
    case Choux.ChouxMixLarge:
      return {
        type: ConstructoreMode.ChouxLarge,
        count: 6,
      };
    case Zephyr.ZephyrMixSmall:
      return {
        type: ConstructoreMode.ZephyrSmall,
        count: 8,
      };
    case Zephyr.ZephyrMixLarge:
      return {
        type: ConstructoreMode.ZephyrMedium,
        count: 16,
      };
    default:
      return defaultMode;
  }
}
