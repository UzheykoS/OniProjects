import styled from 'styled-components';

export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Roboto';
  font-size: 13px;
`;

export const TextWrapper = styled.div`
  font-weight: 400;
  line-height: 30px;
  font-size: 1rem;
  display: flex;
  white-space: nowrap;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 25px;
  justify-content: center;
  align-items: center;
`;

interface IQuotes {
  isMobile?: boolean;
}

export const Quotes = styled.div<IQuotes>`
  display: flex;
  position: relative;
  line-height: 68px;
  font-family: 'Yeseva One';
  color: #eff3f1;
  position: absolute;
  z-index: 0;
  ${({ isMobile }) =>
    `
    font-size: ${isMobile ? '150px' : '186px'};
    left: ${isMobile ? '-20px' : '-54px'};
  `};
`;
