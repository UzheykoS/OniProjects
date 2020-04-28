import styled from 'styled-components';
import { BREAKPOINT } from '@constants';

export const ZephyrWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 5% 18% 5% 25%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${BREAKPOINT}) {
    padding: 5%;
    margin-top: 120px;
  }
`;

export const ZephyrTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
  flex-direction: column;
`;

export const ZephyrInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;
