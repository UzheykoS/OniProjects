import styled from 'styled-components';
import { Typography, Tab, Tabs } from '@material-ui/core';
import colors from '@constants/colors';

export const CheckoutContainer = styled.div`
  height: 100%;
  font-family: 'Museo Sans Cyrl 500';
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  min-width: 60%;
  margin: 50px 0px;
  min-height: calc(100vh - 550px);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60%;
  margin: 50px 0px;
`;

export const BasketItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  border: 1px solid ${colors.primary.grey};
`;

export const BasketItemWrapperCell = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  align-self: center;
  & img {
    width: 180px;
    height: auto;
    max-height: 120px;
    object-fit: contain;
  }
  &:last-child {
    justify-content: space-between;
    align-items: center;
  }
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
  align-self: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const CheckoutHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  position: relative;
`;

export const BasketTable = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

export const BasketHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

export const BasketHeaderCell = styled.div`
  width: 25%;
  &:first-child {
    padding-left: 25px;
  }
`;

export const ProceedSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TabStyled = styled(Tab).attrs({
  classes: {
    root: 'root',
  },
})`
  &:focus {
    outline: none;
  }
  &.root {
    width: 33%;
    min-width: 300px;
    margin: 0 20px;
  }
`;

export const TabsStyled = styled(Tabs)`
  width: auto;
`;

export const CheckoutStepperContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
