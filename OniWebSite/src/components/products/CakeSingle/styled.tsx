import styled from 'styled-components';
import colors from '@constants/colors';
import { Chip, IconButton, IconButtonProps } from '@material-ui/core';
import {
  ImageWithFallback,
  IImageWithFallbackProps,
} from '@common/ImageWithFallback';
import React from 'react';
import { BREAKPOINT } from '@constants';

export const CakeSingleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid ${colors.primary.grey};
  border-bottom: none;
  @media (max-width: ${BREAKPOINT}) {
    flex-direction: column;
  }
  &:last-child {
    border-bottom: 1px solid ${colors.primary.grey};
  }
`;

export const ImagesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${BREAKPOINT}) {
    padding-bottom: 1.5rem;
  }

  .slick-dots {
    height: auto;
    margin: 0px;
    li {
      height: 3px;
      width: 80px;
      background-color: ${colors.primary.grey};
      &.slick-active {
        div {
          background-color: ${colors.primary.gold};
        }
      }
    }
  }
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 50px 10px 60px;
  @media (max-width: ${BREAKPOINT}) {
    padding: 5px;
  }
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

  @media (max-width: ${BREAKPOINT}) {
    max-width: 250px;
  }

  ${({ visible }) =>
    visible &&
    `
      display: flex;
    `};
`;

export const ImageWrapperMobile = styled.div`
  img {
    width: 430px;
    height: auto;
    object-fit: contain;

    @media (max-width: ${BREAKPOINT}) {
      max-width: 250px;
    }
  }
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
  margin-bottom: 10px;
`;

export const DescriptionSmall = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #cccccc;
  padding-top: 5px;
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

export const IconTextWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: rgb(30, 47, 66);
  opacity: 0.6;
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
  justify-content: space-between;
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
  justify-content: center;
  width: 100%;
  align-items: baseline;
`;

export const SliderPagingWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
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

export const SliderPagingButtonMobile = styled.div`
  height: 3px;
  width: 80px;
  cursor: pointer;
  background-color: ${colors.primary.grey};
`;

export const IconButtonStyled = styled(IconButton).attrs({
  classes: {
    root: 'root',
  },
})<IconButtonProps>`
  border-radius: 3px;
  padding: 0.25rem;
  margin: 0.25rem;
  border: 1px solid ${colors.primary.grey};
  &.root {
    &:hover {
      color: ${colors.primary.white};
      background-color: ${colors.secondary.pink};
    }
  }
`;
