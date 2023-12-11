import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const isClient = typeof window === 'object';
  const [totalDigits, setTotalDigits] = useState(0);

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (isClient) {
      const handleSize = () => {
        setWindowSize({
          width: isClient ? window.innerWidth : 0,
          height: isClient ? window.innerHeight : 0,
        });
      };
      handleSize();
      window.addEventListener('resize', handleSize);

      setTotalDigits(((windowSize.width * 0.8) / 16.17)-5);
      return () => window.removeEventListener('resize', handleSize);
    }
    return false;
  }, [isClient, windowSize.height]);

  return { windowSize, totalDigits };
}
