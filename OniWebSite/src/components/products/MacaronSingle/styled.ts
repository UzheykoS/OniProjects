import styled from 'styled-components';
import colors from '@constants/colors';
import { BREAKPOINT } from '@constants';

export const MacaronSingleWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 19vw; /* Depending on tha parent wrapper padding */
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  @media (max-width: ${BREAKPOINT}) {
    height: auto;
    min-height: 400px;
  }
`;

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
  text-align: center;
  padding: 10px 0;
  @media (max-width: ${BREAKPOINT}) {
    font-size: 20px;
  }
`;

export const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #cccccc;
  text-align: center;
  padding: 5px 40px;
  @media (max-width: ${BREAKPOINT}) {
    font-size: 16px;
  }
`;
