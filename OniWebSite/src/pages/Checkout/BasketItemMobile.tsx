import React from 'react';
import { IBasketItem } from '@hooks/useBasket';
import { Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSupportWebp } from '@common/ImageWithFallback/useSupportWebp';
import { FlexColumn, Flex } from '@styles/styled';
import QuantityEditor from '@common/QuantityEditor';

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

  return (
    <FlexColumn bordered style={{ padding: 15, width: 'auto' }}>
      <Flex justifyBetween>
        <Flex direction={'column'}>
          <img
            style={{ maxWidth: 175 }}
            src={
              supports ? `${product.imageUrl}.webp` : `${product.imageUrl}.jpg`
            }
          />
          <Typography variant='body1'>
            <b>{product.type}</b> {product.id}
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
            quantity={quantity}
            handleIncreaseQuantity={() => handleIncreaseQuantity(item)}
            handleDecreaseQuantity={() => handleDecreaseQuantity(item)}
          />
        </Flex>
        <Flex>
          <Typography variant='h2' style={{ fontSize: 16 }}>
            {`${Number(product.price) * quantity} грн.`}
          </Typography>
        </Flex>
      </Flex>
    </FlexColumn>
  );
}
