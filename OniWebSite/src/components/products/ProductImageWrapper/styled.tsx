import styled from 'styled-components';
import { BREAKPOINT } from '@constants';
import {
  ImageWithFallback,
  IImageWithFallbackProps,
} from '@common/ImageWithFallback';
import React from 'react';

export interface IImageWrapper extends IImageWithFallbackProps {
  height?: number;
}

export const ImageWrapper = styled(({ height, ...rest }: IImageWrapper) => (
  <ImageWithFallback {...rest} />
))<IImageWrapper>`
  height: 138px;
  width: auto;
  @media (max-width: ${BREAKPOINT}) {
    height: auto;
    max-width: 200px;
  }

  ${({ height }) =>
    height &&
    `
    height: ${height}px;
    `};
`;
