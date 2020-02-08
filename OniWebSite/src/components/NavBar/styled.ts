import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const RoutesList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 0;
  display: flex;
  height: 101px;
  justify-content: space-between;
  width: 100%;
`;

interface IRoutesListItem {
  active?: boolean;
}

export const RoutesListItem = styled.li<IRoutesListItem>`
  margin: 0 25px;
  height: 100%;
  align-items: center;
  display: flex;
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
  ${({ active }) =>
    active &&
    `
      border-top: 3px solid #edb92c;
      a {
          font-weight: 500;
        }
      `}
`;

export const LogoLink = styled(RoutesListItem)`
  margin: 0px 150px;
`;

export const Logo = styled.img`
  height: 67px;
`;

export const MenuItem = styled.span``;

export const RoutesWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const RightSide = styled.div`
  display: flex;
  margin: 0px 150px;
  align-self: center;
`;