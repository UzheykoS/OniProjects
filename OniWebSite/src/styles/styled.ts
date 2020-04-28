import styled, { css } from 'styled-components';
import { BREAKPOINT } from '@constants';

export const HeaderMain = styled.div`
  font-size: 40px;
`;

export const HeaderBody = styled.div`
  font-size: 16px;
  padding-top: 20px;
  padding-right: 50px;
`;

export const AppStyled = styled.div`
  height: 100%;
  overflow-x: auto;
  min-height: 100%;
  font-family: 'Yeseva One', cursive;
  position: relative;
  box-sizing: border-box;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${BREAKPOINT}) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

interface IColumn {
  bordered?: boolean;
  isLastChild?: boolean;
}
export const FlexColumn = styled.div<IColumn>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0;
  margin-top: -1px;
  width: 100%;

  ${({ bordered, isLastChild }) =>
    bordered &&
    `
    border: 1px solid #EEF2F0;
    border-right: ${isLastChild === true ? '1px solid #EEF2F0;' : '0px;'}
    &:last-child {
      border-right: 1px solid #EEF2F0;
    }
    @media (max-width: ${BREAKPOINT}) {
      border: 1px solid #EEF2F0;
    }
    `}
`;

interface IFlex {
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  justifyEvenly?: boolean;
  alignCenter?: boolean;
  alignStart?: boolean;
  flexStart?: boolean;
  flexEnd?: boolean;
  flex?: string;
  flexWrap?: boolean;
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
}

export const Flex = styled.div<IFlex>`
  display: flex;

  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
  ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: wrap;
    `}
  ${({ justifyBetween }) =>
    justifyBetween &&
    css`
      justify-content: space-between;
    `}
  ${({ justifyCenter }) =>
    justifyCenter &&
    css`
      justify-content: center;
    `}
  ${({ justifyEvenly }) =>
    justifyEvenly &&
    css`
      justify-content: space-evenly;
    `}
  ${({ alignCenter }) =>
    alignCenter &&
    css`
      align-items: center;
    `}
  ${({ alignStart }) =>
    alignStart &&
    css`
      align-items: flex-start;
    `}
  ${({ flexStart }) =>
    flexStart &&
    css`
      justify-content: flex-start;
    `}
  ${({ flexEnd }) =>
    flexEnd &&
    css`
      justify-content: flex-end;
    `}
  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}
`;
