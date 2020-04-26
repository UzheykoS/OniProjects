import styled from 'styled-components';
import colors from '@constants/colors';
import { IconButton, IconButtonProps } from '@material-ui/core';

export const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 80px 0px;
  justify-content: center;
  border: 1px solid #cccccc;
`;

export const ImageSection = styled.div`
  img {
    width: 500px;
    height: auto;
  }
`;

export const TextSection = styled.div`
  width: 500px;
  padding-left: 60px;
  font-size: 15px;
  h2 {
    line-height: 27px;
    margin-bottom: 20px;
    font-weight: 600;
    padding-bottom: 10px;
    font-size: 20px;
    color: #6b6b6b;
  }
  p {
    color: #6b6b6b;
    font-weight: 400;
    line-height: 21px;
  }
`;

export const ImagesContainer = styled.div`
  margin-bottom: 25px;
  width: 100%;
  height: 680px;
  object-fit: cover;
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
    padding: 0px 100px;
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

export const InstagramSubtitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 19px;
  color: gold;
`;

export const InstagramTitle = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 38px;
  color: black;
`;

export const InstagramDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InstagramDescriptionText = styled.div`
  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: black;
    margin: 0;
  }
`;

export const InstagramDescriptionLink = styled.a`
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

export const TopSalesTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 19px;
  color: gold;
`;

export const TopSalesProducts = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem;
`;

export const IconButtonStyled = styled(IconButton).attrs({
  classes: {
    root: 'root',
  },
})<IconButtonProps>`
  border-radius: 3px;
  padding: 1rem;
  border: 1px solid ${colors.primary.grey};
  &.root {
    &:hover {
      color: ${colors.primary.white};
      background-color: ${colors.secondary.pink};
    }
  }
`;
