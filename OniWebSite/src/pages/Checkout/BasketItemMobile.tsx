import React from 'react';
import { IBasketItem } from '@hooks/useBasket';
import { Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { useSupportWebp } from '@common/ImageWithFallback/useSupportWebp';
import { FlexColumn, Flex } from '@styles/styled';
import QuantityEditor from '@common/QuantityEditor';
import { useHistory } from 'react-router-dom';
import { getDessertRouteKey } from '@utils/Helper';
import {
  ProductType,
  ICakeInfo,
  cakes,
  Choux,
  Cheesecake,
} from '@constants/products';

interface IBasketItemProps {
  item: IBasketItem;
  onRemoveItemClick: (item: IBasketItem) => void;
  handleIncreaseQuantity: (item: IBasketItem) => void;
  handleDecreaseQuantity: (item: IBasketItem) => void;
}

export function BasketItemMobile({
  item,
  onRemoveItemClick,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}: IBasketItemProps) {
  const { product, quantity } = item;
  const { supports } = useSupportWebp();
  const history = useHistory();

  function editBasketItem() {
    history.push({
      pathname: getDessertRouteKey(item.product) || '/',
      state: { editItem: item },
    });
  }

  function getImageWidth() {
    switch (product.id) {
      case Choux.ChouxMixSmall:
        return 64;
      case Choux.ChouxMixMedium:
        return 120;
      case Choux.ChouxMixLarge:
        return 190;
      case Cheesecake.Gorgonzola:
      case Cheesecake.Lemon:
      case Cheesecake.VanillaCaramel:
        return 120;
      default:
        return 175;
    }
  }

  return (
    <FlexColumn bordered style={{ padding: 15, width: 'auto' }}>
      <Flex justifyBetween>
        <Flex
          direction={'column'}
          style={{ cursor: item.contents?.length ? 'pointer' : 'default' }}
          onClick={item.contents?.length ? editBasketItem : () => {}}
        >
          <img
            style={{ maxWidth: getImageWidth() }}
            src={
              supports ? `${product.imageUrl}.webp` : `${product.imageUrl}.jpg`
            }
          />
          <Typography variant='body1' style={{ paddingLeft: 6 }}>
            <b>{product.type}</b> {product.id}{' '}
            {product.type === ProductType.Cake
              ? `${
                  ([] as ICakeInfo[])
                    .concat(...cakes)
                    .find(c => c.id === product.id)!.weight
                } кг`
              : ''}
          </Typography>
        </Flex>
        <Flex justifyCenter>
          <IconButton
            onClick={() => onRemoveItemClick(item)}
            style={{ marginRight: 15 }}
          >
            <DeleteIcon />
          </IconButton>
        </Flex>
      </Flex>
      <Flex justifyBetween>
        <Flex>
          <QuantityEditor
            isMobile
            quantity={quantity}
            handleIncreaseQuantity={() => handleIncreaseQuantity(item)}
            handleDecreaseQuantity={() => handleDecreaseQuantity(item)}
          />
        </Flex>
        <Flex>
          <Typography variant='h2' style={{ fontSize: 16 }}>
            {`${Number(product.price) * quantity} грн`}
          </Typography>
        </Flex>
      </Flex>
    </FlexColumn>
  );
}
