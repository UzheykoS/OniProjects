import { types } from 'mobx-state-tree';

const SnackbarStore = types
  .model('SnackbarStore', {
    isOpen: false,
    message: types.maybe(types.union(types.string, types.array(types.string))),
    keepOpen: false,
    isError: false,
    showOnBottom: false,
    showOnLeft: false
  })
  .actions(self => ({
    showSnackBar({ message = '', keepOpen = false, isError = false, showOnBottom = false, showOnLeft = false }) {
      self.isOpen = true;
      self.message = message;
      self.keepOpen = keepOpen;
      self.isError = isError;
      self.showOnBottom = showOnBottom;
      self.showOnLeft = showOnLeft;
    },
    hideSnackBar() {
      self.isOpen = false;
      self.message = '';
      self.isError = false;
    },
    toggleSnackBar(message = '') {
      self.isOpen = !self.isOpen;
      self.message = message;
    },
    revokeSnackBar() {
      self.isOpen = false;
      self.message = '';
      self.isError = false;
    },
  }));

export default SnackbarStore;
