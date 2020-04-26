import styled from 'styled-components';
import { BREAKPOINT } from '@constants';

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

  ${({ height }) =>
    `
      height: ${height || 19}vw;
      `};

  @media (max-width: ${BREAKPOINT}) {
    height: auto;
    min-height: 400px;
  }
`;
