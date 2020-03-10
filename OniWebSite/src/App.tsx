import React from 'react';
import { hot } from 'react-hot-loader';
import { ModalsProvider } from '@hooks/useModal';
import { LoadingProvider } from '@hooks/useLoading';
import { Wrapper } from './Wrapper';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@styles/theme';
import { StylesProvider } from '@material-ui/core/styles';
import { BasketProvider } from '@hooks/useBasket';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

@hot(module)
export class App extends React.Component {
  render() {
    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ModalsProvider>
              <BasketProvider>
                <LoadingProvider>
                  <Wrapper />
                </LoadingProvider>
              </BasketProvider>
            </ModalsProvider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </StylesProvider>
    );
  }
}
