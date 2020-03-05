import styled from 'styled-components';
import { BREAKPOINT } from '@constants';

export const MacaronsWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 5% 18% 5% 25%;
  box-sizing: border-box;

  @media (max-width: ${BREAKPOINT}) {
    padding: 5%;
    margin-top: 120px;
  }
`;

export const MacaronsTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
  flex-direction: column;
`;

export const MacaronsInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;
