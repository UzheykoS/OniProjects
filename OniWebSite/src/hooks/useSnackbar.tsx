import React, { useContext, createContext, useState, useCallback } from 'react';

interface ISnackbarContext {
  message?: string;
  showSnackbar?: (message: string) => void;
  hideSnackbar?: () => void;
}

const SnackbarContext = createContext<ISnackbarContext>({});

export function SnackbarProvider(props: { children?: React.ReactNode }) {
  const [message, setMessage] = useState<string>();

  function showSnackbar(message: string) {
    setMessage(message);
  }

  function hideSnackbar() {
    setMessage(undefined);
  }

  return (
    <SnackbarContext.Provider
      value={{
        message,
        showSnackbar,
        hideSnackbar,
      }}
      {...props}
    />
  );
}

interface ISnackbarState {
    message?: string;
    showSnackbar: (message: string) => void;
    hideSnackbar: () => void;
  }

export function useSnackbar(): ISnackbarState {
  const snackbarContext = useContext(SnackbarContext);

  const open = useCallback(
    (message: string) => {
      snackbarContext.showSnackbar && snackbarContext.showSnackbar(message);
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
  };
}
