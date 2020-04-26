import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

async function supportsWebp() {
  console.log('supportsWebp');
  
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

interface ISupportWebpContext {
  supports: boolean;
}

const SupportWebpContext = createContext<ISupportWebpContext>({
  supports: false,
});

export function SupportWebpProvider(props: { children?: React.ReactNode }) {
  const supportsAsync = useMemo(() => supportsWebp(), []);
  const [supports, setSupports] = useState(false);

  useEffect(() => {
    async function checkSupportsWebp() {
      setSupports(await supportsAsync);
    }
    checkSupportsWebp();
  }, []);

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
