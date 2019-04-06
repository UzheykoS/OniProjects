import { getEnv, types } from 'mobx-state-tree';
import { Location } from 'history';

const RouterStore = types
  .model('RouterStore', {
    location: types.optional(
      types.model('LocationModel', {
        pathname: types.string,
        search: types.maybe(types.string),
        hash: types.maybe(types.string),
      }),
      {
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
      }
    ),
  })
  .actions(self => ({
    init: (location: Location) => {
      self.location = location;
    },
    push: (to: Location | string) => {
      const { history } = getEnv(self);
      history.push(to);
    },
    replace: (to: Location | string) => {
      const { history } = getEnv(self);
      history.replace(to);
    },
    locationChanged: (location: Location) => {
      self.location = location;
    },
  }));

export default RouterStore;
