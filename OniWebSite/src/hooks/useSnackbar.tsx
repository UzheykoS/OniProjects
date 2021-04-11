import React, { useContext, createContext, useState, useCallback } from 'react';

export enum SnackbarType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Message = 'message'
}

interface ISnackbarContext {
  message?: string;
  title?: string;
  type?: SnackbarType;
  showSnackbar?: (message: string, type?: SnackbarType, title?: string) => void;
  hideSnackbar?: () => void;
}

const SnackbarContext = createContext<ISnackbarContext>({});

interface ISnackbarInternal {
  message: string;
  title?: string;
  type?: SnackbarType;
}

export function SnackbarProvider(props: { children?: React.ReactNode }) {
  const [state, setState] = useState<ISnackbarInternal>();

  function showSnackbar(
    message: string,
    type = SnackbarType.Success,
    title?: string
  ) {
    setState({
      message,
      title,
      type,
    });
  }

  function hideSnackbar() {
    setState(undefined);
  }

  return (
    <SnackbarContext.Provider
      value={{
        message: state?.message,
        type: state?.type,
        title: state?.title,
        showSnackbar,
        hideSnackbar,
      }}
      {...props}
    />
  );
}

interface ISnackbarState {
  message?: string;
  title?: string;
  type?: SnackbarType;
  showSnackbar: (message: string, type?: SnackbarType, title?: string) => void;
  hideSnackbar: () => void;
}

export function useSnackbar(): ISnackbarState {
  const snackbarContext = useContext(SnackbarContext);

  const open = useCallback(
    (message: string, type?: SnackbarType, title?: string) => {
      snackbarContext.showSnackbar &&
        snackbarContext.showSnackbar(message, type, title);
    },
    [snackbarContext.showSnackbar]
  );

  const close = useCallback(() => {
    snackbarContext.hideSnackbar && snackbarContext.hideSnackbar();
  }, [snackbarContext.hideSnackbar]);

  return {
    showSnackbar: open,
    hideSnackbar: close,
    message: snackbarContext.message,
    type: snackbarContext.type,
    title: snackbarContext.title,
  };
}
