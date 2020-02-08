import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavBarMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;
`;

export const RoutesList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 0;
  display: flex;
  justify-content: center;
`;

interface IRoutesListItem {
  active?: boolean;
}

export const RoutesListItem = styled.li<IRoutesListItem>`
  &a {
    display: inline-block;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #333333;
    text-decoration: none;
    text-transform: uppercase;
    &:focus {
      font-weight: 900;
    }
    ${({ active }) =>
      active &&
      `
        font-weight: 900;
        `}
  }
`;

export const LogoLink = styled(RoutesListItem)`
  margin: 0px !important;
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
  display: inline-block;
  margin: 26px 30px 0px 30px;
  height: 120px;
`;
