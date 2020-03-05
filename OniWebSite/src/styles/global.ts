import { createGlobalStyle } from 'styled-components';
import { px2vw } from '@utils/Helper';
import { BREAKPOINT } from '@constants';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: ${BREAKPOINT}) {
        font-size: ${px2vw(16)};
      }
    }
`;

export default Global;
