import React from 'react';
import { hot } from 'react-hot-loader';
import { ModalsProvider } from '@hooks/useModal';
import { LoadingProvider } from '@hooks/useLoading';
import { Wrapper } from './Wrapper';
import { MobileProvider } from '@hooks/useMobile';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@styles/theme';
import { StylesProvider } from '@material-ui/core/styles';

@hot(module)
export class App extends React.Component<any, any> {
  render() {
    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ModalsProvider>
            <LoadingProvider>
              <MobileProvider>
                <Wrapper />
              </MobileProvider>
            </LoadingProvider>
          </ModalsProvider>
        </ThemeProvider>
      </StylesProvider>
    );
  }
}
