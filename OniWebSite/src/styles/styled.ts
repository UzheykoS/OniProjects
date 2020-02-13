import styled from 'styled-components';

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
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: left;
`;

interface IColumn {
  bordered: boolean;
}
export const FlexColumn = styled.div<IColumn>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0;
  margin-top: -1px;
  ${({ bordered }) =>
    bordered &&
    `
    border: 1px solid #cccccc;
    border-right: 0px;
    &:last-child {
      border-right: 1px solid #cccccc;
    }`}
`;
