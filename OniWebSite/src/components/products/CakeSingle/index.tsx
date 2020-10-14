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
  PriceAndButtonWrapper,
  ChipStyled,
  DiameterWrapper,
  PeopleWrapper,
  IconTextWrapper,
  SliderPagingButton,
  SliderPagingWrapper,
  CarouseNavBar,
  IconButtonStyled,
  ImageWrapperMobile,
  SliderPagingButtonMobile,
} from './styled';
import { ICakeInfo } from '@constants/products';
import { Typography, useMediaQuery } from '@material-ui/core';
import DiameterIcon from '@icons/diameter-icon.svg';
import PeopleIcon from '@icons/people-icon.svg';
import InfoIcon from '@icons/info-icon.svg';
import ExtendIcon from '@icons/extend-icon.svg';
import { Button } from '@common/Button';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@common/IconButton';
import FullScreenImageDialog from './FullScreenImageDialog';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { BREAKPOINT } from '@constants';
import QuantityEditor from '@common/QuantityEditor';
import { Flex } from '@styles/styled';
import { ImageWithFallback } from '@common/ImageWithFallback';
import Slider from 'react-slick';
import { TooltipStyled } from '@common/Tooltip/styled';

export interface CakeSubmitInfo {
  cake: ICakeInfo;
  quantity: number;
}

interface IProps {
  cakePair: [ICakeInfo, ICakeInfo];
  onClick: (cake: CakeSubmitInfo) => void;
}

enum CakeSize {
  Small,
  Large,
}

export function CakeSingle({ cakePair, onClick }: IProps) {
  const {
    id,
    shortDescription,
    fullDescription,
    imageUrl,
    imageCutUrl,
    weight,
    diameter,
    persons,
    price,
  } = cakePair[0];

  const {
    weight: weightLarge,
    diameter: diameterLarge,
    persons: personsLarge,
    price: priceLarge,
  } = cakePair[1];

  const [selectedSize, setSelectedSize] = useState(CakeSize.Small);
  const [quantity, setQuantity] = useState(1);
  const [previewImageUrl, setPreviewImageUrl] = useState('');
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const handleAddClick = () => {
    onClick({
      cake: selectedSize === CakeSize.Small ? cakePair[0] : cakePair[1],
      quantity,
    });
  };

  const getPrice = () => {
    return `${
      selectedSize === CakeSize.Small
        ? price! * quantity
        : priceLarge! * quantity
    } грн `;
  };

  const imageSection = (
    <ImagesSection>
      <IconButtonStyled
        onClick={() => setActiveIndex(0)}
        disabled={activeIndex === 0}
      >
        <KeyboardArrowLeft />
      </IconButtonStyled>
      <Flex direction='column' style={{ width: '100%' }}>
        <Flex>
          <ImageWrapper src={imageUrl} visible={activeIndex === 0} />
          <ImageWrapper src={imageCutUrl} visible={activeIndex === 1} />
        </Flex>
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
              setPreviewImageUrl(activeIndex === 0 ? imageUrl : imageCutUrl!)
            }
          >
            <ExtendIcon />
          </IconButton>
        </CarouseNavBar>
      </Flex>
      <IconButtonStyled
        onClick={() => setActiveIndex(1)}
        disabled={activeIndex === 1}
      >
        <KeyboardArrowRight />
      </IconButtonStyled>
    </ImagesSection>
  );

  const imageSectionMobile = (
    <ImagesSection>
      <Flex direction='column' style={{ width: '100%' }}>
        <Slider
          {...{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            customPaging: () => {
              return <SliderPagingButtonMobile />;
            },
          }}
        >
          <ImageWrapperMobile>
            <ImageWithFallback src={imageUrl} />
          </ImageWrapperMobile>
          <ImageWrapperMobile>
            <ImageWithFallback isSecondary src={imageCutUrl} />
          </ImageWrapperMobile>
        </Slider>
      </Flex>
    </ImagesSection>
  );

  return (
    <CakeSingleWrapper>
      {isMobile ? imageSectionMobile : imageSection}
      <InfoSection>
        <Title>{id}</Title>
        <DescriptionLarge>{fullDescription}</DescriptionLarge>
        <DescriptionSmall>{shortDescription}</DescriptionSmall>
        <SizeAndQtySelector>
          <ChipStyled
            clickable
            color='secondary'
            label={`${weight} кг`}
            variant={selectedSize === CakeSize.Small ? 'outlined' : 'default'}
            onClick={() => setSelectedSize(CakeSize.Small)}
          />
          <ChipStyled
            clickable
            color='secondary'
            label={`${weightLarge} кг`}
            variant={selectedSize === CakeSize.Large ? 'outlined' : 'default'}
            style={{ marginRight: 50 }}
            onClick={() => setSelectedSize(CakeSize.Large)}
          />
          <QuantityEditor
            quantity={quantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
          />
        </SizeAndQtySelector>
        <CakeSizeInfo>
          {selectedSize === CakeSize.Small ? (
            <>
              <DiameterWrapper>
                <DiameterIcon />
                <IconTextWrapper>{`${diameter} см`}</IconTextWrapper>
              </DiameterWrapper>
              <PeopleWrapper>
                <PeopleIcon />
                <IconTextWrapper>{`на ${persons} персон`}</IconTextWrapper>
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
            placement={isMobile ? 'top' : 'right'}
            enterTouchDelay={0}
            leaveTouchDelay={0}
          >
            <IconButton disableFocusRipple disableRipple size='small'>
              <InfoIcon />
            </IconButton>
          </TooltipStyled>
        </CakeSizeInfo>
        <PriceAndButtonWrapper>
          <Typography
            variant={'h2'}
            style={{
              marginRight: isMobile ? '20px' : '40px',
              fontSize: isMobile ? 16 : 24,
              whiteSpace: 'nowrap',
            }}
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
        title={id}
        closeModal={() => setPreviewImageUrl('')}
      />
    </CakeSingleWrapper>
  );
}
