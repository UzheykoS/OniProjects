import styled from 'styled-components';

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
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialsItem = styled.a`
  padding: 5px 40px 5px 0px;
  img {
    height: 16px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  padding: 40px 0px 25px 0px;
`;

export const TextWrapper = styled.div`
  font-weight: 400;
  line-height: 30px;
  font-size: 14px;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 0;
  display: flex;
  height: 101px;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
`;

export const ListItem = styled.li`
  a {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
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
  padding-bottom: 160px;
`;
