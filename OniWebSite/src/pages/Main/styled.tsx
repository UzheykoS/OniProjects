import styled from 'styled-components';
import colors from '@constants/colors';
import { IconButton, IconButtonProps } from '@material-ui/core';
import React from 'react';

export const MainContainer = styled.div`
  display: flex;
  max-width: 1000px;
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

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0px;
  justify-content: center;
`;

export const AboutContentSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AboutTextSection = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  padding-left: 10rem;
  flex-basis: 30rem;
`;

export const AboutImageSection = styled.div`
  display: flex;
  padding-top: 3.5rem;
  img {
    width: 500px;
    height: auto;
  }
`;

export const ImagesContainer = styled.div`
  margin-bottom: 25px;
  width: 100%;
  height: 680px;
  object-fit: cover;
  display: flex;
  justify-content: center;
`;

export const BackgroundImage = styled.img`
  height: auto;
  width: 100%;
  clip-path: url('#banner-wrapper_svg__banner-shape');
  top: 0;
  left: 0;
  position: absolute;
  z-index: 0;
`;

export const InstagramContainer = styled.div`
  #instafeed {
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;
    justify-content: center;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: block;
        width: 300px;
        height: 300px;
        padding: 10px;
        object-fit: cover;
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
  color: red;
  text-transform: uppercase;
  text-decoration: none;
`;

export const TopSalesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopSalesHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TopSalesProducts = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem;
  position: relative;
`;

interface IIconButtonStyled extends IconButtonProps {
  left?: boolean;
}

export const IconButtonStyled = styled(
  ({ left, ...rest }: IIconButtonStyled) => <IconButton {...rest} />
).attrs({
  classes: {
    root: 'root',
  },
})<IIconButtonStyled>`
  border-radius: 3px;
  padding: 1rem;
  border: 1px solid ${colors.primary.grey};
  position: absolute;
  top: 10rem;
  ${({ left }) =>
    `
      left: ${left ? '-6rem' : '62rem'};
    `};
  &.root {
    &:hover {
      color: ${colors.primary.white};
      background-color: ${colors.secondary.pink};
    }
  }
`;
