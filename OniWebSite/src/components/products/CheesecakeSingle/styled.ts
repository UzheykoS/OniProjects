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
`;

export const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  color: #1e2f42;
  text-align: center;
  padding: 10px 40px;
  line-height: 17px;
`;
