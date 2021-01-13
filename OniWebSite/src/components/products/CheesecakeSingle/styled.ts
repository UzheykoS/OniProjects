import styled from 'styled-components';
import colors from '@constants/colors';

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

export const Title = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 16px;
  color: black;
  white-space: pre;
  text-align: center;
  flex-grow: 1;
`;

export const Price = styled.div`
  font-family: 'Yeseva One';
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  white-space: nowrap;
`;

export const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 10px 35px;
  line-height: 17px;
  box-sizing: border-box;
  flex-grow: 10;
  color: rgb(30, 47, 66);
  font-size: 13px;
  opacity: 0.6;
`;
