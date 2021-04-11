import React from 'react';
import { BasketItemWrapper, BasketItemWrapperCell } from './styled';
import { IBasketItem } from '@hooks/useBasket';
import { Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { useSupportWebp } from '@common/ImageWithFallback/useSupportWebp';
import QuantityEditor from '@common/QuantityEditor';
import { useHistory } from 'react-router-dom';
import { getDessertRouteKey } from '@utils/Helper';
import {
  ProductType,
  ICakeInfo,
  Choux,
  Zephyr,
  Macarons,
  cakes,
} from '@constants/products';

interface IBasketItemProps {
  item: IBasketItem;
  onRemoveItemClick: (item: IBasketItem) => void;
  handleIncreaseQuantity: (item: IBasketItem) => void;
  handleDecreaseQuantity: (item: IBasketItem) => void;
}

export function BasketItem({
  item,
  onRemoveItemClick,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}: IBasketItemProps) {
  const { product, quantity, contents } = item;
  const history = useHistory();
  const { supports } = useSupportWebp();

  function editBasketItem() {
    history.push({
      pathname: getDessertRouteKey(item.product) || '/',
      state: { editItem: item },
    });
  }

  function getImageWidth() {
    switch (product.id) {
      case Choux.ChouxMixSmall:
        return 120;
      case Zephyr.ZephyrMixSmall:
        return 112;
      case Macarons.MacaronsMixSmall:
      case Macarons.MacaronsMixMedium:
        return 150;
      default:
        return;
    }
  }

  return (
    <BasketItemWrapper>
      <BasketItemWrapperCell
        width={30}
        imageWidth={getImageWidth()}
        style={{ cursor: contents?.length ? 'pointer' : 'default' }}
        onClick={contents?.length ? editBasketItem : () => {}}
      >
        <img
          src={
            supports ? `${product.imageUrl}.webp` : `${product.imageUrl}.jpg`
          }
        />
      </BasketItemWrapperCell>
      <BasketItemWrapperCell width={25}>
        <Typography variant='body1'>
          <b>{product.type}</b> {product.id.trimRight()}{' '}
          {product.type === ProductType.Cake
            ? `${
                ([] as ICakeInfo[])
                  .concat(...cakes)
                  .find(c => c.id === product.id)!.weight
              } кг`
            : ''}
        </Typography>
      </BasketItemWrapperCell>
      <BasketItemWrapperCell width={25}>
        <QuantityEditor
          quantity={quantity}
          isMobile={false}
          handleIncreaseQuantity={() => handleIncreaseQuantity(item)}
          handleDecreaseQuantity={() => handleDecreaseQuantity(item)}
        />
      </BasketItemWrapperCell>
      <BasketItemWrapperCell width={20}>
        <Typography variant='body1'>
          {`${Number(product.price) * quantity} грн`}
        </Typography>
        <IconButton onClick={() => onRemoveItemClick(item)}>
          <DeleteIcon />
        </IconButton>
      </BasketItemWrapperCell>
    </BasketItemWrapper>
  );
}
