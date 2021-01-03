import styled from 'styled-components';
import { BREAKPOINT } from '@constants';

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
  @media (max-width: ${BREAKPOINT}) {
    padding: 0px;
  }
`;
