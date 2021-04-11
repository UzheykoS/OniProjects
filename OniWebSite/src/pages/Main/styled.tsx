import styled from 'styled-components';
import colors from '@constants/colors';
import { IconButton, IconButtonProps } from '@material-ui/core';
import React from 'react';
import { FlexColumn } from '@styles/styled';

export const MainContainer = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const BannerTextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 1000px;
  justify-content: start;
  z-index: 10;
`;

export const BannerTextContentMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem 2rem 3rem;
  justify-content: center;
  z-index: 10;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0px;
  justify-content: center;
`;

export const InfoSectionMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  justify-content: center;
`;

export const AboutTextSection = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  padding-left: 10rem;
  flex-basis: 30rem;
`;

export const AboutTextSectionMobile = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const AboutImageSection = styled.div`
  display: flex;
  padding-top: 3.5rem;
  img {
    height: auto;
  }
`;

export const AboutImageSectionMobile = styled.div`
  display: flex;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ImagesContainer = styled.div`
  margin-bottom: 70px;
  width: 100%;
  height: 680px;
  object-fit: cover;
  display: flex;
  justify-content: center;
`;

export const ImagesContainerMobile = styled.div`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

interface IBackgroundImage {
  isMobile?: boolean;
}

export const BackgroundImage = styled.img<IBackgroundImage>`
  clip-path: url('#banner-wrapper_svg__banner-shape');
  position: absolute;
  z-index: 0;
  align-items: flex-start;
  ${({ isMobile }) =>
    `
      width: ${isMobile ? 'auto' : '100%'};
      height: ${isMobile ? 'inherit' : 'auto'};
      ${
        isMobile
          ? `
          object-fit: cover;
          max-width: 100%;
          `
          : `
        top: -87px;
        left: 0;
        `
      }
   `};
`;

export const InstagramContainer = styled.div<IBackgroundImage>`
  ${({ isMobile }) =>
    isMobile &&
    `
    padding: 2rem 2rem 3rem 2rem;
    background-color: ${colors.primary.grey};
   `};

  #instafeed {
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    ${({ isMobile }) =>
      `
      padding: ${isMobile ? '20px 0;' : '50px 0;'}
   `};

    justify-content: center;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: block;
        object-fit: cover;
        ${({ isMobile }) =>
          `
          width: ${isMobile ? '145px;' : '300px;'}
          height: ${isMobile ? '145px;' : '300px;'}
          padding:${isMobile ? '5px;' : '10px;'}
        `};
      }
    }
  }
`;

export const InstagramDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DescriptionLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #ff3e69;
  text-transform: uppercase;
  text-decoration: none;
`;

export const TopSalesHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TopSalesProducts = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 0;
  position: relative;
  .slick-slider {
    width: 100%;
  }
  .slick-list {
    border-right: 1px solid #eef2f0;
  }
`;

export const TopSalesProductsMobile = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 2rem 0;

  .slick-slider {
    width: 100%;
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

interface IIconButtonStyled extends IconButtonProps {
  left?: boolean;
  isMobile?: boolean;
}

export const IconButtonStyled = styled(
  ({ left, ...rest }: IIconButtonStyled) => <IconButton {...rest} />
).attrs({
  classes: {
    root: 'root',
  },
})<IIconButtonStyled>`
  border-radius: 3px;
  border: 1px solid ${colors.primary.grey};

  ${({ left, isMobile }) =>
    isMobile === false &&
    `
      left: ${left ? '-6rem' : '62rem'};
    `};

  ${({ isMobile }) =>
    isMobile === false &&
    `
    position: absolute;
    top: 10rem;
    `};

  &.root {
    &:hover {
      color: ${colors.primary.white};
      background-color: ${colors.secondary.pink};
    }
  }
`;

export const FlexColumnStyled = styled(FlexColumn as any)`
  margin-top: 1px;
`;
