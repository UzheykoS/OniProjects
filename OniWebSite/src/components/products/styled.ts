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
      height: ${height ? height + 'rem' : '100%'};
    `};

  @media (max-width: ${BREAKPOINT}) {
    padding: 40px 0 20px 0;
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
  text-align: center;
  padding: 5px 40px;
  height: 52px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgb(30, 47, 66);
  font-size: 13px;
  opacity: 0.6;
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
