import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { Busy } from '@common/Busy';

export async function supportsWebpOld() {
  if (!self.createImageBitmap) {
    return false;
  }

  const webpData =
    'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const blob = await fetch(webpData).then(r => r.blob());
  return createImageBitmap(blob).then(
    () => true,
    () => false
  );
}

function supportsWebp() {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }
  // very old browser like IE 8, canvas not supported
  return false;
}

interface ISupportWebpContext {
  supports: boolean;
}

const SupportWebpContext = createContext<ISupportWebpContext>({
  supports: false,
});

export function SupportWebpProvider(props: { children?: React.ReactNode }) {
  const supportsAsync = useMemo(() => supportsWebp(), []);
  const [supports, setSupports] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkSupportsWebp() {
      setSupports(await supportsAsync);
    }
    checkSupportsWebp();
  }, []);

  if (supports === null) {
    return <Busy loading />;
  }
  return (
    <SupportWebpContext.Provider
      value={{
        supports,
      }}
      {...props}
    />
  );
}

export function useSupportWebp(): ISupportWebpContext {
  const supportWebpContext = useContext(SupportWebpContext);

  return {
    supports: supportWebpContext.supports,
  };
}
