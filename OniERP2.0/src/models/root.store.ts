import { types } from 'mobx-state-tree';
import AppStore from './app.store';
import RouterStore from './router.store';
import SnackbarStore from './snackbar.store';

const RootStore = types.model('RootStore', {
  app: types.optional(AppStore, {}),
  router: types.optional(RouterStore, {}),
  snackbar: types.optional(SnackbarStore, {}),
});

export default RootStore;
