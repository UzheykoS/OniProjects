// https://github.com/streamich/react-use/blob/master/docs/useRefMounted.md

import { RefObject, useEffect, useRef } from 'react';

export function useRefMounted(): RefObject<boolean> {
  const refMounted = useRef<boolean>(false);

  useEffect(() => {
    refMounted.current = true;

    return () => {
      refMounted.current = false;
    };
  });

  return refMounted;
}
