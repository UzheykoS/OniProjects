import styled from 'styled-components';
import { BREAKPOINT } from '@constants';

export const TopSalesItemWrapper = styled.div`
  display: flex;
  height: 333px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 20px 0 0 0;

  @media (max-width: ${BREAKPOINT}) {
    padding: 40px 0 20px 0;
  }
`;

export const TopSalesItemTitle = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 20px;
  color: black;
  text-align: center;
  padding: 10px 0;
`;
