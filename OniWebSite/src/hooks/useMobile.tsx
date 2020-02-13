import React, { useContext, createContext } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface IMobileContext {
  isMobile: boolean;
}

const MobileContext = createContext<IMobileContext>({
  isMobile: false,
});

export function MobileProvider(props: { children?: React.ReactNode }) {
  const isMobile = useMediaQuery('(max-width: 1224px)');

  return (
    <MobileContext.Provider
      value={{
        isMobile,
      }}
      {...props}
    />
  );
}

export function useMobile(): IMobileContext {
  const mobileContext = useContext(MobileContext);

  return {
    isMobile: mobileContext.isMobile,
  };
}
