import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { ModalsProvider } from '@hooks/useModal';
import { LoadingProvider } from '@hooks/useLoading';
import { Wrapper } from './Wrapper';

@hot(module)
export class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <ModalsProvider>
          <LoadingProvider>
            <Wrapper />
          </LoadingProvider>
        </ModalsProvider>
      </Router>
    );
  }
}
