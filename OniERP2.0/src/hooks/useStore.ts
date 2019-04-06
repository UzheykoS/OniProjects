import * as React from 'react';
import { StoreContext } from '../models';

export function useStore() {
  return React.useContext(StoreContext);
}
