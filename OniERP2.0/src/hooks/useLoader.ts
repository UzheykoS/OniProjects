import { useState, useEffect } from 'react';
import { useStore } from './';

type FunctionType = (params: any) => Promise<any> | any;
type CleanupType = () => any;

interface IState {
  isFetching: boolean;
  isFetched: boolean;
  error: any;
  mount: boolean;
  data?: any;
}

interface ILoadingState extends IState {
  loading: boolean;
}

const defaultState = {
  isFetched: false,
  isFetching: false,
  error: null,
  mount: true,
};

export function useLoader<T extends FunctionType>(
  fn: T,
  options: {
    params?: Parameters<T>[0];
    conditions?: any[];
    cleanup?: CleanupType;
  } = {}
): [T, ILoadingState] {
  const [state, setState] = useState<IState>({ ...defaultState });
  const { snackbar } = useStore();

  const load = async (params: any) => {
    try {
      setState({
        isFetched: false,
        isFetching: true,
        error: null,
        mount: true,
      });

      const data = await fn(params);
      
      if (!state.mount) {
        return;
      }

      setState({
        isFetched: true,
        isFetching: false,
        error: null,
        mount: true,
        data,
      });

      return data;
    } catch (e) {
      snackbar.showSnackBar({
        message: e.error ? e.error.messages : 'Error fetching data',
        keepOpen: true,
        isError: true,
      });

      if (e instanceof Error) {
        console.error(e);
      }

      if (!state.mount) {
        return;
      }

      setState({
        isFetched: false,
        isFetching: false,
        error: e,
        mount: true,
      });

      return e;
    }
  };

  useEffect(() => {
    if (!state.isFetching && !state.isFetched && !state.error) {
      load(options.params);
    }
  }, [state]);

  if (options.conditions) {
    useEffect(() => {
      if (state.isFetched || state.error) {
        load(options.params);
      }
    }, options.conditions);
  }

  useEffect(() => {
    return () => {
      state.mount = false;
      if (!state.isFetching && options.cleanup) {
        options.cleanup();
      }
    };
  }, [null]);

  return [
    load as T,
    {
      ...state,
      loading: (!state.isFetched && !state.error) || state.isFetching,
    },
  ];
}
