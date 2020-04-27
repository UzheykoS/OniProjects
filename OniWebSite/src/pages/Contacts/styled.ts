import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import colors from '@constants/colors';

export const ContactsMainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContactsTopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px 0px;
`;

export const ContactsBottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f6f8f7;
  padding-bottom: 80px;
`;

export const ContactsLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.5rem;
  align-items: flex-end;
`;

export const ContactsRightSection = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  flex-basis: 30rem;
  position: relative;
`;

export const ContactsTextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
`;

export const ContactsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  font-family: 'Roboto';
  font-size: 13px;
`;

export const Title = styled.div`
  font-weight: 700;
  padding: 40px 0px 25px 0px;
  font-size: 1rem;
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

export const useStyles = makeStyles({
  formHelperText: {
    position: 'absolute',
    bottom: '-22px',
  },
});

export const RotatedImageWrapper = styled.div`
  display: flex;
  transform: rotate(-30deg);
  position: absolute;
  top: -50px;
  right: -260px;
`;

export const LinkWrapper = styled.a`
  padding-left: 3rem;
  white-space: nowrap;
  font-weight: 400;
  line-height: 30px;
  font-size: 1rem;
  color: inherit;
  text-decoration-color: ${colors.secondary.gold};
`;
