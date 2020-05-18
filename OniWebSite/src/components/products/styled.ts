import styled from 'styled-components';
import { BREAKPOINT } from '@constants';
import colors from '@constants/colors';

export interface IProductSingleWrapper {
  height?: number;
}

export const ProductSingleWrapper = styled.div<IProductSingleWrapper>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 20px 0 0 0;

  ${({ height }) =>
    `
      min-height: ${height || 19}vw;
    `};

  @media (max-width: ${BREAKPOINT}) {
    height: auto;
    /* min-height: 400px; */
    padding: 40px 0;
  }
`;

export const Title = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 10px 0;
`;

export const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #cccccc;
  text-align: center;
  padding: 5px 40px;
`;

interface IAddIconWrapper {
  visible: boolean;
}

export const AddIconWrapper = styled.div<IAddIconWrapper>`
  top: 50%;
  left: 50%;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  opacity: 0.5;
  background: ${colors.secondary.dark};
  border: 2px solid ${colors.primary.white};
  position: absolute;
  margin: -40px 0 0 -45px;
  display: none;
  align-items: center;
  justify-content: center;
  ${({ visible }) =>
    visible &&
    `
      display: flex;
    `};
`;

export const AddIconMobileWrapper = styled.div`
  top: 0;
  right: 0;
  margin: 10px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${colors.primary.gold};
  border: 2px solid ${colors.primary.white};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
