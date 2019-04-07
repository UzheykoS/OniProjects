import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { Instance } from 'mobx-state-tree';
import { History } from 'history';
import RootStore from './models/root.store';
import Loading from './components/core/Loading';

import Wrapper from './Wrapper';
import routes from './routes';

interface IProps {
  store: Instance<typeof RootStore>;
  history: History;
}

export enum AppState {
  loading,
  loaded,
  fail,
}

interface IState {
  appState: AppState;
}

class App extends React.Component<IProps, IState> {
  state = {
    appState: AppState.loading,
  };

  async componentDidMount() {
    const { history, store } = this.props;
    store.router.init(history.location);
    history.listen(store.router.locationChanged);

    try {
      this.setState({ appState: AppState.loaded }, () => {
        store.app.init();
      });
    } catch (e) {
      this.setState({ appState: AppState.fail });
    }
  }

  render() {
    const { store, history } = this.props;

    return (
      <Wrapper store={store} history={history}>
        {this.state.appState === AppState.loading ? (
          <Loading />
        ) : (
          renderRoutes(routes)
        )}
      </Wrapper>
    );
  }
}

export default App;
