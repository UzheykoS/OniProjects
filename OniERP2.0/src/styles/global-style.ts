import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html, body {
  width: 100%;
  height: 100%;
  font-size: 8px;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
}

#root {
  width: 100%;
  height: 100%;
}

input[type='text']::-ms-clear {
  display: none;
}

/* preventing google chrome autofilling */

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: none !important;
  -webkit-text-fill-color: inherit !important;
  -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  box-shadow: 0 0 0 1000px #ffffff inset;
  transition: background-color 5000s ease-in-out 0s;
}

input::-ms-clear, input::-ms-reveal {
  display: none;
}

.ReactVirtualized__Grid {
    &:focus {
      outline: none;
    }
  };

.noselect {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
`;
