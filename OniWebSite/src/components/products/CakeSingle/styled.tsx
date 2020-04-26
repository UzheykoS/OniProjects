import styled from 'styled-components';
import colors from '@constants/colors';
import { Tooltip, Chip, IconButton, IconButtonProps } from '@material-ui/core';
import {
  ImageWithFallback,
  IImageWithFallbackProps,
} from '@common/ImageWithFallback';
import React from 'react';

export const CakeSingleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid ${colors.primary.grey};
`;

export const ImagesSection = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  flex-direction: column;
  padding: 20px 50px 10px 60px;
`;

interface IImageWrapper extends IImageWithFallbackProps {
  visible: boolean;
}

export const ImageWrapper = styled(({ visible, ...rest }: IImageWrapper) => (
  <ImageWithFallback {...rest} />
))<IImageWrapper>`
  width: 430px;
  height: auto;
  object-fit: contain;
  display: none;

  ${({ visible }) =>
    visible &&
    `
      display: flex;
    `};
`;

export const Title = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 24px;
  color: black;
  margin-bottom: 10px;
`;

export const DescriptionLarge = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${colors.primary.black};
`;

export const DescriptionSmall = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #cccccc;
`;

export const SizeAndQtySelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0;
`;

export const CakeSizeInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin: 5px 0px 20px 0px;
`;

export const QuantityEditor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 50px;
`;

export const IconTextWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #cccccc;
  padding: 0 10px;
`;

export const DiameterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`;

export const PeopleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

export const PriceAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TooltipStyled = styled(Tooltip).attrs({
  classes: {
    popper: 'popper',
  },
})`
  &.popper {
    background-color: ${colors.primary.white};
    color: ${colors.primary.grey};
    /* box-shadow: theme.shadows[1]; */
    font-size: 12px;
  }
`;

export const ChipStyled = styled(Chip).attrs({
  classes: {
    colorSecondary: 'colorSecondary',
    outlinedSecondary: 'outlinedSecondary',
  },
})`
  margin: 0px 5px;
  height: 36px;
  border-radius: 50px;
  width: 90px;

  &.colorSecondary {
    background-color: ${colors.primary.grey};
  }

  &.outlinedSecondary {
    background-color: ${colors.primary.white};
    color: ${colors.primary.black};
  }
`;

export const CarouseNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
`;

export const SliderPagingWrapper = styled.ul`
  display: flex;
  list-style-type: none;
`;

interface ISliderPagingButton {
  active: boolean;
}

export const SliderPagingButton = styled.li<ISliderPagingButton>`
  height: 3px;
  width: 80px;
  cursor: pointer;
  background-color: ${colors.primary.grey};
  ${({ active }) =>
    active &&
    `
    background-color: ${colors.primary.gold};
   `}
`;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImagesWrapper = styled.div`
  display: flex;
`;

export const IconButtonStyled = styled(IconButton).attrs({
  classes: {
    root: 'root',
  },
})<IconButtonProps>`
  border-radius: 3px;
  padding: 0.2rem;
  border: 1px solid ${colors.primary.grey};
  &.root {
    &:hover {
      color: ${colors.primary.white};
      background-color: ${colors.secondary.pink};
    }
  }
`;
