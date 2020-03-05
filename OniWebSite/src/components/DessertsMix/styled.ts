import styled from 'styled-components';
import { BREAKPOINT } from '@constants';

export const MixSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 360px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  @media (max-width: ${BREAKPOINT}) {
    height: auto;
  }

  img {
    width: auto;
    height: 250px;
    padding-top: 20px;

    @media (max-width: ${BREAKPOINT}) {
      height: auto;
      max-height: 300px;
    }
  }
  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
  }
`;
