import React, { useState, FunctionComponent, useEffect } from 'react';
import { Router } from 'react-router';
import { History, createMemoryHistory } from 'history';
import { Instance } from 'mobx-state-tree';
import { StoreContext } from './models';
import RootStore from './models/root.store';

import scriptLoader from 'react-async-script-loader';
import AppBar from './components/core/AppBar';
import { ThemeProvider } from '@styled-components';
import defaultTheme from './styled/theme';
// import MomentUtils from '@date-io/moment';
// import { MuiPickersUtilsProvider } from './components/core/material-ui-pickers';

import { DISCOVERY_DOCS, SCOPES, CLIENT_ID, API_KEY } from './config/keys';
import Loading from './components/core/Loading';

interface IAppProps {
  store: Instance<typeof RootStore>;
  children: JSX.Element;
  history?: History;
  isScriptLoaded?: boolean;
}

const Wrapper: FunctionComponent<IAppProps> = ({
  children,
  store,
  history = createMemoryHistory(),
  isScriptLoaded,
}) => {
  const [isSignedIn, setSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    if (isScriptLoaded) {
      (window as any).gapi.load('client:auth2', initClient);
    }
  }, [isScriptLoaded]);

  const signinChanged = isSignedIn => {
    setSignedIn(isSignedIn);
  };

  const initClient = () => {
    (window as any).gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(() => {
        (window as any).gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(signinChanged);
        setSignedIn(
          (window as any).gapi.auth2.getAuthInstance().isSignedIn.get()
        );
      });
  };

  const handleAuthClick = () => {
    (window as any).gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignoutClick = () => {
    (window as any).gapi.auth2.getAuthInstance().signOut();
  };

  const checkIsSignedIn = () => {
    if (
      !(window as any).gapi ||
      !(window as any).gapi.auth2 ||
      !(window as any).gapi.auth2.getAuthInstance()
    ) {
      return false;
    }
    return (window as any).gapi.auth2.getAuthInstance().isSignedIn.get();
  };

  return isScriptLoaded && checkIsSignedIn() ? (
    <ThemeProvider theme={defaultTheme}>
      <StoreContext.Provider value={store}>
        <>
          <AppBar
            title={'ONI'}
            isSignedIn={isSignedIn}
            onLoginClick={handleAuthClick}
            onLogoutClick={handleSignoutClick}
          />
          <Router history={history}>{children}</Router>
        </>
      </StoreContext.Provider>
    </ThemeProvider>
  ) : (
    <Loading />
  );
};

export default scriptLoader('https://apis.google.com/js/api.js')(Wrapper);
