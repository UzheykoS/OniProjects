import React, { useEffect } from 'react';
import { CakeSingle, CakeSubmitInfo } from '@components/products/CakeSingle';
import { useLoading } from '@hooks/useLoading';
import { cakes } from '@constants/products';
import { preloadImages } from '@utils/Helper';
import { useBasket } from '@hooks/useBasket';
import { CakesWrapper, CakesInfo, CakesMenuWrapper } from './styled';
import { FlexRow, FlexColumn } from '@styles/styled';
import { Typography } from '@material-ui/core';

export function Cakes() {
  const { showLoading, closeLoading } = useLoading();
  const { addToBasket } = useBasket();

  const loadImages = async () => {
    const imagesArray = new Array<string>();
    cakes.forEach(cakePair => {
      cakePair.forEach(cake => {
        imagesArray.push(cake.imageUrl);
        imagesArray.push(cake.imageCutUrl!);
      });
    });
    await preloadImages(imagesArray);

    closeLoading();
  };

  useEffect(() => {
    showLoading();
    loadImages();
  }, []);

  const handleCakeAdd = (info: CakeSubmitInfo) => {
    addToBasket({
      quantity: info.quantity,
      product: info.cake,
    });
  };

  return (
    <CakesWrapper>
      <FlexRow>
        <FlexColumn style={{ flexGrow: 1, flexShrink: 2 }}>
          <Typography
            variant='h3'
            style={{ whiteSpace: 'nowrap', marginRight: '100px' }}
          >
            НАША ПРОДУКЦИЯ
          </Typography>
        </FlexColumn>
        <FlexColumn style={{ flexGrow: 2 }}>
          <CakesInfo>
            <Typography
              variant='body1'
              style={{ lineHeight: '24px', margin: '0 120px 20px 80px' }}
            >
              Торт – это маленькое пирожное, которое состоит из двух миндальных
              половинок, пропитанных начинкой. Яркий вкус, нежная текстура
              внутри и хрустящая корочка снаружи.
            </Typography>
          </CakesInfo>
        </FlexColumn>
      </FlexRow>
      <CakesMenuWrapper>
        <CakeSingle cakePair={cakes[0]} onClick={handleCakeAdd} />
        <CakeSingle cakePair={cakes[1]} onClick={handleCakeAdd} />
        <CakeSingle cakePair={cakes[2]} onClick={handleCakeAdd} />
        <CakeSingle cakePair={cakes[3]} onClick={handleCakeAdd} />
        <CakeSingle cakePair={cakes[4]} onClick={handleCakeAdd} />
      </CakesMenuWrapper>
    </CakesWrapper>
  );
}
