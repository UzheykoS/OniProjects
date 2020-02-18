import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const CheckoutContainer = styled.div`
  height: 100%;
  font-family: 'Museo Sans Cyrl 500';
  overflow-x: hidden;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasketItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;


export const BasketItemWrapperCell = styled.div`
  display: flex;
  flex-direction: row;
`;


export const BasketButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContinueShopping = styled(Typography)`
  height: auto;
  cursor: pointer;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const CheckoutHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;
