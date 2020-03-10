import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import Snackbar from '@core/Snackbar';
import { GlobalStyle } from '../styles/global-style';

function RootComponent(props: RouteConfigComponentProps) {
  return (
    <>
      <GlobalStyle />
      <Snackbar />
      {renderRoutes(props.route!.routes)}
    </>
  );
}

export default RootComponent;
