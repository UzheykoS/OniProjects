import { createContext } from 'react';
import { destroy, Instance, SnapshotIn } from 'mobx-state-tree';
import { History } from 'history';
import RootStore from './root.store';

export interface IEnv {
  history: History;
}

const envDefault: IEnv = {
  history: {} as History,
};

export function createStore(
  snapshot: Partial<SnapshotIn<typeof RootStore>> = {},
  env: IEnv = envDefault
): Instance<typeof RootStore> {
  if (store) {
    destroy(store);
  }

  store = RootStore.create(snapshot, env);

  if (
    !/MSIE \d|Trident.*rv:/.test(navigator.userAgent) &&
    process.env.NODE_ENV !== 'production'
  ) {
    require('mst-middlewares').connectReduxDevtools(
      require('remotedev'),
      store,
      {
        logArgsNearName: false,
        logChildActions: false,
        logIdempotentActionSteps: false,
      }
    );
  }
  return store;
}

// to initialize types for StoreContext
let store = createStore({}, envDefault);

export const StoreContext = createContext<Instance<typeof RootStore>>(store);
