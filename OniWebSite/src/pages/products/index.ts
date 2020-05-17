import { IBasketItem } from '@hooks/useBasket';
import { IProduct, Macarons, Choux, Zephyr } from '@constants/products';
import { ConstructoreMode } from '@components/Constructor/Constructor';

export interface ILocationStateProps {
  editItem?: IBasketItem;
  productItem?: IProduct;
}

export function getConstructorMode(
  product: IProduct,
  defaultMode: ConstructoreMode
) {
  switch (product.id) {
    case Macarons.MacaronsMixSmall:
      return ConstructoreMode.MacaronSmall;
    case Macarons.MacaronsMixMedium:
      return ConstructoreMode.MacaronMedium;
    case Macarons.MacaronsMixLarge:
      return ConstructoreMode.MacaronLarge;
    case Choux.ChouxMixSmall:
      return ConstructoreMode.ChouxSmall;
    case Choux.ChouxMixLarge:
      return ConstructoreMode.ChouxMedium;
    case Zephyr.ZephyrMixSmall:
      return ConstructoreMode.ZephyrSmall;
    case Zephyr.ZephyrMixLarge:
      return ConstructoreMode.ZephyrMedium;
    default:
      return defaultMode;
  }
}
