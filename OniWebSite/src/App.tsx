import React from 'react';
import { hot } from 'react-hot-loader';
import { ModalsProvider } from '@hooks/useModal';
import { LoadingProvider } from '@hooks/useLoading';
import { Wrapper } from './Wrapper';
import { MobileProvider } from '@hooks/useMobile';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@styles/theme';
import { StylesProvider } from '@material-ui/core/styles';
import { BasketProvider } from '@hooks/useBasket';

@hot(module)
export class App extends React.Component {
  render() {
    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ModalsProvider>
            <BasketProvider>
              <MobileProvider>
                <LoadingProvider>
                  <Wrapper />
                </LoadingProvider>
              </MobileProvider>
            </BasketProvider>
          </ModalsProvider>
        </ThemeProvider>
      </StylesProvider>
    );
  }
}
