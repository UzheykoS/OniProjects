import React, { useState } from 'react';
import {
  CakeSingleWrapper,
  ImageWrapper,
  Title,
  DescriptionLarge,
  ImagesSection,
  InfoSection,
  DescriptionSmall,
  SizeAndQtySelector,
  CakeSizeInfo,
  QuantityEditor,
  PriceAndButtonWrapper,
  TooltipStyled,
  ChipStyled,
  DiameterWrapper,
  PeopleWrapper,
  IconTextWrapper,
  SliderPagingButton,
  CarouselWrapper,
  ImagesWrapper,
  SliderPagingWrapper,
  CarouseNavBar,
} from './styled';
import { ICakeInfo } from '@constants/products';
import { Typography } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DiameterIcon from '@icons/diameter-icon.svg';
import PeopleIcon from '@icons/people-icon.svg';
import InfoIcon from '@icons/info-icon.svg';
import ExtendIcon from '@icons/extend-icon.svg';
import { Button } from '@common/Button';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@common/IconButton';
import colors from '@constants/colors';
import FullScreenImageDialog from './FullScreenImageDialog';

export interface CakeSubmitInfo {
  size: CakeSize;
  quantity: number;
}

interface IProps extends ICakeInfo {
  onClick: (cake: CakeSubmitInfo) => void;
}

enum CakeSize {
  Small,
  Large,
}

export function CakeSingle({
  name,
  shortDescription,
  fullDescription,
  imageUrl,
  imageCutUrl,
  weightSmall,
  diameterSmall,
  personsSmall,
  priceSmall,
  weightLarge,
  diameterLarge,
  personsLarge,
  priceLarge,
  onClick,
}: IProps) {
  const [selectedSize, setSelectedSize] = useState(CakeSize.Small);
  const [quantity, setQuantity] = useState(1);
  const [previewImageUrl, setPreviewImageUrl] = useState('');

  const [activeIndex, setActiveIndex] = useState(0);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const handleAddClick = () => {
    onClick({
      size: selectedSize,
      quantity,
    });
  };

  const getPrice = () => {
    return `${
      selectedSize === CakeSize.Small
        ? priceSmall * quantity
        : priceLarge * quantity
    } грн `;
  };

  return (
    <CakeSingleWrapper>
      <ImagesSection>
        <CarouselWrapper>
          <ImagesWrapper>
            <ImageWrapper src={imageUrl} visible={activeIndex === 0} />
            <ImageWrapper src={imageCutUrl} visible={activeIndex === 1} />
          </ImagesWrapper>
          <CarouseNavBar>
            <SliderPagingWrapper>
              <SliderPagingButton
                onClick={() => setActiveIndex(0)}
                active={activeIndex === 0}
              />
              <SliderPagingButton
                onClick={() => setActiveIndex(1)}
                active={activeIndex === 1}
              />
            </SliderPagingWrapper>
            <IconButton
              disableFocusRipple
              disableRipple
              size='small'
              onClick={() =>
                setPreviewImageUrl(activeIndex === 0 ? imageUrl : imageCutUrl)
              }
            >
              <ExtendIcon />
            </IconButton>
          </CarouseNavBar>
        </CarouselWrapper>
      </ImagesSection>
      <InfoSection>
        <Title>{name}</Title>
        <DescriptionLarge>{fullDescription}</DescriptionLarge>
        <DescriptionSmall>{shortDescription}</DescriptionSmall>
        <SizeAndQtySelector>
          <ChipStyled
            clickable
            color='secondary'
            label={`${weightSmall} кг`}
            variant={selectedSize === CakeSize.Small ? 'outlined' : 'default'}
            onClick={() => setSelectedSize(CakeSize.Small)}
          />
          <ChipStyled
            clickable
            color='secondary'
            label={`${weightLarge} кг`}
            variant={selectedSize === CakeSize.Large ? 'outlined' : 'default'}
            onClick={() => setSelectedSize(CakeSize.Large)}
          />
          <QuantityEditor>
            <IconButton
              onClick={handleDecreaseQuantity}
              size='small'
              style={{
                backgroundColor: colors.primary.grey,
              }}
            >
              <RemoveIcon style={{ fontSize: 28 }} />
            </IconButton>
            <Typography variant='body1' style={{ margin: '0px 20px' }}>
              {quantity}
            </Typography>
            <IconButton
              size='small'
              onClick={handleIncreaseQuantity}
              style={{
                backgroundColor: colors.primary.gold,
                color: colors.primary.white,
              }}
            >
              <AddIcon style={{ fontSize: 28 }} />
            </IconButton>
          </QuantityEditor>
        </SizeAndQtySelector>
        <CakeSizeInfo>
          {selectedSize === CakeSize.Small ? (
            <>
              <DiameterWrapper>
                <DiameterIcon />
                <IconTextWrapper>{`${diameterSmall} см`}</IconTextWrapper>
              </DiameterWrapper>
              <PeopleWrapper>
                <PeopleIcon />
                <IconTextWrapper>{`на ${personsSmall} персон`}</IconTextWrapper>
              </PeopleWrapper>
            </>
          ) : (
            <>
              <DiameterWrapper>
                <DiameterIcon />
                <IconTextWrapper>{`${diameterLarge} см`}</IconTextWrapper>
              </DiameterWrapper>
              <PeopleWrapper>
                <PeopleIcon />
                <IconTextWrapper>{`на ${personsLarge} персон`}</IconTextWrapper>
              </PeopleWrapper>
            </>
          )}
          <TooltipStyled
            TransitionComponent={Zoom}
            title='Исходя из порции 250 гр на человека'
            arrow
            placement={'right'}
          >
            <IconButton disableFocusRipple disableRipple size='small'>
              <InfoIcon />
            </IconButton>
          </TooltipStyled>
        </CakeSizeInfo>
        <PriceAndButtonWrapper>
          <Typography
            variant={'h2'}
            style={{ marginRight: '40px', fontSize: 24 }}
          >
            {getPrice()}
          </Typography>
          <Button rounded onClick={handleAddClick}>
            Добавить
          </Button>
        </PriceAndButtonWrapper>
      </InfoSection>
      <FullScreenImageDialog
        previewImageUrl={previewImageUrl}
        closeModal={() => setPreviewImageUrl('')}
      />
    </CakeSingleWrapper>
  );
}
