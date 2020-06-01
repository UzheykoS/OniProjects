import styled from 'styled-components';
import { BREAKPOINT } from '@constants';

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  justify-content: space-around;
  border-top: 1px solid #cccccc;
  padding-top: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0px 30px 0px;
  @media (max-width: ${BREAKPOINT}) {
    padding: 20px 0px 15px 0px;
  }
`;

export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  @media (max-width: ${BREAKPOINT}) {
    padding: 0 20px;
  }
`;

export const SocialsItem = styled.a`
  padding: 5px 20px 5px 20px;
  img {
    height: 1.5rem;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  padding: 40px 0px 25px 0px;
  font-size: 1rem;
`;

export const TextWrapper = styled.div`
  font-weight: 400;
  line-height: 30px;
  font-size: 13px;
  display: flex;
  white-space: nowrap;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${BREAKPOINT}) {
    height: 101px;
    width: 100%;
  }
`;

export const ListItem = styled.li`
  a {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 30px;
    color: #333333;
    text-decoration: none;
  }
  &:hover {
    a {
      font-weight: 500;
    }
  }
`;

export const Logo = styled.img`
  width: 87px;

  @media (min-width: ${BREAKPOINT}) {
    padding-bottom: 160px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 25px;
  justify-content: center;
  align-items: center;
`;

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
