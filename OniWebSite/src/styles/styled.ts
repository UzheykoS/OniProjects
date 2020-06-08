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
  @media (min-width: ${BREAKPOINT}) {
    padding-top: 100px;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${BREAKPOINT}) {
    flex-wrap: wrap;
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
  box-sizing: border-box;

  ${({ bordered, isLastChild }) =>
    bordered &&
    `
    border: 1px solid #EEF2F0;
    border-right: ${isLastChild === true ? '1px solid #EEF2F0;' : '0px;'}
    // &:last-child {
    //   border-right: 1px solid #EEF2F0;
    // }
    @media (max-width: ${BREAKPOINT}) {
      border: 1px solid #EEF2F0;
    }
    `}
`;

interface IFlex {
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  justifyEvenly?: boolean;
  justifyAround?: boolean;
  alignCenter?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  alignBaseline?: boolean;
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
  ${({ justifyAround }) =>
    justifyAround &&
    css`
      justify-content: space-around;
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
  ${({ alignEnd }) =>
    alignEnd &&
    css`
      align-items: flex-end;
    `}
  ${({ alignBaseline }) =>
    alignBaseline &&
    css`
      align-items: baseline;
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
