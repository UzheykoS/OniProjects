import styled from 'styled-components';
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
  imageWidth?: number;
}

export const BasketItemWrapperCell = styled.div<ICellProps>`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;

  & img {
    ${({ imageWidth }) =>
      `
    width: ${imageWidth || 180}px;
    `};
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
