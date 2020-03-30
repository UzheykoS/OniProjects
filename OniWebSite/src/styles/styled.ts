import styled from 'styled-components';
import { BREAKPOINT } from '@constants';

export const HeaderMain = styled.div`
  color: #ffffff;
  font-size: 40px;
`;

export const HeaderBody = styled.div`
  color: #ffffff;
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
    max-width: 600px;
  }
`;

interface IColumn {
  bordered?: boolean;
}
export const FlexColumn = styled.div<IColumn>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0;
  margin-top: -1px;
  width: 100%;

  ${({ bordered }) =>
    bordered &&
    `
    border: 1px solid #cccccc;
    border-right: 0px;
    // &:last-child {
      border-right: 1px solid #cccccc;
    // }
    `}
`;
