import styled from 'styled-components';
import { BREAKPOINT } from '@constants';
import { ImageWithFallback } from '@common/ImageWithFallback';

export const ImageWrapper = styled(ImageWithFallback)`
  height: 138px;
  width: auto;
  @media (max-width: ${BREAKPOINT}) {
    height: auto;
    max-width: 300px;
  }
`;
