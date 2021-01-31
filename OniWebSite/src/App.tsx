import { hot } from 'react-hot-loader';
import React from 'react';
import { ModalsProvider } from '@hooks/useModal';
import { LoadingProvider } from '@hooks/useLoading';
import { Wrapper } from './Wrapper';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@styles/theme';
import { StylesProvider } from '@material-ui/core/styles';
import { BasketProvider } from '@hooks/useBasket';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ruLocale from 'date-fns/locale/ru';
import { SnackbarProvider } from '@hooks/useSnackbar';
import { SupportWebpProvider } from '@common/ImageWithFallback/useSupportWebp';

@hot(module)
export class App extends React.Component {
  render() {
    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <ModalsProvider>
              <BasketProvider>
                <LoadingProvider>
                  <SnackbarProvider>
                    <SupportWebpProvider>
                      <Wrapper />
                    </SupportWebpProvider>
                  </SnackbarProvider>
                </LoadingProvider>
              </BasketProvider>
            </ModalsProvider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </StylesProvider>
    );
  }
}
