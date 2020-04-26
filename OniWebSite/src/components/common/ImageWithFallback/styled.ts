import styled from 'styled-components';

interface IImageStyled {
  blurred: boolean;
}

export const ImageStyled = styled.img<IImageStyled>`
  ${({ blurred }) =>
    blurred &&
    `
    opacity: 0.5;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    `};
`;
