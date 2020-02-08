import React, { useContext, createContext, useState, useCallback } from 'react';

interface ILoadingContext {
  loadingCount: number;
  showLoading(): void;
  closeLoading(): void;
}

const LoadingContext = createContext<ILoadingContext>({
  loadingCount: 0,
  showLoading: () => {},
  closeLoading: () => {},
});

export function LoadingProvider(props: { children?: React.ReactNode }) {
  const [loadingCount, setLoadingCount] = useState(0);

  function showLoading() {
    setLoadingCount(loadingCount + 1);
  }

  function closeLoading() {
    setLoadingCount(loadingCount - 1);
  }

  return (
    <LoadingContext.Provider
      value={{
        loadingCount,
        showLoading,
        closeLoading,
      }}
      {...props}
    />
  );
}

interface ILoadingState {
  loading: boolean;
  showLoading(): void;
  closeLoading(): void;
}

export function useLoading(): ILoadingState {
  const loadingContext = useContext(LoadingContext);

  const open = useCallback(() => {
    loadingContext.showLoading();
  }, [loadingContext.showLoading]);

  const close = useCallback(() => {
    loadingContext.closeLoading();
  }, [loadingContext.closeLoading]);

  return {
    showLoading: open,
    closeLoading: close,
    loading: loadingContext.loadingCount > 0,
  };
}
