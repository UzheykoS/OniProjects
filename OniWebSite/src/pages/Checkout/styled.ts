import styled from 'styled-components';
import { Tab, Tabs } from '@material-ui/core';
import colors from '@constants/colors';
import { BREAKPOINT } from '@constants';

export const CheckoutContainer = styled.div`
  height: 100%;
  font-family: 'Museo Sans Cyrl 500';
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  min-width: 60%;
  min-height: calc(100vh - 550px);

  margin: 50px 0px;
  @media (max-width: ${BREAKPOINT}) {
    margin: 100px 20px 50px 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60%;
`;

export const BasketItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  border: 1px solid ${colors.primary.grey};
`;

interface ICellProps {
  width: number;
}

export const BasketItemWrapperCell = styled.div<ICellProps>`
  display: flex;
  flex-direction: row;
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

  ${({ width }) =>
    width &&
    `
    width: ${width}%;
    `};
`;

export const CheckoutHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  position: relative;
`;

export const BasketTable = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  @media (max-width: ${BREAKPOINT}) {
    margin: 30px 0;
  }
`;

export const BasketHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

export const BasketHeaderCell = styled.div<ICellProps>`
  ${({ width }) =>
    width &&
    `
    width: ${width}%;
    `};
  &:first-child {
    padding-left: 25px;
  }
`;

interface ITextLinkProps {
  disabled?: boolean;
}
export const TextLink = styled.div<ITextLinkProps>`
  font-size: 13px;
  opacity: 0.4;
  font-family: 'Roboto';

  ${({ disabled }) =>
    disabled !== true &&
    `
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    `}
`;

export const HelperText = styled.div`
  font-size: 13px;
  margin-right: 5px;
  font-family: 'Roboto';
`;

export const TotalMobile = styled.div`
  font-size: 16px;
  font-family: 'Roboto';
  margin-right: 5px;
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

    @media (max-width: ${BREAKPOINT}) {
      min-width: auto;
      width: 100%;
      margin: 0px;
      padding: 0px;
    }
  }
`;

export const TabsStyled = styled(Tabs).attrs({
  classes: {
    flexContainer: 'flexContainer',
  },
})`
  width: auto;

  .flexContainer {
    @media (max-width: ${BREAKPOINT}) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const CheckoutStepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${BREAKPOINT}) {
    width: 100%;
  }
`;

export const BackArrowWrapper = styled.div`
  @media (min-width: ${BREAKPOINT}) {
    position: absolute;
    left: -70px;
  }
`;
