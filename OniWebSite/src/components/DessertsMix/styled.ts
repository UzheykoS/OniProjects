import styled from 'styled-components';
import { BREAKPOINT } from '@constants';

export interface IMixSection {
  size: 'small' | 'large';
  imageHeight: number;
}

export const MixSection = styled.div<IMixSection>`
  display: flex;
  justify-content: center;
  height: 360px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  ${({ size }) =>
    `
      height: ${size === 'small' ? 380 : 480}px;
    `};

  @media (max-width: ${BREAKPOINT}) {
    height: auto;
  }

  img {
    width: auto;
    padding-top: 20px;

    ${({ imageHeight }) =>
      `
        height: ${imageHeight}px;
      `};

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
    padding: 5px 0px 10px 0px;
  }
`;

export const DessertMixTitle = styled.div`
  font-family: 'Yeseva One';
  font-weight: 400;
  font-size: 16px;
  padding: 0 0px 5px 20px;
`;
