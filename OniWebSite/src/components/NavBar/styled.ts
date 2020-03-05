import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import colors from '@constants/colors';

export const NavBarWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid #cccccc;
`;

export const NavBarWrapperMobile = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid #cccccc;
  position: fixed;
  top: 0;
  background: ${colors.primary.white};
  z-index: 2;
`;

export const RoutesList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 0;
  display: flex;
  height: 101px;
  justify-content: space-between;
  width: 100%;
  z-index: 100;
`;

interface IRoutesListItem {
  active?: boolean;
  whiteMode?: boolean;
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
  ${({ whiteMode }) =>
    whiteMode &&
    `
      a {
          color: #ffffff;
        }
      `}
`;

export const LogoLink = styled(RoutesListItem)`
  margin: 0px 150px;
`;

interface ILogo {
  whiteMode?: boolean;
}

export const Logo = styled.img<ILogo>`
  height: 67px;
  ${({ whiteMode }) =>
    whiteMode &&
    `
      filter: invert();
    `}
`;

export const RoutesWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const RightSide = styled.div`
  display: flex;
  margin: 0px 150px;
  align-self: center;
`;

export const BadgeStyled = styled(Badge).attrs({
  classes: {
    badge: 'styled-badge',
  },
})`
  .styled-badge {
    background-color: ${colors.secondary.pink};
  }
`;

export const MenuItem = styled.span<IRoutesListItem>`
  display: flex;
  justify-content: start;
  padding: 20px;

  &:focus {
    outline: none;
  }

  a {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #333333;
    text-decoration: none;
    border-bottom: 3px solid transparent;
  }
  &:hover {
    a {
      font-weight: 500;
      border-bottom: 3px solid ${colors.primary.gold};
    }
  }

  ${({ active }) =>
    active &&
    `
    a {
      font-weight: 500;
      border-bottom: 3px solid ${colors.primary.gold};
    }
   `}
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 20px 50px 20px;
  img {
    height: 32px;
  }
`;

import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  burgerMenuIcon: {
    height: 24,
    width: 24,
    margin: '25px 25px 25px -25px',
  },
  burgerMenuCloseIcon: {
    height: 24,
    width: 24,
    padding: 10,
  },
  burderMenu: {
    left: 0,
  },
  burgerMenuOverlay: {
    left: 0,
  },
  burgerMenuItems: {
    background: colors.primary.white,
    paddingTop: '50px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
