import styled from 'styled-components';

interface IProductsNavBarWrapper {
  isSticky?: boolean;
}

export const ProductsNavBarWrapper = styled.div<IProductsNavBarWrapper>`
  position: absolute;
  left: 130px;
  top: 250px;
  z-index: 1;

  ${({ isSticky }) =>
    isSticky &&
    `
    top: 50px;
    position: fixed;
      `}
`;

export const ProductsNavBarMain = styled.div`
  display: flex;
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
  flex-direction: column;
  justify-content: center;
`;

interface IRoutesListItem {
  active?: boolean;
}

export const RoutesListItem = styled.li<IRoutesListItem>`
  margin: 10px 25px;
  height: 100%;
  align-items: center;
  display: flex;
  a {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    text-decoration: none;
    margin-left: 35px;
  }
  &:hover {
    a {
      color: #edb92c;
    }
  }
  ${({ active }) =>
    active &&
    `
      border-left: 3px solid #edb92c;
      a {
          color: #edb92c;
          margin-left: 32px;
        }
      `}
`;
