import { BREAKPOINT } from '@constants';
import styled from 'styled-components';

interface ITextLinkProps {
  disabled?: boolean;
}
export const TextLink = styled.div<ITextLinkProps>`
  font-size: 13px;
  opacity: 0.6;
  font-family: 'Roboto';
  color: rgb(30,47,66);

  ${({ disabled }) =>
    disabled !== true &&
    `
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
      `}
`;

export const DessertsWrapperBase = styled.div`
  height: 100%;
  width: 100%;
  padding: 5% 18% 8% 25%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${BREAKPOINT}) {
    padding: 5%;
    margin-top: 120px;
  }
`;
