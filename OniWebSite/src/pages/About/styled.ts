import styled from 'styled-components';

export const AboutMainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutTopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px 0px;
`;

export const AboutBottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f6f8f7;
  padding-bottom: 80px;
`;

export const AboutLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.5rem;
  align-items: flex-end;
`;

export const AboutRightSection = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  flex-basis: 30rem;
`;

export const AboutTextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
`;

export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Roboto';
  font-size: 13px;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

export const TextWrapper = styled.div`
  font-weight: 400;
  line-height: 30px;
  font-size: 1rem;
  display: flex;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 25px;
  justify-content: center;
  align-items: center;
`;

export const QuotesContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 5rem;
`;

export const Quotes = styled.div`
  display: flex;
  position: relative;
  font-size: 186px;
  line-height: 68px;
  font-family: 'Yeseva One';
  color: #eff3f1;
  position: absolute;
  left: -54px;
  z-index: 0;
`;
