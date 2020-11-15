import styled from 'styled-components';

interface ITextLinkProps {
  disabled?: boolean;
}
export const TextLink = styled.div<ITextLinkProps>`
  font-size: 13px;
  opacity: 0.4;
  font-family: 'Roboto';

  ${({ disabled }) =>
    disabled !== true &&
    `
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
      `}
`;
