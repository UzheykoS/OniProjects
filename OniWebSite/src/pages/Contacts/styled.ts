import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import colors from '@constants/colors';

export const ContactsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  font-family: 'Roboto';
  font-size: 13px;
`;

export const Title = styled.div`
  font-weight: 700;
  padding: 40px 0px 7px 0px;
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

export const SocialsItem = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  img {
    height: 1.5rem;
  }
`;
