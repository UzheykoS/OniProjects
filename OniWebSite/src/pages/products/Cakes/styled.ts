import styled from 'styled-components';
import { BREAKPOINT } from '@constants';

export const CakesWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 5% 15% 5% 24%;
  box-sizing: border-box;
  @media (max-width: ${BREAKPOINT}) {
    padding: 5%;
    margin-top: 120px;
  }
`;

export const CakesInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

export const CakesMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 970px;
  @media (max-width: ${BREAKPOINT}) {
    min-width: 250px;
  }
`;
