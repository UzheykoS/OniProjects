import styled from 'styled-components';
import colors from '@constants/colors';

export const MacaronSingleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 327px;
  height: 270px;
  /* width: 100%; */
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

interface IAddIconWrapper {
  visible: boolean;
}

export const AddIconWrapper = styled.div<IAddIconWrapper>`
  top: 50%;
  left: 50%;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  opacity: 0.5;
  background: ${colors.secondary.dark};
  border: 2px solid ${colors.primary.white};
  position: absolute;
  margin: -40px 0 0 -45px;
  display: none;
  align-items: center;
  justify-content: center;
  ${({ visible }) =>
    visible &&
    `
      display: flex;
    `};
`;

export const ImageWrapper = styled.img`
  height: 138px;
  width: auto;
`;

export const Title = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 16px;
  color: black;
  text-align: center;
`;

export const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #cccccc;
  text-align: center;
  padding: 5px 40px;
`;

// img {
//   max-width: 100%;
//   height: auto;
// }
// img.taste {
//   left: 0;
//   top: 0;
//   -webkit-transition: opacity 0.2s ease-in-out;
//   -moz-transition: opacity 0.2s ease-in-out;
//   -o-transition: opacity 0.2s ease-in-out;
//   transition: opacity 0.2s ease-in-out;
// }
// img.top:hover {
//   opacity: 0;
// }
// img.top {
//   position: absolute;
// }
